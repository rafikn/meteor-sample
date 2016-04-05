import React, { Component, PropTypes } from 'react';
import {
  SearchkitManager,SearchkitProvider,
  SearchBox, Hits, RefinementListFilter, Pagination,

} from 'searchkit';
const host = "http://demo.searchkit.co/api/movies"
const searchkit = new SearchkitManager(host)

import "searchkit/theming/theme.scss";

class MovieHit extends React.Component {

  render() {
    const result = this.props.result;
    let url = "http://www.imdb.com/title/" + result._source.imdbId
    return (
        <div className={this.props.bemBlocks.item().mix(this.props.bemBlocks.container("item"))} key={result._id}>
            <a href={url} target="_blank">
                <img className={this.props.bemBlocks.item("poster")} src={result._source.poster} width="100" height="140"/>
                <div className={this.props.bemBlocks.item("title")}>{result._source.title}</div>
            </a>
        </div>
    )
  }

}

export default class Browser extends React.Component {
  render() {

    return (<div>

      <SearchkitProvider searchkit={searchkit}>
         <div className="search">
            <div className="search__query">
            <SearchBox searchOnChange={true} prefixQueryFields={["actors^1","type^2","languages","title^10"]} />
            </div>
            <div className="search__results">
            <Hits hitsPerPage={6} itemComponent={MovieHit}/>
            </div>
         </div>
      </SearchkitProvider>

    </div>);
  }
}
