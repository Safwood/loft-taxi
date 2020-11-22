import React from 'React';
import { render } from '@testing-library/react';
import { SideSection } from './Side-section';

describe("SideSection", () => {
  it("renders correctly", () => {
    const {container} = render(<SideSection/>)
    expect(container.innerHTML).toMatch("Side-section")
  })
})