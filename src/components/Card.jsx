import React from 'react';
import '../styles/sass/components/card.scss';
import { Link } from "react-router-dom";

class Card extends React.Component {
    render() {
        return (
            <Link to={`/logement/${this.props.title}`} className="card">
                <p className="card-title">{this.props.title}</p>
            </Link>
         
          );
    }
  }
  
  export default Card;