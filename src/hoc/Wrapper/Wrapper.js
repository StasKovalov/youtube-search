import React, { Component, Fragment } from 'react';
import Layout from '../Layout/Layout';
import { Route, Redirect } from 'react-router-dom';
import { changeLocale } from '../../services/locale/editLang';

import LanguageMain from '../../containers/LanguageMain/LanguageMain';
import YoutubeSearch from '../../containers/YoutubeSearch/YoutubeSearch';
import HistoryWatch from '../../components/HistoryWatch/HistoryWatch';

export default class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: null
    }
  }

  componentDidMount() {
    let langItem = localStorage.getItem('lang');
    if (langItem) {
        this.setState({ lang: langItem });
    }
}

  onChangeLang = ({ currentTarget: { dataset: { lang } } }) => {
    localStorage.setItem('lang', lang);
    changeLocale(lang);
    this.setState({ lang })
}


    render() {
        return (
          <Fragment>
          <Redirect from = '/' to = '/langs' />
         <Route exact path='/langs' render = {() => <LanguageMain lang = {this.state.lang} onChangeLocale = {this.onChangeLang}/>}/>
        
        <Layout lang = {this.state.lang} onChangeLang = {this.onChangeLang}>
          <Route exact path='/search' component = {YoutubeSearch}/>
          <Route exact path='/history' component = {HistoryWatch}/>
        </Layout>
          </Fragment>
        )
    }
}
