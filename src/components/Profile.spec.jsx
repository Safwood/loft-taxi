import React from 'React';
import { Profile } from './Profile';
import { render } from '@testing-library/react';


describe("Profile", () => {

  it("renders correctrly", () => {
    const { container} = render (<Profile/>)

    expect(container.innerHTML).toMatch('Profile')
  })
})



