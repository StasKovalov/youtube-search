import React from 'react';
import './index.css';

import { TEXT } from '../../services/locale/editLang';

import NavigationItem from './NavigationItem/NavigationItem';



const Navigation = props => {
    return (
            <ul className='navigation-items'>
                <NavigationItem link='/search' exact>{TEXT.navigation.search}</NavigationItem>
                <NavigationItem link='/history'>{TEXT.navigation.history}</NavigationItem>
            </ul>
    )
}

export default Navigation;