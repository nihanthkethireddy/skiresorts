import './SkiPopup.css';
import Popup from 'reactjs-popup';
import './popup.css';
import { SkiData } from '../SkiData';

function SkiPopup(props) {

  const {setPopup, resort, deleteResort, updateResort, readOnly} = props

  const closePopup = (close) => {
    setPopup({open: false, resort: {}, readOnly: true})
    close();
  }

  const deleteAndClose = (close) => {
    deleteResort(resort.id)
    closePopup(close)
  }

  return <Popup
    defaultOpen={true}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={() => closePopup(close)}>
          &times;
        </button>
        <div className="header"> Resort </div>
        <div className="content">
          <SkiData resort={resort} readOnly={readOnly} updateResort={updateResort} setPopup={setPopup}/>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => setPopup({open: true, resort: resort, readOnly: false})}
            disable={!readOnly}
          >
            Edit
          </button>
          <button
            className="button"
            onClick={() => deleteAndClose(close)}
            disable={!readOnly}
          >
            Delete
          </button>
          <button
            className="button"
            onClick={() => closePopup(close)}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
}

export { SkiPopup };
