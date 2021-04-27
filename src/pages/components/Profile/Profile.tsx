import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../../redux/rootReducer'
import Container from '@material-ui/core/Container';
import './Profile.css';
import AppButton from '../Button/Button'

export const Profile: React.FC<{}> = () => {
  const userName = useSelector((state: RootState) => state.card.cardName);
  const cardNumber = useSelector((state: RootState) => state.card.cardNumber);
  const expiryDate = useSelector((state: RootState) => state.card.expiryDate);
  const buttonText: string = 'Обновить данные';

  const dispatch = useDispatch();
  const updateCard = useCallback(() => dispatch({type: "card/UPDATE_CARD"}), [dispatch])
 
  const coverCardNumber = (cardNumber: string | null | undefined): any => {
    if (typeof cardNumber === 'string') {
      return cardNumber.split('').reverse()
      .map((digit, index) => {
         if(index <= 3) {
           return digit 
         } else {
           return '*'
         }
       })
       .reverse().join('');
    } 
  }

  const disguisedNumber: string = coverCardNumber(cardNumber);
  const handleClick = (e: MouseEvent): void => {
    e.preventDefault();
    updateCard();
  }

  return (
    <>
    <Container maxWidth='sm'>
      <div className="Profile">
        <h3 className="Profile__heading">Профиль</h3>
       <div className="Profile__info">
          <div className="Profile__line">
            <p className="Profile__title">ФИО:</p>
            <p className="Profile__value">{userName}</p>
          </div>
          <div className="Profile__line">
            <p className="Profile__title">Номер карты:</p>
            <p className="Profile__value">{disguisedNumber}</p>
          </div>
         <div className="Profile__line">
            <p className="Profile__title">Срок действия:</p>
            <p className="Profile__value">{expiryDate}</p>
         </div>
          <div className="Profile__line">
            <p className="Profile__title">CVC:</p>
            <p className="Profile__value">***</p>
          </div>
       </div >
        <AppButton text={buttonText} onClick={handleClick}/>
      </div>
    </Container>
    </>
  )
}