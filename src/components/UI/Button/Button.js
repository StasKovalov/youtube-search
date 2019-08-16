import React from 'react';
import './index.css';

const Button = (props) => {
    return (
        <button
            onClick={props.clicked}
            data-lang={props.lang}
            data-id={props.videoId}
            className='button'
        >
            {props.children}
        </button>
    )
}

export default Button;