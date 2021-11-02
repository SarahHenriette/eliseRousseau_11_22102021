import React from 'react';
import '../styles/sass/components/card.scss';

class InfosLogement extends React.Component {
    render() {
        
        return (
            <div className="ficheLogement-infos_logement">
                <h1 className="ficheLogement-infos_logementTitle">{this.props.title}</h1>
                <p className="ficheLogement-infos_logementLocation">{this.props.location}</p>
            </div>
         
          );
    }
  }
  
  export default InfosLogement;