import React from 'react';
import Start from './Start'
import '../styles/sass/components/card.scss';

class Starts extends React.Component {
    render() {
        return (
            <div className="ficheLogement-infos_starts">
                <Start></Start>
                <Start></Start>
                <Start></Start>
                <Start></Start>
                <Start></Start>

            </div>
         
          );
    }
  }
  
  export default Starts;