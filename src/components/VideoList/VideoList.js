import React, { Fragment } from 'react';
import './index.css';
import VideoListItem from './VideoListItem/VideoListItem';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

const VideoList = ({ videos, click, likesText, add, watchButton, show, hide, ...restProps }) => (
    <Fragment>
        <Backdrop show={show} hideClick={hide} />
        <div className='video-list'>
            {videos.map(video =>
                <VideoListItem
                    key={video.key}
                    video={video}
                    watchButton={watchButton}
                    click={add}
                    likesText={likesText}
                />)}
        </div>
    </Fragment>
)

export default VideoList;