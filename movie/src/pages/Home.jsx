import { useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/movieCard';

const API_KEY = "f3ea7a80"; 

function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const gridStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};


  const searchMovies = async () => {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await res.json();
    if (data.Search) {
      setResults(data.Search);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="home">
      <h1>Movie Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button onClick={searchMovies}>Search</button>

      <div className="movies-grid">
        {results.map((movie) => (
          <div key={movie.imdbID}>
            <MovieCard movie={movie} />
            <Link to={`/movie/${movie.imdbID}`}>Details</Link> {/* Link added here */}
          </div>
        ))}
        <div className="movies-grid" style={gridStyles}>
  {results.map((movie) => (
    <MovieCard key={movie.imdbID} movie={movie} />
  ))}
</div>

      </div>
    </div>
  );
}

export default Home;
