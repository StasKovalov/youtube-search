import React from 'react';
import './NavigationItems.css';

import { TEXT } from '../../../services/locale/editLang';

import NavigationItem from './NavigationItem/NavigationItem';



const navigationItems = props => {
    return (
            <ul className='navigation-items'>
                <NavigationItem link='/search' exact>{TEXT.navigation.search}</NavigationItem>
                <NavigationItem link='/history'>{TEXT.navigation.history}</NavigationItem>
            </ul>
    )
}

export default navigationItems;