import React from 'React';
import { render } from '@testing-library/react';
import { LoginForm } from './Login';

describe("LoginForm", () => {
  it("renders correctly", () => {
    const {getByTestId} = render(<LoginForm/>)
    expect(getByTestId('email')).toHaveAttribute('name', 'email')
    expect(getByTestId('password')).toHaveAttribute('name', 'password')
  })
})
