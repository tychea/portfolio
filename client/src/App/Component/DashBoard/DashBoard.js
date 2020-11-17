import WithAuth from '../WithAuth/WithAuth';
import { useState, useEffect } from 'react';
import LeftSideMenu from './LeftSideMenu/LeftSideMenu';
import RightSideMenu from './RightSideMenu/RightSideMenu';
import axios from 'axios';
function DashBoard(props) {
  const [selectedMenu, setSelectedMenu] = useState('docs');
  const updateSelectedMenu = (event) => {
    setSelectedMenu(event.currentTarget.name);
  };
  const fectData = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const res = await axios.get('/api/documents', config);
      console.log(res);
    } catch (error) {
      alert('Your Session Expired!');
      localStorage.removeItem('token');
      props.updateToken(null);
    }
  };
  useEffect(() => {
    fectData();
    console.log(selectedMenu);
  }, [selectedMenu]);

  return (
    <div className='content-table'>
      <LeftSideMenu updateSelectedMenu={updateSelectedMenu} />
      <RightSideMenu />
      {/* <button
        value='blue'
        name='steven'
        onClick={(e) => console.log(e.target.name)}
      >
        Color Change
      </button> */}
    </div>
  );
}

export default WithAuth(DashBoard);
