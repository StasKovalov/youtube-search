import React, { Component, Fragment } from "react";
import './App.css';

import { changeLocale } from "./services/locale/editLang";

import { Route, Redirect, Switch } from "react-router-dom";

import LanguageMain from "./components/LanguageMain/LanguageMain";
import YoutubeSearch from "./containers/YoutubeSearch/YoutubeSearch";
import HistoryWatch from "./components/HistoryWatch/HistoryWatch";
import Layout from "./containers/Layout/Layout";

class App extends Component {

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
        <Route exact path='/langs' render={() => <LanguageMain lang={this.state.lang} onChangeLocale={this.onChangeLang} />} />
        <Redirect from='/' to='/langs' />
        <Layout lang={this.state.lang} onChangeLang={this.onChangeLang}>
          <Switch>
            <Route exact path='/search' component={YoutubeSearch} />
            <Route exact path='/history' component={HistoryWatch} />
          </Switch>
        </Layout>
      </Fragment>

    )
  }
}

export default App;
