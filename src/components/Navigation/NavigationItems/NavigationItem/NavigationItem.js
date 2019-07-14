import React from 'react';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const navigationItem = props => {
    return (
        <li className = 'navigation-item'>
            <NavLink exact = {props.exact} to = {props.link}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default navigationItem;