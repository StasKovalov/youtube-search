import React from 'react';
import './VideoListItem.css';

import Button from '../../UI/Button/Button';

const videoListItem = (props) => {
    return (
        <div className='video-item'
             data-videoid ={props.video.videoId}
             onClick = {props.clicked}>
            <div className='video-item__box'>
                <img className = 'video-item__img' 
                     src={props.video.imgSrc}
                     alt = 'Video Preview'/>
            </div>
            <div className='video-item__descr'>
                <p className='video-item__name'>{props.video.title}</p>
                <p className='video-item__votes'><strong>{props.video.likeCount}</strong> {props.likes}</p>
            </div>
        <Button clicked = {props.click}
                videoId = {props.videoId}
                >{props.watchButton}</Button>
           
        </div>
    )

}

export default videoListItem;