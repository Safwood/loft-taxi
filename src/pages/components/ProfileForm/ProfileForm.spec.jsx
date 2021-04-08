import React from 'React';
import { render, screen } from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {ProfileForm} from './ProfileForm';

describe("ProfileForm", () => {
  const history = createMemoryHistory();
  it("renders correctly", () => {
    render(
      <Router history={history}>
        <ProfileForm/>
      </Router>
    )

    expect(screen.getByRole("button")).toBeInTheDocument;
    expect(screen.getByText(/Имя владельца/i)).toBeInTheDocument;
    expect(screen.getByText(/Номер карты/i)).toBeInTheDocument; 
    expect(screen.getByText(/MM.YY/i)).toBeInTheDocument; 
    expect(screen.getByText(/CVC/i)).toBeInTheDocument;
  })
})
