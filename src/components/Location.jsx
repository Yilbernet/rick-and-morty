import React from 'react';
import '../styles/Location.css';

const Location = ({location}) => {

  //  console.log(location);

  return (
    <article className='location__container'>
      <h2 className='location__title'>{location?.name}</h2>
      <ul className='location__list'>
         <li className='location__item'><span className='location__span'>Type: </span>{location?.type}</li>
         <li className='location__item'><span className='location__span'>Dimension: </span>{location?.dimension}</li>
         <li className='location__item'><span className='location__span'>Population: </span>{location?.residents.length}</li>
      </ul>
    </article>
  )
}

export default Location;