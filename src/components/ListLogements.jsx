import React from 'react';
import '../styles/sass/layouts/galerie.scss';
import Card from '../components/Card'

class ListLogements extends React.Component {
  
    render() {
      const logements = require('../logements.json')
      const listLogements = logements.map((logement) =>
      <Card data={logement} key={logement.id}/>
    );
      return (
        <div className="galerie">
           {listLogements}
  
        </div>
      );
    }
  }
  
  export default ListLogements;