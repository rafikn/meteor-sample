import React from 'react';
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'

export default class Layout extends React.Component {

  render() {
    return (
      <div className="fill">
        <Header />
        <div className="fill">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
