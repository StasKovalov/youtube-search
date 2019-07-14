import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { numberWithCommas } from './helpers/functions';
import axios from 'axios';

const API_KEY = 'AIzaSyDYIhxOfRHEhQArL79Jif6ozfRyK1AMBF8';

const app = (
<BrowserRouter>
    <App />
</BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

export const serchRequst = async function () {
    this.setState({ loading: true })
    let videos = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            part: 'snippet',
            key: API_KEY,
            q: this.state.value,
            type: 'video',
        }
    })

    const videosInfo = videos.data.items.map(item => {
        return {
            key: item.etag,
            videoId: item.id.videoId,
            title: item.snippet.title,
            imgSrc: item.snippet.thumbnails.medium.url
        }
    });

    let updVideosInfo = await Promise.all(videosInfo.map(async video => {
        let likeCountInfo = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'statistics',
                key: API_KEY,
                id: video.videoId,
                type: 'video',
            }
        })

        const likeCount = numberWithCommas(likeCountInfo.data.items[0].statistics.likeCount);

        return {
            ...video,
            likeCount: likeCount
        }
    }))
        .then(response => response);

    this.setState({ videos: updVideosInfo, isVisibleVideoList: true, loading: false });
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
