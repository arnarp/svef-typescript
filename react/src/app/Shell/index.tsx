const appConfig = require('../../../config/main');
import * as React from 'react';
import * as Helmet from 'react-helmet';
import { Header } from './Header';
import Footer from './footer';

export default class Shell extends React.Component<{}, {}> {
  public render() {
    const s = require('./index.css');

    return (
      <section className={s.appContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Header />
        {this.props.children}
      </section>
    );
  }
}
