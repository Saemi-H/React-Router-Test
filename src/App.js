import './App.css';
import {BrowserRouter, Link, Route,Switch} from 'react-router-dom';
import Profile from './components/profile';
import Home from './components/home';


function App() {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/profile">Profile</Link>
        </li>
      </ul>
      
    </nav>
      <Switch>
        {/* <Route path="/home"> */}
        <Route path={['/', '/home']} exact>
         <Home/>
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
