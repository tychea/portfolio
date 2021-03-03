import Logo from '../../../../Image/Logo.png';
function LeftSideMenu(props) {
  return (
    <div className='leftSide-wrapper'>
      <img className='logoMenu' src={Logo} alt='Logo'></img>
      <div className={props.selectedMenu === 'folders' ? 'btn_menu selectMenu' : 'btn_menu'} id='folders' onClick={props.updateSelectedMenu}>
        <i class="fas fa-folder-open"></i>
        <div>Folders</div>
      </div>

      <div className={props.selectedMenu === 'upload' ? 'btn_menu selectMenu' : 'btn_menu'} name='upload' id='upload' onClick={props.updateSelectedMenu}>
        <i class="fas fa-cloud-upload-alt"></i>
        <div>Upload</div>
      </div>

    </div>
  );
}

export default LeftSideMenu;
