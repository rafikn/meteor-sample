import React from 'react';
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'

export default class Layout extends React.Component {

  render() {
    return (
      <div className="fill">
        <Header />
        <div className="fill content">
          <div className="container">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
