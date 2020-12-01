import React from 'react';
import {WithAuth} from './AuthContext'
import {HeaderWithAuth} from "./Header";



export class Profile extends React.Component {
    goToPage = (page) => {
      this.props.navigate(page);
    }
    
    render() {
    return (
      <div>
        <HeaderWithAuth goToPage={this.goToPage} currentPage={this.props.currentPage}/>
        <>Profile</>
      </div>
    )
  }
}



export const ProfileWithAuth = WithAuth(Profile);