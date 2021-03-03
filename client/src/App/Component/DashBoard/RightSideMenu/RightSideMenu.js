function RightSideMenu(props) {
  return (
    <div className='rightSide-wrapper'>
      {props.selectedMenu === 'folders' ?
        <div>Folders</div> : <div>Upload</div>
      }
    </div>
  );
}

export default RightSideMenu;
