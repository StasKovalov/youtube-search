import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';

import { changeLocale } from '../../services/locale/editLang';

import LanguageMain from '../../components/LanguageMain/LanguageMain';
import YoutubeSearch from '../YoutubeSearch/YoutubeSearch';

import HistoryWatch from '../../components/HistoryWatch/HistoryWatch';

export default class Wrapper extends Component {

  state = {
    lang: null
  }

  componentDidMount() {
    let langItem = localStorage.getItem('lang');
    this.setState({ lang: langItem });
  }

  onChangeLang = ({ currentTarget: { dataset: { lang } } }) => {
    localStorage.setItem('lang', lang);
    changeLocale(lang);
    this.setState({ lang })
  }


  render() {
    return (
      <Fragment>
        <Redirect from='/' to='/langs' />
        <Route exact path='/langs' render={() => <LanguageMain lang={this.state.lang} onChangeLocale={this.onChangeLang} />} />

        <Layout lang={this.state.lang} onChangeLang={this.onChangeLang}>
          <Route exact path='/search' component={YoutubeSearch} />
          <Route exact path='/history' component={HistoryWatch} />
        </Layout>
      </Fragment>
    )
  }
}
