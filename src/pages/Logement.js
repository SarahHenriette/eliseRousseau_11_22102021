import React from 'react';
import '../styles/sass/pages/Home.scss';
import Header from './../components/Header'
import Footer from './../components/Footer'
import Carrousel from './../components/Carrousel'
import Starts from './../components/Starts'
import Tags from './../components/Tags'
import Host from './../components/Host'
import InfosLogement from './../components/InfosLogement'
import Collapse from './../components/Collapse'

class Logement extends React.Component {
    render(){
        const logements = require('../logements.json')
        const logement = logements.filter(logement => logement.title === this.props.match.params.title)[0];
 
        return(
            <div className="ficheLogement">
                <Header/>
                <Carrousel slides={logement.pictures}/>
                <div className="ficheLogement-infos">
                    <div className="ficheLogement-infos_right"> 
                        <InfosLogement title={logement.title} location={logement.location}/>
                        <Tags tags={logement.tags}/>
                    </div>
                    <div className="ficheLogement-infos_left">
                        <Host host={logement.host}/>
                        <Starts/>
                    </div>
                </div>

                <div className="ficheLogement-collapses">
                    <Collapse title="Description" content={logement.description}/>
                    <Collapse title="Equipements" content={logement.equipments}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Logement;
