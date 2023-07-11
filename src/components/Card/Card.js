import './Card.scss';

export default function Card(props) {
  return(
    <div className="Card s4">
      <div className={"card-header ".concat(props.className)} style={{backgroundImage: `url('${props.image}')`}}>
        <div className='main-content'>
          <h2>Title</h2>
          <p>Description</p>
        </div>
        {props.className?.includes('menu') ? 
        <div className='secondary-content'>
          <span className='icons dropdown-trigger' onClick={props.onMenuClick}>
            {String.fromCharCode(8942)}
          </span>
        </div> : null}
      </div>
      {props.className?.includes('with-body') ? 
        <div className="card-body">
          {props.children}
        </div>
      : null}
    </div>
  )
}