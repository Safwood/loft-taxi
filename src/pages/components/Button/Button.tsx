import React from 'react';
import Button from '@material-ui/core/Button';
import './Button.css'

type PropsType = {
  text: string,
  onClick: any
}

export const MyButton: React.FC<PropsType> = ({text, onClick}) => {
  return (
          <Button style={{
            backgroundColor: '#FDBF5A',
            borderRadius: '70px',
            fontSize: '25px',
            padding: '8px 60px',
            width: '356px',
            textTransform: 'none'
          }} className="Button" onClick={onClick}>{text}</Button>
  )
}

export default MyButton;