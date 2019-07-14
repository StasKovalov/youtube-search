import React from 'react';
import Option from './Option/Option';
import './Select.css'

import Russia from '../../../assets/images/russia.svg'
import England from '../../../assets/images/english.svg'
import { selectLang } from '../../../helpers/functions';

const select = (props) => {
    let selectValue = selectLang(props.lang);
    let options = null;
    if (props.select) {
        options = (
            <div className='options'>
                <Option id='option-russia'
                        click = {props.changeLang}
                        lang = 'ru'>
                    <img alt='Россия' className='option__img' 
                                      src={Russia}/>
                    <span className = 'option-lang'>RU</span>
                </Option>
                <Option click = {props.changeLang} 
                        id='option-english'
                        lang = 'en'>
                    <img alt='Англия' className='option__img' 
                                      src={England}/>
                                       <span className = 'option-lang'>ENG</span>
                </Option>
                {props.children}
            </div>
        )
    }
    return (
        <div onClick = {props.click} className='select'>
            <div className='select-value'>
                {selectValue}
            </div>
            {options}
        </div>
    )
}

export default select;