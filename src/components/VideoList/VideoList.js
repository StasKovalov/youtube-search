import React, { Fragment } from 'react';
import './VideoList.css';
import VideoListItem from './VideoListItem/VideoListItem';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

const videoList = (props) => {
    const videoList = props.videos.map(video => <VideoListItem key={video.key}
        video={video}
        watchButton = {props.watchButton}
        click={props.add}
        likes = {props.likesText}
        videoId={video.videoId} />)
    return (
        <Fragment>
     <Backdrop show = {props.show} hideClick = {props.hide}/>
                <div className='video-list'>
                    {videoList}
                </div>
        </Fragment>
    )
}

export default videoList;