import './App.css';
import {MovieController} from './context/MovieContext'
import NavBar from './components/NavBar'
import MovieList from './components/MovieList'
import MovieForm from './components/MovieForm'

function App() {
  return (
    <div className="App">
      <MovieController>
          <NavBar />
          <MovieList />
          <MovieForm />


      </MovieController>
     
    </div>
  );
}

export default App;
