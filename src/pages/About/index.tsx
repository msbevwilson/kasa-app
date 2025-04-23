import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Collapsible from '../../components/Collapsible';
import Accordion from '../../components/Accordion';
import Footer from '../../components/Footer';

export default function About() {

    let collapsibleData = [
      {
          title: 'Reliability',
          content:
              'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
      },
      {
          title: 'Respect',
          content:
              'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
      },
      {
          title: 'Service',
          content:
              'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
      },
      {
          title: 'Security',
          content:
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      },
  ];

  return (
    <>
    <div className="container">
        <div className="row">
            <Header />
        </div>
        <div className="row">
            <Banner />
        </div>
        <div className="row">
            <Accordion />
            {collapsibleData.map((item, index) => (
                <Collapsible key={index} title={item.title} children={item.content} />
            ))}
        </div>
        <div className="row">
            <Footer />
        </div>
    </div>
    </>
  ) 
}