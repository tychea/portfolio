function LeftSideMenu(props) {
  return (
    <div className='leftSide-wrapper'>
      <button
        onClick={props.updateSelectedMenu}
        className='menu'
        name='docs'
        value='steven'
      >
        <i className='fas fa-file'></i>
        <p>Documents</p>
      </button>
      <button
        onClick={props.updateSelectedMenu}
        className='menu'
        name='add_docs'
      >
        <i className='fas fa-file-medical'></i>
        <p>Add Doc</p>
      </button>
      <button
        onClick={props.updateSelectedMenu}
        className='menu'
        name='edit_docs'
      >
        <i className='fas fa-file-signature'></i>
        <p>Edit Doc</p>
      </button>
      <button
        onClick={props.updateSelectedMenu}
        className='menu'
        name='edit_docs'
      >
        <i className='fas fa-sliders-h fa-rotate-90'></i>
        <p>Setting</p>
      </button>
    </div>
  );
}

export default LeftSideMenu;
