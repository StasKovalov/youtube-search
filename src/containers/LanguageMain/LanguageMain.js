import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './LanguageMain.css'

import Russia from '../../assets/images/russia.svg';
import England from '../../assets/images/english.svg';
import Button from '../../components/UI/Button/Button';


class LanguageMain extends Component {

    render() {
        let redirect = null;
        if (this.props.lang) {
            redirect = <Redirect to='/search'/>
        }
        return (
            <div className='language-main'>
                <div className = 'language-items'>
                <div className='language-item'>
                    <img alt='Русский флаг'
                        className='language-item__img'
                        src={Russia}></img>
                    <Button lang={'ru'}
                        clicked={this.props.onChangeLocale}>
                        Русский</Button>
                </div>

                <div className='language-item'>
                    <img alt='Английский флаг'
                        className='language-item__img'
                        src={England}></img>
                    <Button lang={'en'}
                        clicked={this.props.onChangeLocale}>
                        English</Button>
                </div>
                </div>
               
                {redirect}
            </div>
        )
    }
}

export default LanguageMain;
