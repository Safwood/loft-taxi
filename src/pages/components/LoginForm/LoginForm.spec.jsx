import React from 'React';
import { render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe("LoginForm", () => {
  const history = createMemoryHistory();
  it("renders correctly", () => {
    render(
      <Router history={history}>
        <LoginForm/>
      </Router>
      )

    expect(screen.getByRole("button")).toBeInTheDocument;
    expect(screen.getAllByRole("textbox")).toBeInTheDocument;
    expect(screen.getByText(/Пароль/i)).toBeInTheDocument;
    expect(screen.getByText(/Email/i)).toBeInTheDocument;
  })
})
