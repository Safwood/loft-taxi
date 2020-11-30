import React from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const LogIn = (email, password) => {
    if (email !== "mail@mail.ru" || password !== "111") {
      return;
    } else {
      setIsLoggedIn(true)
    }
  }

  const LogOut = () => {
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{LogIn, LogOut, isLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export const WithAuth = (WrappedComponent) => {
  return class extends React.Component {
    render(){
      return (
        <AuthContext.Consumer>
          {
          (value) => {
            return <WrappedComponent {...value} {...this.props} />
          }
          }
        </AuthContext.Consumer>
      )
    }
  }
}