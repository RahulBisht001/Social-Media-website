import React from 'react'


import cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg'

import './ProfileCard.css'

const ProfileCard = () => {
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={cover} alt="" />
                <img src={profile} alt="" />
            </div>

            <div className="ProfileName">
                <span>Zenny eyl</span>
                <span>Senior Front End Developer</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>9543</span>
                        <span>followers</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>69</span>
                        <span>followings</span>
                    </div>
                </div>
                <hr />
            </div>

            <span>
                My Profile
            </span>
        </div>
    )
}

export default ProfileCard