import React from 'React';
import { render } from '@testing-library/react';
import RegistrationForm from './Registration';

describe("RegistrationForm", () => {
  it("renders correctly", () => {
    const {getByLabelText} = render(<RegistrationForm/>)
    expect(getByLabelText('Email*')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Придумайте пароль*')).toHaveAttribute('name', 'password')
    expect(getByLabelText('Как Вас зовут?*')).toHaveAttribute('name', 'name')
  })
})