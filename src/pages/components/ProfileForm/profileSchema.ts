import * as Yup from "yup";

export const profileSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .required("Поле 'Номер карты' должно быть заполнено")
      .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Номер карты должен состоять из не менее 12 цифр"),
      expiryDate: Yup.date()
      .required( "Поле 'Дата' должно быть заполнено" ),
      cardName: Yup.string()
      .required( "Поле 'Имя' должно быть заполнено" )
      .matches(/^[A-Z\s]+$/, "Имя должно быть написано заглавными латинскими буквами"),
      cvc: Yup.number()
      .required( "Поле 'CVC' должно быть заполнено" )
      
})