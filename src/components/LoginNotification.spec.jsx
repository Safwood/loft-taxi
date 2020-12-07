import React from 'React';
import { LoginNotification } from './LoginNotification';
import { render } from '@testing-library/react';


describe("LoginNotification", () => {

  it("renders correctrly", () => {
    const { container} = render (<LoginNotification/>)

    expect(container.innerHTML).toMatch('Вы зарегистрированы.')
  })
})



