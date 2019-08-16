import React, { Fragment } from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';

const Layout = ({ lang, onChangeLang, ...restProps }) => {
    return (
        <Fragment>
            {lang ? (<div className='home-page'>
                <Toolbar lang={lang}
                    click={onChangeLang} />
                <main>
                    {restProps.children}
                </main>
            </div>) : null}
        </Fragment>
    )
}

export default Layout;