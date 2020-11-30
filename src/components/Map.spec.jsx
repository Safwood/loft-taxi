import React from 'React';
import { MapWithAuth }  from './Map';
import { render, screen } from '@testing-library/react';


describe("MapWithAuth", () => {
  it('renders correctly', () => {
    render(<MapWithAuth />);
    screen.debug();
    expect(screen.getByText("Профиль")).toBeInTheDocument();
  });
});