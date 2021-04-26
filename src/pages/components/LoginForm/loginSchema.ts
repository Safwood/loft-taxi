import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
      email: Yup.string()
      .email()
      .required("Поле 'Email' должно быть заполнено"),
      password: Yup.string()
      .required( "Поле 'Пароль' должно быть заполнено" ),
})