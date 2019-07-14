import React, { Component, Fragment } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Redirect } from 'react-router-dom';
import LanguageMain from './containers/LanguageMain/LanguageMain';
import YoutubeSearch from './containers/YoutubeSearch/YoutubeSearch';
import HistoryWatch from './components/HistoryWatch/HistoryWatch';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path = '/langs' component ={LanguageMain}/>
        <Redirect from = '/' to = '/langs' />
        <Layout>
          <Route exact path='/search' component = {YoutubeSearch}/>
          <Route exact path='/history' component = {HistoryWatch}/>
      </Layout>
      </Fragment>
    )
  }
}

export default App;
