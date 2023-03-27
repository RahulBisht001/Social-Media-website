import React from 'react'


import { UilSearch } from '@iconscout/react-unicons'

// css import
import './LogoSearch.css'

// Image Import
import logo from '../../img/logo.png'




const LogoSearch = () => {
    return (
        <div className="LogoSearch">
            <img src={logo} alt="Friend Zone" />
            <div className="Search">
                <input type="text" placeholder='#Explore' />
                <div className="s-icon">
                    <UilSearch />
                </div>
            </div>
        </div>
    )
}

export default LogoSearch