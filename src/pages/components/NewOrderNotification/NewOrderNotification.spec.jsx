import React from 'React';
import NewOrderNotification from './NewOrderNotification';
import { render } from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe("./NewOrderNotification.jsx", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <NewOrderNotification />
      </Router>);
    const element = getByText(/Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут./i);
    expect(element).toBeInTheDocument();
  })
})