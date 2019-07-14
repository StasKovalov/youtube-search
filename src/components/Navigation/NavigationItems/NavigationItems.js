import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { TEXT } from '../../../services/locale/editLang';


const navigationItems = props => {
    return (
            <ul className='navigation-items'>
                <NavigationItem link='/search' exact>{TEXT.navigation.search}</NavigationItem>
                <NavigationItem link='/history'>{TEXT.navigation.history}</NavigationItem>
            </ul>
    )
}

export default navigationItems;