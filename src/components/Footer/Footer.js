import './Footer.scss';

export default function Footer(props) {
  return (
    <footer className="Footer">
      <div className="mainInfo">
        <div className='content'>
          <h3>{props.mainText}</h3>
          {props.description}
        </div>
        <div className='links'>
          <h3>Links</h3>
          {props.children}
        </div>
      </div>
      <div className="copyRight">
        <div className='copyRightVersion'>
          {props.copyRightText}
        </div>
        <a href={props.authorLink} className='author'>
          {props.author}
        </a>
      </div>
    </footer>
  )
}