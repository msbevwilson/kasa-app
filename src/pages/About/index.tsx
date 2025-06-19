import React from 'react';
import Header from '../../components/Header';
import Accordion2 from '../../components/Accordion2';
import Footer from '../../components/Footer';
import '../../styles/about.scss';

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
    <div className='about'>
        <Header />
        <div className='about-body'>
            <div className='aboutBackground'>
                <div className='aboutImage' />
            </div>
            <div className='aboutAccordion'>
                {collapsibleData.map((item, index) => (
                    <Accordion2 key={index} title={item.title} content={item.content} />
                ))}
            </div>
        </div>
        <Footer />
    </div>
  ) 
}