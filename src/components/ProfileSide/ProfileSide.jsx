import React from 'react'

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
        </div>
    )
}

export default ProfileSide