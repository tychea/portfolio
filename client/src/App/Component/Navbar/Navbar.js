import logo from '../../../Image/Logo.svg';

import { Link } from 'react-router-dom';
function Navbar(props) {
  const logout = () => {
    localStorage.removeItem('token');
    props.updateToken(localStorage.getItem('token'));
  };
  return (
    <header className='TopHomePage'>
      <Link to='/'>
        <img className='logo' src={logo} alt='Logo'></img>
      </Link>
      {props.token ? (
        <div className='navBar'>
          <Link to='/'>
            <button onClick={logout} className='navBarButton'>
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div className='navBar'>
          <Link to='/register'>
            <button className='navBarButton'>Register</button>
          </Link>
          <Link to='/login'>
            <button className='navBarButton'>Login</button>
          </Link>
        </div>
      )}

      <div className='burger'>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </header>
  );
}

export default Navbar;
