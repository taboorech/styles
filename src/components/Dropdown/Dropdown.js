import './Dropdown.scss';

export default function Dropdown(props) {
  return(
    <div className="Dropdown s4 m6 l2 xl2" id={props.id}>
      {props.children}
    </div>
  )
}