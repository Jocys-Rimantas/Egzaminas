
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import Meniu from './components/Meniu';
import BookDetails from './components/BookDetails';

function App() {

  return (
        <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/Meniu">
              <Meniu />
            </Route>
            <Route path="/book:id">
            <BookDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
