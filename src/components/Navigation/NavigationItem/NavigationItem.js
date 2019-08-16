import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const NavigationItem = ({exact, link, children}) => {
    return (
        <li className='navigation-item'>
            <NavLink
             exact={exact}
             to={link}
            >
                {children}
            </NavLink>
        </li>
    )
}

export default NavigationItem;