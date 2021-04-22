import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../../redux/rootReducer'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './Profile.css';
import Typography from '@material-ui/core/Typography';
import { MyButton } from '../Button/Button'

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
      <Grid className="Profile">
        <Typography variant="h3"  className="ProfileTitle">Профиль</Typography>
       <Grid className="ProfileInfo">
          <Grid className="ProfileLine">
            <Typography variant="body1"><b>ФИО:</b></Typography>
            <Typography variant="body1">{userName}</Typography>
          </Grid>
          <Grid className="ProfileLine">
            <Typography variant="body1"><b>Номер карты:</b></Typography>
            <Typography variant="body1">{disguisedNumber}</Typography>
          </Grid>
         <Grid className="ProfileLine">
            <Typography variant="body1"><b>Срок действия:</b></Typography>
            <Typography variant="body1">{expiryDate}</Typography>
         </Grid>
          <Grid className="ProfileLine">
            <Typography variant="body1"><b>CVC:</b></Typography>
            <Typography variant="body1">***</Typography>
          </Grid>
       </Grid >
        <MyButton text={buttonText} onClick={handleClick}/>
      </Grid>
    </Container>
    </>
  )
}