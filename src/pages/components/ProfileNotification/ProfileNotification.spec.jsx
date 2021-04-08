import React from 'React';
import ProfileNotification from './ProfileNotification';
import { render } from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe("./ProfileNotification.jsx", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <ProfileNotification />
      </Router>);
    const element = getByText(/Платёжные данные обновлены. Теперь вы можете заказывать такси./i);
    expect(element).toBeInTheDocument();
  })
})