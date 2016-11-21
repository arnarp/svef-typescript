import * as React from 'react';
const s = require('./style.css');

export default class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={s.home}>
        <img src={require('./barbar.png')} />
        <p>Hello!</p>
      </div>
    );
  }
}
