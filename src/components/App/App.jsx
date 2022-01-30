import {HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';




function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>

      <Router>   
        <nav>
        <Link to="/"> home </Link>  ||   
        <Link to="/details"> details </Link>  || 
        <Link to='/addMovie'> AddMovie </Link>
        </nav>

        {/* path to the home page */}
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details/:id" exact>
          <Details />
        </Route>

        {/* Add Movie page */}
        <Route path="/addMovie" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
