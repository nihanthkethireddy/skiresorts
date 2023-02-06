import './SkiDetails.css';
import Popup from 'reactjs-popup';
import './popup.css';

function SkiDetails(props) {

  const closePopup = (close) => {
    props.setPopup({open: false, resort: props.resort, mode: 'view'})
    close();
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
        <div className="header"> Modal Title </div>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
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

export { SkiDetails };
