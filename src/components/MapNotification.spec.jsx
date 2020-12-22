import React from 'React';
import MapNotification from './MapNotification';
import { render } from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe("./MapNotification.jsx", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <MapNotification />
      </Router>);
    const element = getByText(/Для заказа такси заполните платёжные данные в профиле./i);
    expect(element).toBeInTheDocument();
  })
})