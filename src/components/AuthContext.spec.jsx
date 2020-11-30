import React from 'React';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { AuthProvider, AuthContext } from './AuthContext';

describe("AuthContext", () => {
  describe("#LogIn", () => {
    it("sets 'isLoggedIn' to true", () => {
      let isLoggedIn;
      let LogIn;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              LogIn = value.LogIn;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      )

      expect(isLoggedIn).toBe(false)
      act(() => {
        LogIn("mail@mail.ru", "111")
      })
      expect(isLoggedIn).toBe(true)
    })
  })

  describe("#logOut", () => {
    it("sets 'isLoggedIn' to false", () => {
      let isLoggedIn;
      let LogOut;
      let LogIn;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              LogOut = value.LogOut;
              LogIn = value.LogIn;
              isLoggedIn = value.isLoggedIn;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      act(() => {
        LogIn("mail@mail.ru", "111");
        LogOut();
      });

      expect(isLoggedIn).toBe(false);
    });
  });
})