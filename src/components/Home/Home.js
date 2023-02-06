import { useEffect, useState } from 'react';
import { SkiCard } from '../SkiCard';
import {SkiPopup} from '../SkiPopup';
import './Home.css';

function Home() {
  const [resorts, setResorts] = useState(null)
  const [popup, setPopup] = useState({ open: false, resort: {}, readOnly: true })

  const displayResorts = () => {
    if (resorts && Object.keys(resorts).length > 0) {
      return Object.keys(resorts).map((key) => {
        return <SkiCard key={key} resort={resorts[key]} setPopup={setPopup} deleteResort={deleteResort} />
      })
    }
    return <div>No Resorts Found</div>
  }

  const displayPopup = () => {
    if (popup.open) {
      return <SkiPopup resort={popup.resort} deleteResort={deleteResort} updateResort={updateResort} readOnly={popup.readOnly} setPopup={setPopup}/>
    }
    return null
  }

  const deleteResort = (id) => {
    const tempData = {...resorts}
    delete tempData[id]
    setResorts(tempData)
  }

  const updateResort = (resort) => {
    const tempData = {...resorts}
    tempData[resort.id] = resort
    setResorts(tempData)
  }

  return (
    <div className="resorts">
      {displayPopup()}
      <div>Ski Resorts <button onClick={() =>  setPopup({open: true, resort: {}, readOnly: false})}>Add Resort</button></div>
      <div className={'cardGrid'}>{displayResorts()}</div>
    </div>
  );
}

export {Home};
