import React from 'React';
import { render, fireEvent } from '@testing-library/react';
import { App } from './App';

jest.mock('./components/Map.jsx', () => ({Map: () => <div>Map component</div>}))
jest.mock('./components/Profile.jsx', () => ({Profile: () => <div>Profile component</div>}))
jest.mock('./components/Login.jsx', () => ({Login: () => <div>Login component</div>}))

describe("App", () => {
  it("renders correctly", () => {
    const {container} = render(<App/>)
    expect(container.innerHTML).toMatch("Home component")

  })

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponing page", () => {
      const {getByText, container} = render (<App/>)

      fireEvent.click(getByText('Карты'))
      expect(container.innerHTML).toMatch('Map component')
      fireEvent.click(getByText('Профиль'))
      expect(container.innerHTML).toMatch('Profile component')
      fireEvent.click(getByText('Войти'))
      expect(container.innerHTML).toMatch('Login component')
    })
  })
})