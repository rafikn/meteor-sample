import React from 'react';

export default class NotFound extends React.Component {

  render() {
    return (
      <div className="fill">
          <div className="row">
              <div className="notfound text-center">
                <h2>Sorry, page not found</h2>
                <img alt="404" src="img/notfound.png"></img>
              </div>
          </div>
      </div>

    );
  }
}
