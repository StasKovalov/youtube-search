import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = ({exact, link, children}) => {
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

export default navigationItem;