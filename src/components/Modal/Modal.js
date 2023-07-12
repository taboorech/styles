import './Modal.scss';

export default function Modal(props) {
  return(
    <div className='Modal s12 m8 offset-m2 l6 offset-l3' id={props.id}>
      <div className='modal-header'>
        {props.title}
      </div>
      <div className='modal-body'>
        {props.description}
      </div>
      <div className='modal-footer'>
        {props.children}
      </div>
    </div>
  )
}