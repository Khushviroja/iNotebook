import React, {useContext} from 'react'
import noteContext from '../Context/notes/noteContext';

const Noteitem = (props) => {
  const Context = useContext(noteContext);
  const { deleteNote } = Context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-item-center">
              <h5 className="card-title">{note.title}</h5>
              <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully", "success");}}></i>
              <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
            </div>
            <p className="card-text">{note.description}</p>
            {/* <button type="button" className="btn btn-primary mx-2 my-2">Share one time</button>
            <button type="button" className="btn btn-primary mx-2 my-2">Share life time</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;