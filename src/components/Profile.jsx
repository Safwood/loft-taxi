import React from 'react';
import Header from "./Header";
import ProfileNotification from "./ProfileNotification";
import ProfileForm from "./ProfileForm";
import { useSelector } from "react-redux"

export const Profile = () => {
  const isCardSaved = useSelector((state) => state.card.isCardSaved);
  
  return (
    <div>
      <Header/>
      <div>
        {isCardSaved
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

export default Profile;