import React, { Component, Fragment } from 'react'
import './YoutubeSearch.css';

import { TEXT } from '../../services/locale/editLang'
import VideoList from '../../components/VideoList/VideoList';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import SearchArea from '../../components/SearchArea/SearchArea';
import { serchRequst } from '../../index';

class YoutubeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            videos: [],
            history: [],
            loading: false,
            isVisibleVideoList: false,
            videoPlayerID: null
        }
    }

    componentDidMount() {
        let history = localStorage.getItem('history');
        let videoPlayerID = localStorage.getItem('videoPlayerID');
        if (history) {
            history = JSON.parse(history);
            this.setState({ history });
        }
        if (videoPlayerID) {
            if (videoPlayerID === 'null') {
                videoPlayerID = JSON.parse(videoPlayerID);
            }
            this.setState({ videoPlayerID });
        }
    }

    onChangeHandler = (e) => {
        if (this.state.isVisibleVideoList) {
            this.setState({ isVisibleVideoList: false })
        }
        this.setState({ value: e.target.value });
    }

    addInHistoryHandler = ({ target: { dataset: { id } } }) => {
        const uniqId = this.state.history.map(item => item.videoId);
        if (uniqId.includes(id)) {
            this.setState({ isVisibleVideoList: false, videoPlayerID: id});
            return;
        }
        const selectVideo = this.state.videos.filter(video => video.videoId === id);
        const updHistory = [...selectVideo, ...this.state.history];
        localStorage.setItem('history', JSON.stringify(updHistory));
        localStorage.setItem('videoPlayerID', selectVideo[0].videoId);
        this.setState({ history: updHistory, videoPlayerID: selectVideo[0].videoId, isVisibleVideoList: false });
    }

    sendSearchRequestHandler = () => {
        serchRequst.call(this);
    }

    hideVideoListHandler = () => {
        this.setState({ isVisibleVideoList: false });
    }

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            serchRequst.call(this);
        }
    }

    render() {
        let videoList = null;
        let buttonDisable = false;
        let buttonText = TEXT.buttonText;
        if (this.state.loading) {
            buttonDisable = this.state.loading;
            buttonText = TEXT.buttonTextLoading
        }

        if (this.state.isVisibleVideoList && this.state.value) {
            videoList = <VideoList hide={this.hideVideoListHandler}
                show={this.state.isVisibleVideoList}
                add={this.addInHistoryHandler}
                likesText={TEXT.likes}
                watchButton={TEXT.watchButton}
                videos={this.state.videos} />
        }

        return (
            <Fragment>
                <SearchArea placeholderText={TEXT.placeholder}
                    inputValue={this.state.value}
                    inputOnChange={this.onChangeHandler}
                    inputOnKeyPress={this.onKeyPress}
                    buttonDisable={buttonDisable}
                    buttonText={buttonText}
                    onSearchHandler={this.sendSearchRequestHandler}
                    videoList={videoList} />
                <VideoPlayer id={this.state.videoPlayerID}
                    playerText={TEXT.playerText} />
      </Fragment>

        )
    }
}

export default YoutubeSearch