import React from 'react';
import './index.css'

const Option = props => {
    return (
        <div data-lang = {props.lang} onClick = {props.click} className = 'option' id = {props.id}>
            {props.children}
        </div>
    )
}

export default Option;