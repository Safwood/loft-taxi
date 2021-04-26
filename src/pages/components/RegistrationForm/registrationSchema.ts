import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
  email: Yup.string()
  .email()
  .required("Укажите, пожалуйста, электронную почту"),
  password: Yup.string()
  .required("Укажите, пожалуйста, пароль")
  .min(6, "Пароль должен быть не менее 6 символов"),
  name: Yup.string()
  .required("Укажите, пожалуйста, Ваше имя"),
  surname: Yup.string()
  .required("Укажите, пожалуйста, Вашу фамилию"),    
})