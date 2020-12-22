import React from 'React';
import { render, screen  } from '@testing-library/react';
import Login from './Login';

jest.mock("./LoginNotification.jsx", () => {LoginNotification: () => <div>Вы зарегистрированы</div>})
jest.mock("./LoginForm.jsx", () => {LoginForm: () => <div>Вы зарегистрированы</div>})
jest.mock('react-redux', () => ({connect: () => (Component) => Component}));


//describe("./Login", () => {
 // it("renders component LoginNotification", () => {
 //   const {container} = render(<Login isLoggedIn={true}/>)
//    const LoginNotification = render(<LoginNotification/>)
 //   expect(container.lastChild.firstChild).toMatch(LoginNotification)
 // })

 // it("renders component LoginForm", () => {
 //   const {container} = render(<Login isLoggedIn={false}/>)
//    const LoginForm = render(<LoginForm/>)
 //   expect(container.lastChild.firstChild).toMatch(LoginForm)
 // })
//})
describe("./Login", () => {
  it("renders component LoginNotification", () => {
    render(<Login isLoggedIn={true} />);
    expect(screen.getByText(/Вы зарегистрированы/i)).toBeInTheDocument;
  })
})