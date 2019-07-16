import React, { Component } from 'react';
import VideoHistory from '../HistoryWatch/VideosHistory/VideosHistory';
import './HistoryWatch.css'
import { TEXT } from '../../services/locale/editLang';

class HistoryWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
        }
    }

    componentDidMount() {
        let history = localStorage.getItem('history');
        if (history) {
            history = JSON.parse(history);
            this.setState({ history });
        }
    }

    onHistoryItemClick = ({ currentTarget: { dataset: { id } } }) => {
        localStorage.setItem('videoPlayerID', id)
        this.props.history.replace('/search');
    }

    deleteVideoInHistory = (e) => {
        e.stopPropagation();
        if (this.state.history.length === 1) {
            localStorage.setItem('videoPlayerID', null);
        }
        const updHistory = this.state.history.filter(historyVideo => historyVideo.videoId !== e.target.dataset.id);
        let updHistoryJSON = JSON.stringify(updHistory);
        localStorage.setItem('history', updHistoryJSON);
        this.setState({ history: updHistory })
    }

    render() {
        let videoHistory = this.state.history.length ?
            <VideoHistory
            clicked={this.deleteVideoInHistory}
            videos={this.state.history}
            buttonText={TEXT.deleteButton}
            historyItemClick={this.onHistoryItemClick}
            /> : null;
        return (
            <div className='history-wrapper'>
                <h1>{TEXT.historyWatch}</h1>
                {videoHistory}
            </div>
        )
    }

}

export default HistoryWatch;