import './App.scss';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import DashBoard from './Component/DashBoard/DashBoard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  //when application start check for token
  const [token, setToken] = useState(localStorage.getItem('token'));

  const updateToken = (token) => {
    setToken(token);
  };

  useEffect(() => {
    console.log('Token', token);
  }, [token]);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Navbar token={token} updateToken={updateToken} />
            <Home />
          </Route>
          <Route exact path='/login'>
            <Navbar token={token} updateToken={updateToken} />
            <Login updateToken={updateToken} />
          </Route>
          <Route exact path='/register'>
            <Navbar token={token} updateToken={updateToken} />
            <Register updateToken={updateToken} />
          </Route>
          <Route exact path='/dashboard'>
            <DashBoard updateToken={updateToken} />
          </Route>
          <Redirect exact from='*' to='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
