import React from 'react';
import './Banner.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Banner() {
  const cardData = [
    {
      title: 'The TLD',
      description: 'Does the domain extension math the language of the domain name?',
      icon:'favicon.ico'
    },
    {
        title: 'Domain Length',
        description: 'Is the domain short enough to remember?',
        icon:'favicon.ico'
      },
      {
        title: 'Language',
        description: 'How complex is the actual domain name?',
        icon:'favicon.ico'
      },
    {
      title: 'International recognition',
      description: 'Can the domain name be used on an international scale?',
      icon:'favicon.ico'
    },
    {
        title: 'Search Engine',
        description: 'Does the domain follow search engine guidelines?',
        icon:'favicon.ico'
      },
      {
        title: 'Advertising Potential',
        description: 'Could the domain be used for advertising campaigns?',
        icon:'favicon.ico'
      },
      {
        title: 'Sales Opportunities',
        description: 'Can the domain name be used for sales opportunities?',
        icon:'favicon.ico'
      },
      {
        title: 'Typo susceptibility',
        description: 'How high is the risk of mistyping the domain name?',
        icon:'favicon.ico'
      },
      {
        title: 'Business potential',
        description: 'Can the domain be used as your company address?',
        icon:'favicon.ico'
      },

  ];

  return (
    <div className='banner'>
      <div className='comps'>
          {cardData.map((card, index) => (
            <div className='card' key={index}>

            
              <img src={card.icon} alt={card.icon} className='icon' />
            
            <div className='text'>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              </div>
            </div>
          ))}

      </div>
    </div>
  );
}

export default Banner;
