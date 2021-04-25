import React from 'react';
import './Link.css'
import { Link } from "react-router-dom"

type PropsType = {
  text: string,
  link: string
}

export default function AppLink ({text, link}: PropsType) {
  return (
          <Link className="Link" to={link}>{text}</Link>
  )
}