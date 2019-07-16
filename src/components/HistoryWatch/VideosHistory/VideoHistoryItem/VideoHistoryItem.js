import React from 'react'
import './VideoHistoryItem.css';


const videoHistoryItem = ({video, itemClick, id, clicked, buttonText}) => {
    return (
        <div className = 'video-history-item'
            onClick = {itemClick}
            data-id = {id}>
        <div className = 'video-preview'>
            <img className = 'video-preview__img'
                 src = {video.imgSrc}
                 alt = 'Video Preview' />
        </div>
        <div className = 'video-description'>
            <span className = 'video-description__span'><strong>{video.title}</strong></span>
        </div>
        <span data-id = {id} 
              onClick = {clicked}
              className = 'video-history-item__del' >{buttonText}</span>
        </div>
    )
}

export default videoHistoryItem;