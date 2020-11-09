import './App.scss';
import logo from '../Image/Logo.svg';
import manPhoto from '../Image/manWithFolder.png';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div className="HomePageContainer">
     
          <header className="TopHomePage" >
              <img className="logo" src={logo}></img>
              <div className="navBar">
                <a className="navBarButton" href="/#">Register</a>
                <a className="navBarButton" href="/# ">Login</a>
              </div>
              <div className="burger">
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
              </div>
            </header>
            <div className="BottomHomePage">
                <div className="BottomHomePageLeft">
                  <div className="BottemLeftWrapper">
                    <div className="TitleText">Organize Your</div>
                    <div className="TitleText Purple">Documents</div>
                    <a className="ButtonExplore"onClick={()=>console.log("hello How are You")}>Explore</a>   
                  </div>                       
                </div>
                <div className="BottomHomePageRight">
                    <img className="BottomPageRightImage" src={manPhoto}></img>
                </div>
                <div className="DropDownMenu">
                  <a className="DropDownMenuButton" href="/#">Register</a>
                  <a className="DropDownMenuButton" href="/# ">Login</a>
                </div>
            </div>

        </div> 
    </div>
  );
}

export default App;
