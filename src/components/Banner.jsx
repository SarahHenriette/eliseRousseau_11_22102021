import React from 'react';
import '../styles/sass/layouts/banner.scss';

class Banner extends React.Component {
    render(){
      return (
        <div className="banner">
            <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
        </div>
      );
    }
  }
  
  export default Banner;