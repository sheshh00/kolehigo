import React, { useState } from 'react';
import Profile1 from '../../DashboardAssets/ProfileAssets/Profile_Icon.png'
import EditIcon from '../../DashboardAssets/ProfileAssets/EditProfileIcon.png'

const ProfileName =  ({updatedName}) => {

    return (
        <div className="NameDis">
        <img src={Profile1} alt="Profile1"/>
        <h1>{updatedName ? updatedName : 'John Patrick Orbina Gerona'}
        <p>Freshman</p>
        </h1>
        </div>
    )
}

export default ProfileName