import { useState } from 'react';
import uuid from 'react-uuid';
import Webcam from 'react-webcam';
import './SkiData.css';

function SkiData(props) {
  const { resort, updateResort, readOnly, setPopup } = props
  const [formData, setformData] = useState({
    id: resort.id || uuid(),
    img: resort.img || '',
    name: resort.name || '',
    runs: resort.runs || ''
  })

  const [errors, setErrors] = useState([])

  const [enableErrors, setEnableErrors] = useState(false)

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const tempData = { ...formData }
    tempData[name] = value
    setformData(tempData)
    validateField(name, value)
  }

  const WebcamComponent = () => {
    return <Webcam
      audio={false}
      screenshotFormat="image/jpeg"
    >
      {({ getScreenshot }) => (
        <button
          name="img"
          onClick={(e) => {
            e.preventDefault()
            const imageSrc = getScreenshot()
            e.target.value = imageSrc
            handleUserInput(e)
          }}
        >
          Capture photo
        </button>
      )}
    </Webcam>;
  }
    const formSubmit = (e) => {
      e.preventDefault();

      if (errors.length > 0) {
        setEnableErrors(true)
      } else {
        setEnableErrors(false)
        updateResort(formData)
        setPopup({ open: false, resort: {}, readOnly: true })
      }
    }

    const validateField = (fieldName, value) => {
      let tempErrors = [];
      switch (fieldName) {
        case 'name':
          if (value.length == 0) {
            tempErrors.push('Name is required');
          }
          break;
        case 'runs':
          if (!(/^\d+$/.test(value))) {
            tempErrors.push('Runs should contain only Numbers');
          }
          break;
        default:
          break;
      }
      console.log(tempErrors, 'ERR')
      setErrors(tempErrors);
    }

    return (
      <form className="demoForm" onSubmit={e => formSubmit(e)}>
        <div className="panel panel-default">
          {enableErrors ? errors.map(err => <p>{err}</p>) : null}
        </div>
        { !readOnly ? <div className="cam">{WebcamComponent()}</div> : <img src={formData.img}></img> }
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" required className="form-control" name="name"
            placeholder="Resort Name"
            value={formData.name}
            disabled={readOnly}
            onChange={handleUserInput} />
        </div>
        <div>
          <label htmlFor="runs">Runs</label>
          <input type="text" required className="form-control" name="runs"
            placeholder="Ski Runs"
            value={formData.runs}
            disabled={readOnly}
            onChange={handleUserInput} />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    )
  }

  export { SkiData };
