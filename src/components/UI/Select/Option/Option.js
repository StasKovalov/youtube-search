import React from 'react';
import './Option.css'

const option = props => {
    return (
        <div data-lang = {props.lang} onClick = {props.click} className = 'option' id = {props.id}>
            {props.children}
        </div>
    )
}

export default option;