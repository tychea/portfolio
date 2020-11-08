import './App.scss';
import logo from '../Image/Logo.svg';
import manPhoto from '../Image/manWithFolder.png';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div className="HomePageContainer">
          <div className="TopHomePage" >
              <img className="logo" src={logo}></img>
              <div className="navBar">
                <a className="navBarButton">Register</a>
                <a className="navBarButton">Login</a>
                    {/* <button className="navBarButton">Register</button>
                    <button className="navBarButton">Login</button> */}
              </div>
            </div>
            <div className="BottomHomePage">
                <div className="BottomHomePageLeft">
                  <div className="BottemLeftWrapper">
                    <div className="TitleText">Organize Your</div>
                    <div className="TitleText Purple">Documents</div>
                    <button className="ButtonExplore">Explore</button>    
                  </div>                       
                </div>
                <div className="BottomHomePageRight">
                    <img className="BottomPageRightImage" src={manPhoto}></img>
                </div>
          </div>
        </div> 
    </div>
  );
}

export default App;
