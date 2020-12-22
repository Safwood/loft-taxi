import React from 'React';
import {LoginNotification} from './LoginNotification';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe("./LoginNotification.jsx", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <LoginNotification />
      </Router>);
    const element = getByText(/Вы зарегистрированы./i);
    expect(element).toBeInTheDocument();
  })
})


