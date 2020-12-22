import React from 'react';
import {render} from '@testing-library/react';
import {App} from './App';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

jest.mock('./components/Login', () => ({Login: () => <div>LoginWithAuth component</div>}));
jest.mock('./components/Profile', () => ({Profile: () => <div>Profile component</div>}));
jest.mock('./components/Registration', () => ({Registration: () => <div>Registration component</div>}));
jest.mock('./components/Map', () => ({Map: () => <div>Map component</div>}));
jest.mock('react-redux', () => ({connect: () => (Component) => Component}));

describe('App', () => {
  it('renders correctly', () => {
    const history = createMemoryHistory();
    history.push('/profile/');

    render(
      <Router history={history}>
        <App />
      </Router>
    );
  });
});