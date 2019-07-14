import React from 'react';
import './Logo.css';
import Logo from '../../../assets/images/logo.png'

const logo = props => {
    return (
        <div className = 'logo'>
        <img className = 'logo__img'
             src = {Logo}
             alt = 'Logo'/>
        </div>
    )
}

export default logo;