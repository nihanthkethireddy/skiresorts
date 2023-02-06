import { useEffect, useState } from 'react';
import { SkiCard } from '../SkiCard';
import {SkiDetails} from '../SkiDetails';
import './Home.css';

function Home() {
  const [resorts, setResorts] = useState([1,2,3,4,5,6,7,8,9,10])
  const [popup, setPopup] = useState({ open: false, resort: {}, mode: null })

  const displayResorts = () => {
    if (resorts?.length > 0) {
      return resorts.map((resort) => {
        return <SkiCard resort={resort} setPopup={setPopup} deleteResort={deleteResort} />
      })
    }
    return <div>No Resorts Found</div>
  }

  const displayPopup = () => {
    if (popup.open) {
      return <SkiDetails resort={popup.resort} deleteResort={deleteResort} updateResort={updateResort} mode={popup.mode} setPopup={setPopup}/>
    }
    return null
  }

  const deleteResort = (resort) => {
    console.log('deleted')
  }

  const updateResort = (resort) => {
    console.log('updated')
  }

  return (
    <div className="resorts">
      {displayPopup()}
      <div>Ski Resorts <button onClick={() =>  setPopup({open: true, resort: {}, mode: 'edit'})}>Add Resort</button></div>
      <div className={'cardGrid'}>{displayResorts()}</div>
    </div>
  );
}

export {Home};
