import React from 'react';
import './Backdrop.css'

const backdrop = props => {
    return (
        props.show ? <div onClick = {props.hideClick} className = 'backdrop'></div> : null
    )
}

export default backdrop;