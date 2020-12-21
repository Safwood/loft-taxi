import React from 'react';
import {connect} from 'react-redux';
import errowDown from '../images/errowDown.png';
import cross from '../images/cross.png';
import car1 from '../images/car1.png';
import car2 from '../images/car2.png';
import car3 from '../images/car3.png';
import { getRoute } from '../actions/routeAction';
import { Formik, Form, ErrorMessage } from "formik";
import '../css/Order.css';

class OrderForm extends React.Component {
  state = {
    isRouteBuilt: false
  }
  
  changeRouteStateTrue = () => {
    this.setState({isRouteBuilt: true})
  }

  changeRouteStateFalse = () => {
    this.setState({isRouteBuilt: false})
  }

  render() {
    return (
      <div>
        {this.state.isRouteBuilt
          ? 
          <div className="Map-page Map-page--new-order">
            <div className="Form-container Form-container--new-order">
            <form className="Form Form--new-order" onSubmit={this.changeRouteStateFalse}>
              <div className="Form__notification-wrapper Form__notification-wrapper--new-order">
              <h2 className="Form__heading Form__heading--profile">Заказ размещен</h2>
                <p className="Form__notification">
                Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                </p>
                <button className="Entry-button">Сделать новый заказ</button>
              </div>
              </form>
            </div>
          </div>
          : 
          <div className="Form-container Form-container--order-form">
            <Formik
              initialValues = {{
                address1: "",
                address2: ""
                
              }}
              onSubmit={(values) => {
                this.props.getRoute(values.address1, values.address2);
                this.changeRouteStateTrue();
              }
              }
              validate={values => {
                let errors= {}

                if (!values.address1) {
                  errors.address1 = "Укажите, пожалуйста, адрес отправления"
                }

                if (!values.address2) {
                  errors.address2 = "Укажите, пожалуйста, адрес места назначения"
                }

                return errors
              }}>
            
              {props => (
                <Form className="Form Form--order-form Order">
                <div className="Order-addresses">
                  <div className="Order-addresses__address Order-addresses__address--from">
                    <select { ...props.getFieldProps("address1")} name="address1" className="Order-addresses__input">
                      <option></option>
                      { this.props.addressList 
                        ? this.props.addressList.filter(item => item !== props.values.address2).map(item => {
                          return <option key={item}>{item}</option>
                        })
                        : <option></option>
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
                      ? this.props.addressList.filter(item => item!==props.values.address1).map (item => {
                          return <option key={item} value={item}>{item}</option>
                        })
                        
                      : <option></option>
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
                <div className="Order-cars">
                  <ul className="Order-cars__list">
                    <li className="Order-cars__item">
                      <input className="Order-cars__item-label" name="car" type="radio" id="car1"/>
                      <label htmlFor="car1">
                        <h3 className="Order-cars__heading">Стандарт</h3>
                        <p className="Order-cars__cost">стоимость</p>
                        <p className="Order-cars__price">150 ₽</p>
                        <img className="Order-cars__image" src={car1} alt="car"/>
                      </label>
                    </li>
                    <li className="Order-cars__item">
                      <input className="Order-cars__item-label" name="car" type="radio" id="car2"/>
                      <label htmlFor="car2">
                        <h3 className="Order-cars__heading">Премиум</h3>
                        <p className="Order-cars__cost">стоимость</p>
                        <p className="Order-cars__price">250 ₽</p>
                        <img className="Order-cars__image" src={car2} alt="car"/>
                      </label>
                    </li>
                    <li className="Order-cars__item">
                      <input className="Order-cars__item-label" name="car" type="radio" id="car3"/>
                      <label htmlFor="car3">
                        <h3 className="Order-cars__heading">Бизнес</h3>
                        <p className="Order-cars__cost">стоимость</p>
                        <p className="Order-cars__price">300 ₽</p>
                        <img className="Order-cars__image" src={car3} alt="car"/>
                      </label>
                    </li>
                  </ul>
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