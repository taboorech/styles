import Collection from "../Collection/Collection";
import './AdditionalMenu.scss';

export default function AdditionalMenu(props) {
  return (
    <div className={'AdditionalMenu '.concat(props.className)}>
      <div className='slideButton'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Collection className="slideMenu">
        {props.children}
      </Collection>
    </div>
  )
}