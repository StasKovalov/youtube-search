import React from 'react';

import './index.css';

import Logo from '../../components/UI/Logo/Logo';
import SwitchLang from '../SwitchLang/SwitchLang';
import Navigation from '../Navigation/Navigation';

const Toolbar = props => {
    return (
        <header className='toolbar'>
            <Logo />
            <nav className='desktop-only'>
                <Navigation />
            </nav>
            <SwitchLang
                lang={props.lang}
                click={props.click} 
                />
        </header>
    )
}

export default Toolbar;