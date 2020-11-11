import './App.scss';
import Navbar from './Component/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login"  component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
