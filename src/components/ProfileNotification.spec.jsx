import React from 'React';
import { ProfileNotification } from './ProfileNotification';
import { render } from '@testing-library/react';


describe("ProfileNotification", () => {

  it("renders correctrly", () => {
    const { container} = render (<ProfileNotification/>)

    expect(container.innerHTML).toMatch('Платёжные данные обновлены. Теперь вы можете заказывать такси.')
  })
})



