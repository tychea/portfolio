import logo from '../../../Image/Logo.svg';
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <header className="TopHomePage" >
      <Link to="/">
          <img className="logo" src={logo} alt="Logo"></img>
      </Link>
      
      <div className="navBar">
        <Link to="/register">
            <button className="navBarButton" href="/#">Register</button>
        </Link>
        <Link to="/login">
            <button className="navBarButton" href="/# ">Login</button>
        </Link>      
      </div>
      <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
      </div>
    </header>
  );
}

export default Navbar;
