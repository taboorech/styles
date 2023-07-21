import './Button.scss';

export default function Button(props) {
  return(
    <button 
      className={"Button ".concat(props.className ? props.className : '')} 
      dropdown_target = {props.dropdown_target}
      modal_target = {props.modal_target}
      active_play_button_symbol = {props.active_play_button_symbol}
      disable_play_button_symbol = {props.disable_play_button_symbol}
      disabled = {props.disabled}
    >
      {props.children}
    </button>
  )
}