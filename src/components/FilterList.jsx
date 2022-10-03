import React from 'react';

const FilterList = ({findChange, setFindSubmit}) => {

   console.log(findChange);

   const handleClick = (id) => setFindSubmit(id);

  return (
    <ul className='filter'>
      {
         findChange?.map(location => (
            <li onClick={() => handleClick(location.id)} key={location.id}>
               {location.name}
            </li>
         ))
      }
    </ul>
  )
}

export default FilterList;