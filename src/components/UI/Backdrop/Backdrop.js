import React from 'react';
import './Backdrop.css'

const Backdrop = props => {
    return (
        props.show ? <div onClick = {props.hideClick} className = 'backdrop'></div> : null
    )
}

export default Backdrop;