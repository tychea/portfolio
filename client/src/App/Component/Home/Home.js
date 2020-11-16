import manPhoto from '../../../Image/manWithFolder.png';
import React from 'react';
import { Link } from 'react-router-dom';
import RedirectAuth from '../WithAuth/RedirectAuth';
const Home = (props) => {
  return (
    <div className='BottomHomePage'>
      <div className='BottomHomePageLeft'>
        <div className='BottemLeftWrapper'>
          <div className='TitleText'>Organize Your</div>
          <div className='TitleText Purple'>Documents</div>
          <Link to='/dashboard'>
            <button className='ButtonExplore'>Explore</button>
          </Link>
        </div>
      </div>
      <div className='BottomHomePageRight'>
        <img
          className='BottomPageRightImage'
          src={manPhoto}
          alt='man with folder'
        ></img>
      </div>
      {/* <div className="DropDownMenu">
          <a className="DropDownMenuButton" href="/#">Register</a>
          <a className="DropDownMenuButton" href="/# ">Login</a>
        </div> */}
    </div>
  );
};

export default RedirectAuth(Home);
