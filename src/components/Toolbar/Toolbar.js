import React from 'react';

import './Toolbar.css';

import Logo from '../../components/UI/Logo/Logo';
import SwitchLang from '../SwitchLang/SwitchLang';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

const toolbar = props => {
    console.log('Произошел рендер компонента [Tollbar.js]');
    return (
        <header className = 'toolbar'>
            <Logo />
        <nav className = 'desktop-only'>
             <NavigationItems/>
        </nav>
             <SwitchLang   lang={props.lang}
                           click={props.click}/>
        </header>
    )
}

export default toolbar;