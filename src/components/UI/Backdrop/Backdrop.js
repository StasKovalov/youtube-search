import React from 'react';
import './index.css'

const Backdrop = props => {
    return (
        props.show ? <div onClick = {props.hideClick} className = 'backdrop'></div> : null
    )
}

export default Backdrop;