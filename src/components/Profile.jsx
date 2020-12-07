import React from 'react';
import Header from "./Header";
import {PropTypes} from "prop-types";
import ProfileNotification from "./ProfileNotification";
import ProfileForm from "./ProfileForm";
import { connect } from "react-redux"

class Profile extends React.Component {
  
  render() {
    return (
      <div>
        <Header/>
        <div>
          {this.props.isCardSaved
          ? (
            <ProfileNotification />
          )
          : (
            <ProfileForm />
          )}
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  isCardSaved: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isCardSaved: state.card.isCardSaved
})

export default connect(mapStateToProps)(Profile);