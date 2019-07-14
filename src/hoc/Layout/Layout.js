import React, { Component, Fragment } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';

class Layout extends Component {

    render() {
       let homePage = null;
       if(this.props.lang) {
        homePage =  (
            <div className='home-page'>
                <Toolbar lang = {this.props.lang}
                         click = {this.props.onChangeLang} />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
       }
        return (
            <Fragment>
                {homePage}
            </Fragment>
        )
    }
}

export default Layout;