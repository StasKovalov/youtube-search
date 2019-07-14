import React from 'react';
import VideoHistoryItem from './VideoHistoryItem/VideoHistoryItem';
import './VideosHistory.css';

const videosHistory = props => {
    let videos = props.videos.map(video => <VideoHistoryItem video = {video}
                                                             key = {video.key}
                                                             id = {video.videoId}
                                                             buttonText = {props.buttonText}
                                                             clicked = {props.clicked}
                                                             itemClick = {props.historyItemClick}
                                                             />)
    
    return (
        <div className = 'video-history'>
            {videos}
        </div>
    )
}

export default videosHistory;