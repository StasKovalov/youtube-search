import React, { Component, Fragment } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import { changeLocale } from '../../services/locale/editLang';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: null
        }
    }

    componentDidMount() {
        let lang = localStorage.getItem('lang');
        if (lang) {
            changeLocale(lang);
            this.setState({ lang });
        }
    }

    onChangeLang = ({ currentTarget: { dataset: { lang } } }) => {
        localStorage.setItem('lang', lang);
        changeLocale(lang);
        this.setState({ lang })
    }

    render() {
        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
              lang: this.state.lang
            });
          });
        return (
            <div className='home-page'>
                <Toolbar lang = {this.state.lang}
                         click = {this.onChangeLang} />
                <main>
                    {children}
                </main>
            </div>
        )
    }
}

export default Layout;