import manPhoto from '../../../Image/manWithFolder.png';
function Home(){
    return (
        <div className="BottomHomePage">
        <div className="BottomHomePageLeft">
          <div className="BottemLeftWrapper">
            <div className="TitleText">Organize Your</div>
            <div className="TitleText Purple">Documents</div>
            <button className="ButtonExplore"onClick={()=>console.log("hello How are You")}>Explore</button>   
          </div>                       
        </div>
        <div className="BottomHomePageRight">
            <img className="BottomPageRightImage" src={manPhoto} alt="man with folder"></img>
        </div>
        {/* <div className="DropDownMenu">
          <a className="DropDownMenuButton" href="/#">Register</a>
          <a className="DropDownMenuButton" href="/# ">Login</a>
        </div> */}
    </div>
    )
}

export default Home;