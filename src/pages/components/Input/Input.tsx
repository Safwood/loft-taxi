import React from 'react';
import { ErrorMessage } from "formik";
import './Input.css';

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

export default function Input (props: PropsType) {
  return (
    <div className="Input__wrapper">
      <label className="Input__label" htmlFor={props.inputName}>{props.inputText}</label>
      <input className="Input__input" type={props.inputType} maxLength={props.maxlength} onKeyPress={props.onKeyPress} onChange={props.onChange} id={props.inputName} name={props.inputName} placeholder={props.placeholder} onBlur={props.onBlur}/>
      <ErrorMessage className="Input__error" name={props.inputName} component="div"/>
    </div>
  )
}