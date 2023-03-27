import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'

// Component Import
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'


// css import 
import './ProfileSide.css'

const ProfileSide = () => {
    return (
        <div className="ProfileSide">
            <LogoSearch />
            <ProfileCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileSide