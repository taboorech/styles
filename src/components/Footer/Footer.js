import './Footer.scss';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="mainInfo">
        <div className='content'>
          <h3>MAIN TEXT</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam congue purus id elit maximus, quis pretium eros volutpat. 
          Maecenas eleifend hendrerit tortor, non mattis dolor ultrices sit amet. 
        </div>
        <div className='links'>
          <h3>Links</h3>
          <a href='#!'>FFF</a>
          <a href='#!'>FFF</a>
          <a href='#!'>FFF</a>
        </div>
      </div>
      <div className="copyRight">
        <div className='copyRightVersion'>
          © Copyright 2023
        </div>
        <a href='#!' className='author'>FFF</a>
      </div>
    </footer>
  )
}