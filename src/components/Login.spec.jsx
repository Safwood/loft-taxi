import React from 'React';
import { render } from '@testing-library/react';
import { LoginForm } from './Login';

describe("LoginForm", () => {
  it("renders correctly", () => {
    const {getByLabelText} = render(<LoginForm/>)
    expect(getByLabelText('Email:')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Password:')).toHaveAttribute('name', 'password')
  })
})