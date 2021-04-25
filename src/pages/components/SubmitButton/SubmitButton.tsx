import React from 'react';
import './SubmitButton.css'

type SubmitButtonPropsType = {
  value: string,
  disabled: boolean
}

export default function SubmitButton ({value, disabled}: SubmitButtonPropsType) {
  return (
          <input className="Submit__button" type="submit" disabled={disabled} value={value}></input>
  )
}