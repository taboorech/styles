import './Slider.scss';

export default function Slider() {
  return(
    <div className="SliderBlock col s6 offset-s3">
      <div data-attribute="left" className="sliderButton">&lt;</div>
      <div className="slider">
        <div className="sliderRow">
          <img src="./images/card-bg.jpg" alt="sliderImage"/>
          <img src="./images/card-bg.jpg" alt="sliderImage"/>
          <img src="./images/card-bg.jpg" alt="sliderImage"/>
        </div>
      </div>
      <div data-attribute="right" className="sliderButton">&gt;</div>
    </div>
  )
}