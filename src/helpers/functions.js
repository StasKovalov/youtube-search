import React from 'react';
import Russia from '../assets/images/russia.svg';
import England from '../assets/images/english.svg';
import Option from '../components/UI/Select/Option/Option';

export const selectLang = (lang) => {
    let selectValue = null;

    switch (lang) {
        case ('ru'): selectValue = (<Option id='option-russia'>
            <img alt='Россия' className='option__img'
                src={Russia}></img>
                 <span className = 'option-lang'>RU</span>
        </Option>)
            break;

        case ('en'): selectValue = (<Option id='option-english'>
            <img alt='Англия' className='option__img'
                src={England}></img>
                 <span className = 'option-lang'>ENG</span>
        </Option>)
            break;
        default: selectValue = (<Option id='option-english'>
            <img className='option__img'
                alt='Англия'
                src={England}></img>
                 <span className = 'option-lang'>ENG</span>
        </Option>)
    }
    return selectValue;
}



