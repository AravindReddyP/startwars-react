import React, { useEffect, useState } from 'react';
import Loading from './Loading';
// import {} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function StarWars(props) {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSelect = (e) => {
    setValue(e);
    // console.log(e.target.element);
  };

  const fetchMovie = async () => {
    let movie = await fetch(`https://swapi.dev/api/films/`);
    var movieData = await movie.json();
    const { results } = movieData;
    setMovies(results);
    // console.log(movies);
    console.log(movieData);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const handleChange = (e) => {
    let idx = document.getElementById('mySelect').selectedIndex;
    let element = props.apiData[idx];
    let films = element.films;
    // console.log(films);
    setLoading(true);

    // console.log(e.target.value);
  };

  let optionItems = props.apiData.map((item) => (
    <option key={item.name} value={item.name}>
      {item.name}
    </option>
  ));

  let movieList = movies.map((movie) => (
    <h5 key={movie.title}>{movie.title} </h5>
  ));

  let releaseDate = movies.map((movie) => (
    <div>
      <ul>
        <li key={movie.title}>{movie.title} </li>
        <li key={movie.title}>{movie.release_date}</li>
      </ul>
    </div>
  ));

  return (
    <div>
      <label>
        Your Character: &nbsp;
        <select id="mySelect" onSelect={handleSelect} onChange={handleChange}>
          {optionItems}
        </select>
      </label>
      <br />
      <h3>List of Movies:</h3>
      {movieList}
      <br />

      <p>Name / Movie Year:</p>

      <h4>{releaseDate}</h4>
    </div>
  );
}
