import React from 'react';
import { ErrorMessage } from "formik";

const Input = (props) => {
  return (
    <div className="Form__input-wrapper">
      <label className="Form__label" htmlFor={props.inputName}>{props.inputText}</label>
      <input type={props.inputType} onKeyPress={props.onKeyPress} onChange={props.onChange} maxLength={props.maxlength} id={props.inputName} className="Form__input" name={props.inputName} placeholder={props.placeholder} onBlur={props.onBlur}/>
      <ErrorMessage name={props.inputName} error={props.errors} component="div" className="Form__error"/>
    </div>
  )
}

export default Input;
    