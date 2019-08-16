import React from 'react';
import './index.css';

import logo from '../../../assets/images/logo.png'

const Logo = props => {
    return (
        <div className='logo'>
            <img
                className='logo__img'
                src={logo}
                alt='Logo' />
        </div>
    )
}

export default Logo;