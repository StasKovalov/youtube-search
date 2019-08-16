import React from 'react';
import './index.css';

const VideoPlayer = props => {
    let iframe = null;
    if (props.id) {
        iframe = (<iframe width="80%"
            height='300px'
            title = 'Video Player'
            src={`https://www.youtube.com/embed/${props.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>);
    }
    return (
        <div className='video-player'>
            <div className = 'video-player__items'>
                <h1 className = 'video-player__description'>{props.playerText}</h1>
                {iframe}
            </div>
        </div>
    )
}

export default VideoPlayer;
