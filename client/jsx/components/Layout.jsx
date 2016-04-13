import React from 'react';
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'

import {SearchkitProvider, SearchkitManager, Layout, LayoutBody} from 'searchkit';

export default class WhyBuy extends React.Component {

  constructor(props) {
    super(props)


    this.searchkit = new SearchkitManager("http://demo.searchkit.co/api/movies")
    this.searchkit.translateFunction = (key) => {
      return {"pagination.next":"Next Page", "pagination.previous":"Previous Page"}[key]
    }
  }

  render() {
    return (
      <div className="fill">
        <div className="content" >
        <SearchkitProvider searchkit={this.searchkit}>
          <Layout size="l">
            <Header />
            {this.props.children}
          </Layout>
        </SearchkitProvider>
        </div>

        <Footer />
      </div>
    );
  }
}
