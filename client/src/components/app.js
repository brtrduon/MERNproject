import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
