import React from 'react';
import './Button.css'
import { Link } from "react-router-dom"

type PropsType = {
  text: string,
  onClick?: any
  link?: string
}

export default function AppButton ({text, onClick, link}: PropsType) {
  return (
          <button className="Button" onClick={onClick}>{link? <Link to={link}>{text}</Link> : text}</button>
  )
}