import React from 'React';
import { render, screen } from '@testing-library/react';
import { OrderForm } from './OrderForm';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe("OrderForm", () => {
  const history = createMemoryHistory();
  it("renders correctly", () => {
    render(
      <Router history={history}>
        <OrderForm/>
      </Router>
      )

    expect(screen.getAllByRole("button")).toBeInTheDocument;
    expect(screen.getAllByRole("option")).toBeInTheDocument;
  })
})
