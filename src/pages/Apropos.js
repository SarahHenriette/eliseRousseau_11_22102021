import React from 'react';
import '../styles/sass/pages/Apropos.scss';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner';
import img from './../assets/bannerAboutPage.png'
import Collapse from '../components/Collapse'


class Apropos extends React.Component {
  render(){
    return(
      <div className="apropos">
      <Header/>
      <Banner background={img} title=""/>
      <div className="apropos-collapses">
      <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
      <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
      <Collapse title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
      <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
      </div>
      <Footer/>
    </div>
    )
  }
}

export default Apropos;