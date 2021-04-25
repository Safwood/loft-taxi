import React, { useCallback} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import './OrderForm.css';
import OrderCars from "./OrderCars/OrderCars";
import NewOrderNotification from "../NewOrderNotification/NewOrderNotification";
import { RootState } from '../../../redux/rootReducer'
import { OrderErrorsType, OrderFormValuesType } from '../../../types'
import SubmitButton from '../SubmitButton/SubmitButton';

export const OrderForm: React.FC = () => {
  const addressList = useSelector((state: RootState) => state.address.addressList);
  const isRouteSaved = useSelector((state: RootState) => state.route.isRouteSaved);
  const dispatch = useDispatch();
  const getRoute = useCallback((address1, address2) => dispatch({type: "route/GET_ROUTE", payload: {address1, address2}}), [dispatch])

  const onSubmit = (values: OrderFormValuesType) => {
    getRoute(values.address1, values.address2);
  }

  const validate = (values: OrderFormValuesType): OrderErrorsType => {
    let errors: OrderErrorsType = {}

    if (!values.address1) {
      errors.address1 = "Укажите, пожалуйста, адрес отправления"
    }

    if (!values.address2) {
      errors.address2 = "Укажите, пожалуйста, адрес места назначения"
    }

    return errors
  }

  let initialValues = {
    address1: "",
    address2: ""
    
  }

  return (
    <div>
      {isRouteSaved
        ? 
        <NewOrderNotification/>
        : 
        <div className="Form-container Form-container--order-form">
          <Formik
            initialValues = {initialValues}
            onSubmit={onSubmit}
            validate={validate}
            >
            {props => (
              <Form className="Form Form--order-form Order">
              <div className="Order-addresses">
                <div className="Order-addresses__address Order-addresses__address--from">
                  <select { ...props.getFieldProps("address1")} name="address1" className="Order-addresses__input">
                    <option></option>
                    { addressList 
                      && addressList.filter(item => item !== props.values.address2).map(item => {
                        return <option key={item}>{item}</option>
                      })
                    } 
                  </select>
                </div>
                <div className="Order-addresses__address Order-addresses__address--to">
                  <select { ...props.getFieldProps("address2")} name="address2" className="Order-addresses__input">
                  <option></option>
                  { addressList 
                    && addressList.filter(item => item!==props.values.address1).map (item => {
                      return <option key={item} value={item}>{item}</option>
                    })
                  }
                  </select>
                </div>
              </div>
              <OrderCars />
              <div className="Order-button">
                <ErrorMessage name="address1" component="div" className="Form__error"/>
                <ErrorMessage name="address2" component="div" className="Form__error"/>
                <SubmitButton  disabled={
                  !props.values.address1 && 
                  !props.values.address2 && 
                  props.errors
                  ? true 
                  : false}
                value={"Заказать"} />
              </div>
            </Form>
            )}
          </Formik> 
        </div>
      }
    </div>
  )
}

export default OrderForm;