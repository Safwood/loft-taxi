import React from 'react';
import Header from "../components/Header/Header";
import { Profile } from "../components/Profile/Profile";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import { useSelector } from "react-redux"
import { RootState } from '../../redux/rootReducer'

export const ProfilePage: React.FC<{}> = () => {
  const isCardUpdating = useSelector((state: RootState) => state.card.isCardUpdating);
  const isCardSaved = useSelector((state: RootState) => state.card.isCardSaved);
  
  return (
    <div>
      <Header/>
      <div>
        {isCardSaved && !isCardUpdating
        ? (
          <Profile />
        )
        : (
          <ProfileForm />
        )}
      </div>
    </div>
  )
}

export default ProfilePage;