import React from 'react';
import { ErrorMessage } from "formik";

type PropsType = {
  inputName: string
  inputText: string
  inputType: string
  onKeyPress?: (e: React.KeyboardEvent) => void
  onChange: (e: React.ChangeEvent) => void
  maxlength?: number
  placeholder?: string
  onBlur: (e: React.FocusEvent) => void  
  errors?: string
}

const Input: React.FC<PropsType> = (props) => {
  return (
    <div className="Form__input-wrapper">
      <label className="Form__label" htmlFor={props.inputName}>{props.inputText}</label>
      <input type={props.inputType} maxLength={props.maxlength} onKeyPress={props.onKeyPress} onChange={props.onChange} id={props.inputName} className="Form__input" name={props.inputName} placeholder={props.placeholder} onBlur={props.onBlur}/>
      <ErrorMessage name={props.inputName} component="div" className="Form__error"/>
    </div>
  )
}
export default Input;