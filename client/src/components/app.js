import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

export default class App extends Component {

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <div className='torso'>
          {this.props.children}
        </div>
        <Footer className='footer' />
      </div>
    );
  }
}
