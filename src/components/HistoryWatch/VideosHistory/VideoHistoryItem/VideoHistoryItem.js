import React from 'react'
import './VideoHistoryItem.css';


const videoHistoryItem = props => {
    const {imgSrc, title} = props.video
    return (
        <div className = 'video-history-item'
            onClick = {props.itemClick}
            data-id = {props.id}>
        <div className = 'video-preview'>
            <img className = 'video-preview__img'
                 src = {imgSrc}
                 alt = 'Video Preview' />
        </div>
        <div className = 'video-description'>
            <span className = 'video-description__span'><strong>{title}</strong></span>
        </div>
        <span data-id = {props.id} 
              onClick = {props.clicked}
              className = 'video-history-item__del' >{props.buttonText}</span>
        </div>
    )
}

export default videoHistoryItem;