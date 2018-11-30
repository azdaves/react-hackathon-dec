import React from 'react';

import "./Banner.css";

class Banner extends React.Component {
  render() {
    return(
      <header>
        <div className="hello">Welcome</div>

        <h1>December Hackathon <span>&</span><br/>
          Map/Flickr Project<br/>
          React/Django.
        </h1>

        <div className="available">
          <div className="circle"></div>
          Something about our Map here.
        </div>
      </header>
    )
  }
}

export default Banner;