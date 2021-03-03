import Logo from '../../../Image/Logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import dotStyle from '../../../Image/dotStyle.png';
function Navbar(props) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => setShowMenu(!showMenu);
  return (

    <nav >
      <div className="nav-wrapper" >
        <Link style={{ height: '80%' }} to='/'>
          <img className='logo' src={Logo} alt='Logo'></img>
        </Link>
        <div className={showMenu ? 'portrait-nav-background' : 'portrait-nav-background hide'}></div>
        <ul className={showMenu ? 'nav-menu nav-menu-portrait' : 'nav-menu'}>
          <li><a href="sass.html">About</a></li>
          <li><Link to='/register'><a >Register</a></Link></li>

          <li><Link to='/login'><a >Login</a></Link></li>


        </ul>

        <div className='menu_wrapper' onClick={toggleShowMenu}>
          <div className={showMenu ? 'bar1Change' : null}></div>
          <div className={showMenu ? 'bar2Change' : null}></div>
          <div className={showMenu ? 'bar3Change' : null}></div>
        </div>
      </div>
      <img className='dotStyle' src={dotStyle} alt='dotStyle' ></img>
      <img className='dotStyle2' src={dotStyle} alt='dotStyle' ></img>

    </nav>
  );
}

export default Navbar;
