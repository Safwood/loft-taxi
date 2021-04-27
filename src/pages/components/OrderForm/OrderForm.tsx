import React, { useCallback} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import './OrderForm.css';
import OrderCars from "./OrderCars/OrderCars";
import NewOrderNotification from "../NewOrderNotification/NewOrderNotification";
import { RootState } from '../../../redux/rootReducer'
import { OrderFormValuesType } from '../../../types'
import SubmitButton from '../SubmitButton/SubmitButton';
import { orderSchema } from './orderSchema'

function OrderForm() {
  const addressList = useSelector((state: RootState) => state.address.addressList);
  const isRouteSaved = useSelector((state: RootState) => state.route.isRouteSaved);
  const dispatch = useDispatch();
  const getRoute = useCallback((address1, address2) => dispatch({type: "route/GET_ROUTE", payload: {address1, address2}}), [dispatch])
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };
  const onSubmit = (values: OrderFormValuesType) => {
    getRoute(values.address1, values.address2);
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
        <div className="OrderForm__container">
          <Formik
            initialValues = {initialValues}
            onSubmit={onSubmit}
            validationSchema={orderSchema}
            >
            {props => (
              <Form className="OrderForm__form">
              <div className="OrderForm__addresses">
                <div className="OrderForm__address OrderForm__address--from">
                  <select { ...props.getFieldProps("address1")} name="address1" className="OrderForm__input">
                    <option></option>
                    { addressList 
                      && addressList.filter(item => item !== props.values.address2).map(item => {
                        return <option key={item}>{item}</option>
                      })
                    } 
                  </select>
                </div>
                <div className="OrderForm__address OrderForm__address--to">
                  <select { ...props.getFieldProps("address2")} name="address2" className="OrderForm__input">
                  <option></option>
                  { addressList 
                    && addressList.filter(item => item!==props.values.address1).map (item => {
                      return <option key={item} value={item}>{item}</option>
                    })
                  }
                  </select>
                </div>
              </div>
              <OrderCars onChange={handleChange} checked={selectedValue}/>
              <div className="OrderForm__button">
                <ErrorMessage name="address1" component="div" className="OrderForm__error"/>
                <ErrorMessage name="address2" component="div" className="OrderForm__error"/>
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

export default React.memo(OrderForm);