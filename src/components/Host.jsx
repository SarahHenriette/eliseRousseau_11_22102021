import React from 'react';
import '../styles/sass/components/card.scss';

class Host extends React.Component {
    render() {
        
        return (
            <div className="ficheLogement-infos_host">
                <p className="ficheLogement-infos_hostName">{this.props.host.name}</p>
                <img src={this.props.host.picture} alt={this.props.host.name} className="ficheLogement-infos_hostPicture"/>
            </div>
         
          );
    }
  }
  
  export default Host;