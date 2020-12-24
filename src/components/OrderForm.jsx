import React from 'react';
import {connect} from 'react-redux';
import errowDown from '../images/errowDown.png';
import cross from '../images/cross.png';
import { getRoute } from '../actions/routeAction';
import { Formik, Form, ErrorMessage } from "formik";
import '../css/Order.css';
import OrderCars from "./OrderCars"
import NewOrderNotification from "./NewOrderNotification"


export class OrderForm extends React.Component {
  state = {
    isRouteBuilt: false
  }
  
  changeRouteStateTrue = () => {
    this.setState({isRouteBuilt: true})
  }

  changeRouteStateFalse = () => {
    this.setState({isRouteBuilt: false})
  }

  onSubmit = (values) => {
    this.props.getRoute(values.address1, values.address2);
    this.changeRouteStateTrue();
  }

  validate = values => {
    let errors= {}

    if (!values.address1) {
      errors.address1 = "Укажите, пожалуйста, адрес отправления"
    }

    if (!values.address2) {
      errors.address2 = "Укажите, пожалуйста, адрес места назначения"
    }

    return errors
  }

  initialValues = {
    address1: "",
    address2: ""
    
  }

  render() {
    return (
      <div>
        {this.state.isRouteBuilt
          ? 
          <NewOrderNotification onSubmit={this.changeRouteStateFalse}/>
          : 
          <div className="Form-container Form-container--order-form">
            <Formik
              initialValues = {this.initialValues}
              onSubmit={this.onSubmit}
              validate={this.validate}
              >
              {props => (
                <Form className="Form Form--order-form Order">
                <div className="Order-addresses">
                  <div className="Order-addresses__address Order-addresses__address--from">
                    <select { ...props.getFieldProps("address1")} name="address1" className="Order-addresses__input">
                      <option></option>
                      { this.props.addressList 
                        && this.props.addressList.filter(item => item !== props.values.address2).map(item => {
                          return <option key={item}>{item}</option>
                        })
                      } 
                    </select>
                    <button className="Order-addresses__button">
                      <img className="Order-addresses__button-image" src={cross} alt="cross"/>
                    </button>
                    <button className="Order-addresses__button Order-addresses__button--errow">
                      <img  className="Order-addresses__button-image" src={errowDown} alt="errowDown"/>
                    </button>
                  </div>
                  <div className="Order-addresses__address Order-addresses__address--to">
                    <select { ...props.getFieldProps("address2")} name="address2" className="Order-addresses__input">
                    <option></option>
                    { this.props.addressList 
                      && this.props.addressList.filter(item => item!==props.values.address1).map (item => {
                        return <option key={item} value={item}>{item}</option>
                      })
                    }
                    </select>
                    <button className="Order-addresses__button">
                      <img  className="Order-addresses__button-image" src={cross} alt="cross"/>
                    </button>
                    <button className="Order-addresses__button Order-addresses__button--errow">
                      <img  className="Order-addresses__button-image" src={errowDown} alt="errowDown"/>
                    </button>
                  </div>
                </div>
                <OrderCars />
                <div className="Order-button">
                  <ErrorMessage name="address1" component="div" className="Form__error"/>
                  <ErrorMessage name="address2" component="div" className="Form__error"/>
                  <input type="submit"  disabled={!props.values.address1 && !props.values.address2 && props.errors} className="Order-form__button Entry-button" value="Заказать" />
                </div>
              </Form>
              )}
            </Formik> 
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  addressList: state.address.addressList,
})

const mapDispatchToProps = dispatch => ({
  getRoute: (address1, address2) => dispatch(getRoute(address1, address2))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);