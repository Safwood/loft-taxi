import * as Yup from "yup";

export const orderSchema = Yup.object().shape({
      address1: Yup.string()
      .required("Укажите, пожалуйста, адрес отправления"),
      address2: Yup.string()
      .required( "Укажите, пожалуйста, адрес места назначения" )    
})