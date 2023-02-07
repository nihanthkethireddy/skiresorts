import './SkiCard.css';

function SkiCard(props) {

  const {setPopup, deleteResort, resort} = props
  return <div className={'card'}>
    <div className={'resortDetails'} onClick={() => setPopup({open: true, resort: resort, readOnly: true})}>
      <img src={resort.img}></img>
      <span>Name: {resort.name}</span>
      <span>Ski Runs: {resort.runs}</span>
    </div>
    <div className={'resortActions'}>
      <button onClick={() => setPopup({open: true, resort: resort, readOnly: false})}>Edit</button>
      <button onClick={() => deleteResort(resort.id)}>Delete</button>
    </div>
  </div>
}

export {SkiCard};
