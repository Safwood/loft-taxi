import React from 'react';
import Header from "../components/Header/Header";
import ProfileNotification from "../components/ProfileNotification/ProfileNotification";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import { useSelector } from "react-redux"
import { RootState } from '../../redux/rootReducer'

export const ProfilePage = () => {
  const isCardSaved = useSelector((state: RootState) => state.card.isCardSaved);
  
  return (
    <div>
      <Header/>
      <div>
        {!isCardSaved
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

export default ProfilePage;