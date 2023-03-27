import React from 'react'

import './FollowersCard.css'
import { Followers } from '../../data/FollowersData'

const FollowersCard = () => {
    return (
        <div className="FollowersCard">
            <h4>who is following you</h4>

            {
                Followers.map((Follower, id) => {
                    return (
                        <div className="follower">
                            <div>
                                <img src={Follower.img} alt="" className='followerImage' />
                                <div className="name">
                                    <span>{Follower.name}</span>
                                    <span>@{Follower.username}</span>
                                </div>
                            </div>
                            <button className='button fc-button'>
                                Follow
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FollowersCard