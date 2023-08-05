import AdditionalMenu from '../AdditionalMenu/AdditionalMenu';
import './Navbar.scss';

export default function Navbar(props) {
  return (
    <>
      <nav className={'Navbar '.concat(props.className.replace('mobile-slide', ''))}>
        <div className='logoBlock'>
          <a href='!#'>
            {/* <div className='logoImage'>
              <img src='./images/card-bg.jpg' alt='logo' />
            </div> */}
            <div className='logoText'>
              LOGO
            </div>
          </a>
        </div>
        <div className='buttonsBlock'>
          <a href='!#'>FFF</a>
          <a href='!#'>FFF</a>
          <a href='!#'>FFF</a>
        </div>
      </nav>
      {props.className?.includes('mobile-slide') ?
        <AdditionalMenu className={'mobile-slide'}>
          <a href="#!" className="collection-item">FFF</a>
          <a href="#!" className="collection-item">FFF</a>
          <a href="#!" className="collection-item">FFF</a>
        </AdditionalMenu>
      : null}
    </>
  )
}