import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Header from './header';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        {this.props.children}
        <Footer className='footer' />
      </div>
    );
  }
}
