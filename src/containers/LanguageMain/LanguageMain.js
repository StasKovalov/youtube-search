import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './LanguageMain.css'

import Russia from '../../assets/images/russia.svg'
import England from '../../assets/images/english.svg'
import Button from '../../components/UI/Button/Button';


class LanguageMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: null,
        }
    }

    componentDidMount() {
        let langItem = localStorage.getItem('lang');
        if (langItem) {
            this.setState({ lang: langItem });
        }
    }

    onChangeLocale = ({ target: { dataset: { lang } } }) => {
        this.setState({ lang })
        localStorage.setItem('lang', lang)
    }

    render() {
        let redirect = null;
        if (this.state.lang) {
            redirect = <Redirect to='/search'/>
        }
        return (
            <div className='language-main'>
                <div className='language-item'>
                    <img alt='Русский флаг'
                        className='language-item__img'
                        src={Russia}></img>
                    <Button lang={'ru'}
                        clicked={this.onChangeLocale}>
                        Русский</Button>
                </div>

                <div className='language-item'>
                    <img alt='Английский флаг'
                        className='language-item__img'
                        src={England}></img>
                    <Button lang={'en'}
                        clicked={this.onChangeLocale}>
                        English</Button>
                </div>
                {redirect}
            </div>
        )
    }
}

export default LanguageMain;
