import './Dropdown.scss';

export default function Dropdown(props) {
  return(
    <div className={"Dropdown ".concat(props.className)} id={props.id}>
      {props.children}
    </div>
  )
}