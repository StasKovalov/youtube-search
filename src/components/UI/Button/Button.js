import React from 'react';
import './Button.css';

const button = (props) => {
    let classNames = ['button'];
    return (
        <button onClick={props.clicked} 
                data-lang = {props.lang} 
                data-id = {props.videoId} 
                className={classNames.join(' ')}>
            {props.children}
        </button>
    )
}

export default button;