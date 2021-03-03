import React from 'react';
import { Link } from 'react-router-dom';
import RedirectAuth from '../WithAuth/RedirectAuth';

import Svg from './Svg';
const Home = (props) => {
  return (
    <div className='container'>
      <div className='leftPage'>
        <ul className='headLine'>
          <li>Manage </li>
          <li>all your documents in </li>
          <li>one place</li>
        </ul>
        <div className='content'>Easy to access, manage and control your documents</div>
        <div className='buttonWrapper'>
          <Link to='/login'>
            <button className='loginButton'>Login</button>
          </Link>

          <button className='registerButton'>Register</button>
        </div>

      </div>
      <div className='rightPage'>
        <Svg></Svg>
      </div>

    </div>
    // <div className='BottomHomePage'>
    //   <div className='BottomHomePageLeft'>
    //     <div className='BottemLeftWrapper'>
    //       <div className='TitleText'>Organize Your</div>
    //       <div className='TitleText Purple'>Documents</div>
    //       <Link to='/dashboard'>
    //         <button className='ButtonExplore'>Explore</button>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className='BottomHomePageRight'>
    //     <img
    //       className='BottomPageRightImage'
    //       src={manPhoto}
    //       alt='man with folder'
    //     ></img>
    //   </div>
    //   {/* <div className="DropDownMenu">
    //       <a className="DropDownMenuButton" href="/#">Register</a>
    //       <a className="DropDownMenuButton" href="/# ">Login</a>
    //     </div> */}
    // </div>
  );
};

export default RedirectAuth(Home);
