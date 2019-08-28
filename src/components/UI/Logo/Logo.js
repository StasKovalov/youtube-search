import React from 'react';
import './index.css';

import {Link} from "react-router-dom";

import logo from '../../../assets/images/logo.png'

const Logo = props => {
    return (
        <Link className="link" to="/search">
            <div className='logo'>
                <img
                    className='logo__img'
                    src={logo}
                    alt='Logo' />
            </div>
        </Link>
    )
}

export default Logo;