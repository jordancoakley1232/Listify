import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home/Home'
import History from './Pages/History/History';
// Components
import NavBar from './Components/NavBar/NavBar';
import ShoppingList from './Components/ShoppingList/ShoppingList'


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/history' exact component={History} />
        </Switch>
        <ShoppingList />
      </div>
    </Router>

  );
}

export default App;
