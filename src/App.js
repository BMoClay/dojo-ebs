// import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BookDetails from './BookDetails';
import Navbar from './Navbar';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/books/:id">
              <BookDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
