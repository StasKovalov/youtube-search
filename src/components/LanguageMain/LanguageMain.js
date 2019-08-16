import React from 'react';
import { Redirect } from 'react-router-dom';
import './index.css'

import Russia from '../../assets/images/russia.svg';
import England from '../../assets/images/english.svg';

import Button from '../../components/UI/Button/Button';


const LanguageMain = ({lang, onChangeLocale, ...restProps}) => {

    let redirect = lang ? <Redirect to='/search' /> : null;

    return (
        <div className='language-main'>
            <div className='language-items'>
                <div className='language-item'>
                    <img
                        alt='Русский флаг'
                        className='language-item__img'
                        src={Russia}
                    />
                    <Button lang={'ru'} clicked={onChangeLocale}>Русский</Button>
                </div>

                <div className='language-item'>
                    <img
                        alt='Английский флаг'
                        className='language-item__img'
                        src={England} 
                        />
                    <Button lang={'en'} clicked={onChangeLocale}>English</Button>
                </div>
            </div>
            {redirect}
        </div>
    )
}

export default LanguageMain;
