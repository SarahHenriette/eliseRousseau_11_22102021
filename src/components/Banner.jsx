import React from 'react';
import '../styles/sass/layouts/banner.scss';

class Banner extends React.Component {
    render(){
      return (
        <div className="banner">
            <h1 className="banner-title">{this.props.title}</h1>
            <img src={this.props.background} alt=""></img>
        </div>
      );
    }
  }
  
  export default Banner;