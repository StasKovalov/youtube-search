import React from 'react';
import './index.css';

import Button from '../../UI/Button/Button';

const videoListItem = ({video, likesText, click, watchButton }) => {
    return (
        <div
            className='video-item'
            data-videoid={video.videoId}
        >
            <div className='video-item__box'>
                <img 
                    className='video-item__img'
                    src={video.imgSrc}
                    alt='Video Preview' 
                />
            </div>
            <div className='video-item__descr'>
                <p className='video-item__name'>{video.title}</p>
                <p className='video-item__votes'><strong>{video.likeCount}</strong> {likesText}</p>
            </div>
            <Button clicked={click}
                videoId={video.videoId}
            >{watchButton}</Button>

        </div>
    )

}

export default videoListItem;