import React from 'react';
import Header from "./Header";
import ProfileForm from "./ProfileForm";
import ProfileNotification from "./ProfileNotification";
import { connect } from "react-redux"
import { logOut } from "../actions"


class Profile extends React.Component {
  

  render() {
    return (
      <div>
        <Header currentPage={this.props.currentPage}/>
        <ProfileForm />
      </div>
    )
  }
}



export default connect(null, {logOut})(Profile);