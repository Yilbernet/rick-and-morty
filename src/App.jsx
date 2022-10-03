import axios from 'axios';
import { useEffect, useState } from 'react';
import FilterList from './components/FilterList';
import Location from './components/Location';
import ResidentCard from './components/ResidentCard';
import getRandomNumber from './utils/getRandomNumber';

function App() {

  const [location, setLocation] = useState();
  const [findSubmit, setFindSubmit] = useState('');
  const [findChange, setFindChange] = useState();
  const [fail, setFail] = useState(false);

  useEffect(() => {
    let id = getRandomNumber();
    if (findSubmit) { id = findSubmit; };
    const URL = `https://rickandmortyapi.com/api/location/${id}`;
    axios.get(URL)
      .then(res => (
        setFail(false),
        setLocation(res.data)))
      .catch(err => (
        setFail(true),
        console.log(err)));
  }, [findSubmit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFindSubmit(event.target.locationId.value);
  }

  const handleChange = (event) => {
    if(event.target.value === '')
    {return setFindChange()}
    const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`;
    axios.get(URL)
      .then(res => setFindChange(res.data.results))
      .catch(err => console.log(err));
  }

  // console.log(findChange);

  return (
    <div className="App">
      <img className='banner' src="/assets/banner.png" alt="banner img" />
      <h1 className='title'>Rick and Morty wiki</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input
          className='form__in'
          id='locationId'
          placeholder='Enter another number from 1 to 126'
          type="text"
          onChange={handleChange}
        />
        <button className='form__btn'>Search</button>
        <FilterList
          findChange={findChange}
          setFindSubmit={setFindSubmit}
        />
      </form>
      {
        (fail) ? 
          (
            <div className='fail'>
            <h2>Not Found</h2>
            <p>please check the information entered</p>
            </div>
          )
          :
          (
            <div>
            <Location location={location} />
            <h2 className='subTitle'>Residents: </h2>
            <div className='card__container'>
              {
                location?.residents.map(API => (
                  <ResidentCard
                    key={API}
                    API={API}
                  />
                ))
              }
            </div>
            </div>
          )
      }
    </div>
  )
}

export default App;
