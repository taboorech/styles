import './Button.scss';

export default function Button(props) {
  return(
    <button 
      className={"Button ".concat(props.className ? props.className : '')} 
      dropdown_target = {props.dropdown_target}
      disabled = {props.disabled}
    >
      {props.children}
    </button>
  )
}