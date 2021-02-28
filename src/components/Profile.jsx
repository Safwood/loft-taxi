import React from 'react';
import Header from "./Header";
import {PropTypes} from "prop-types";
import ProfileNotification from "./ProfileNotification";
import ProfileForm from "./ProfileForm";
import { connect } from "react-redux"

export const Profile = (props) => {
  
  return (
    <div>
      <Header/>
      <div>
        {props.isCardSaved
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

Profile.propTypes = {
  isCardSaved: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isCardSaved: state.card.isCardSaved
})

export default connect(mapStateToProps)(Profile);