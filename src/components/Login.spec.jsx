import React from 'React';
import { render } from '@testing-library/react';
import { Login } from './Login';

jest.mock("./LoginNotification.jsx", () => <div>Вы зарегистрированы</div>)
jest.mock("./LoginForm.jsx", () => <div>Форма Login</div>)

describe("./Login", () => {
  it("renders component LoginNotification", () => {
    const {container} = render(<Login isLoggedIn={true}/>)
    const LoginNotification = render(<LoginNotification/>)
    expect(container.lastChild.firstChild).toMatch(LoginNotification)
  })

  it("renders component LoginForm", () => {
    const {container} = render(<Login isLoggedIn={false}/>)
    const LoginForm = render(<LoginForm/>)
    expect(container.lastChild.firstChild).toMatch(LoginForm)
  })
})