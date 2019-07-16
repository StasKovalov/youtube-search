import React from 'react';
import VideoHistoryItem from './VideoHistoryItem/VideoHistoryItem';
import './VideosHistory.css';

const videosHistory = ({ videos, historyItemClick, ...restProps }) => (
    <div className='video-history'>
        {videos.map(video =>
            <VideoHistoryItem 
                video={video}
                key={video.key}
                id={video.videoId}
                itemClick={historyItemClick}
                {...restProps}
            />)
        }
    </div>
)

export default videosHistory;