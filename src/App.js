import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { NavigationBar } from './Components/NavigationBar';
import { Tabledisplay } from './Components/Tabledisplay';
import { useState } from 'react';

function App() {
  const [movieList, setMovieList] = useState([]);

  const addMovieToList = movie => {
    const tempArg = movieList.filter(i => i.imdbID !== movie.imdbID)
    setMovieList([...tempArg, movie]);
  }

  const handelOnDelete = (imdbID) => {
    if (window.confirm('Are you sure you want to delete')) {
      const tempArg = movieList.filter(item => item.imdbId !== imdbID);
      setMovieList(tempArg)
    }
  }
  return (
    <div className="App bg-dark text-dark">
      <Container>

        {/* This is navigation which consist display also*/}
        <NavigationBar addMovieToList={addMovieToList} />

        {/* Table display */}
        <Tabledisplay movieList={movieList} handelOnDelete={handelOnDelete} />
      </Container>
    </div>
  );
}
export default App;
