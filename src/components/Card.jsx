import React from 'react';
import '../styles/sass/components/card.scss';
import { Link } from "react-router-dom";

class Card extends React.Component {
    render() {
        return (
            <Link to={`/logement/${this.props.data.title}`} className="card">
                <img src={this.props.data.cover} alt={this.props.data.title} className="card-img"/>
                <p className="card-title">{this.props.data.title}</p>
            </Link>
         
          );
    }
  }
  
  export default Card;