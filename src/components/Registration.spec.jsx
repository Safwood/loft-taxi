import React from 'React';
import { render } from '@testing-library/react';
import RegistrationForm from './Registration';

describe("RegistrationForm", () => {
  it("renders correctly", () => {
    const {getByTestId} = render(<RegistrationForm/>)
    expect(getByTestId('email')).toHaveAttribute('name', 'email')
    expect(getByTestId('password')).toHaveAttribute('name', 'password')
    expect(getByTestId('name')).toHaveAttribute('name', 'name')
  })
})