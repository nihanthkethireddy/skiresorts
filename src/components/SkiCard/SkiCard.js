import './SkiCard.css';

function SkiCard(props) {
  return <div className={'card'}>
    <div className={'resortDetails'} onClick={() => props.openResortPopup(props.resort, 'view')}>Resort {props.resort}</div>
    <div className={'resortActions'}>
      <button onClick={() => props.setPopup({open: true, resort: props.resort, mode: 'edit'})}></button>
      <button onClick={() => props.deleteResort(props.resort)}></button>
    </div>
  </div>
}

export {SkiCard};
