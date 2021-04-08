import React from 'React';
import {Header} from './Header';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe("./Header.jsx", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Header />
      </Router>
    )

    expect(screen.getAllByRole("link")).toBeInTheDocument;
    expect(screen.getByText(/Карты/i)).toBeInTheDocument;
    expect(screen.getByText(/Профиль/i)).toBeInTheDocument;
    expect(screen.getByText(/Выйти/i)).toBeInTheDocument;
  })
})