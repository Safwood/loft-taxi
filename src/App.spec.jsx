import React from 'React';
import { render, fireEvent } from '@testing-library/react';
import { App } from './App';

jest.mock('./components/Map.jsx', () => ({Map: () => <div>Home component</div>}))
jest.mock('./components/Profile.jsx', () => ({Profile: () => <div>Profile component</div>}))
jest.mock('./components/Login.jsx', () => ({Login: () => <div>Login component</div>}))

describe("App", () => {
  it("renders correctly", () => {
    
  })
})