import './Media.scss';

export default function Media(props) {
  return(
    <div className={'Media-parent '.concat(props.className)}>
      <div className={'Media'}>
        <img src={props.src} alt={props.alt}/>
      </div>
      <div className='Media-clone'>
        <img src={props.src} alt={props.alt}/>
      </div>
    </div>
  )
}