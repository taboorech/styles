import { Link } from 'react-router-dom';
import './Card.scss';

export default function Card(props) {

  const createFooterLinks = (elements) => {
    return elements.map((element, index) => (
      <Link key={`footer-links-${index}`} to={element.link}>{element.title}</Link>
    ));
  };

  return(
    <div className="Card s4">
      <div className={"card-header ".concat(props.className)} style={{backgroundImage: `url('${props.image}')`}}>
        <div className='main-content'>
          <h2>Title</h2>
          <p>Description</p>
        </div>
        {props.className?.includes('menu') ? 
        <div className='secondary-content'>
          <span className='icons dropdown-trigger' onClick={props.onMenuClick} dropdown_target={props.dropdown_target}>
            {String.fromCharCode(8942)}
          </span>
        </div> : null}
      </div>
      {props.className?.includes('with-body') ? 
        <div className="card-body">
          {props.children}
        </div>
      : null}
      {props.className?.includes('with-footer')?
        <div className='card-footer'>
          {createFooterLinks(props.footerLinks)}
        </div> 
      : null}
    </div>
  )
}