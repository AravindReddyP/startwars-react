import React, { useEffect, useState } from 'react';
import Nav from './Nav';

import Loading from './Loading';
import StarWars from './StarWars';

function App() {
  const [loading, setLoading] = useState(true);
  const [apiData, setapiData] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const starwars = await fetch('https://swapi.dev/api/people');
      const data = await starwars.json();
      const results = data.results;
      setapiData(results);
      setLoading(false);
      console.log(apiData);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="container">
        <Nav /> <br />
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <Nav />
        <StarWars apiData={apiData} />
      </div>
    );
  }
}

export default App;
