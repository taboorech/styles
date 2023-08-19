import './Preloader.scss';

export default function Preloader(props) {
  return(
    // col s10 offset-s1 m8 offset-m2 l6 offset-l3
    <div className={'Preloader col s10 offset-s1 m8 offset-m2 l6 offset-l3 '.concat(props.className)}>
      <div style={{width: props.width}}></div>
    </div>
  )
}