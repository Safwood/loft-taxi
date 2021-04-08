import React from 'React';
import { render, screen } from '@testing-library/react';
import { RegistrationForm } from './RegistrationForm';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';


describe("RegistrationForm", () => {
  const history = createMemoryHistory();
  it("renders correctly", () => {
    render(
      <Router history={history}>
        <RegistrationForm/>
      </Router>
    )

    expect(screen.getByRole("button")).toBeInTheDocument;
    expect(screen.getByText(/Придумайте пароль/i)).toBeInTheDocument;
    expect(screen.getByText(/Как ваша фамилия?/i)).toBeInTheDocument;
    expect(screen.getByText(/Как вас зовут?/i)).toBeInTheDocument;
    expect(screen.getByText(/Email/i)).toBeInTheDocument;
  })
})

