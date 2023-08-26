import './Slider.scss';

export default function Slider(props) {
  return(
    <div className="SliderBlock col s6 offset-s3">
      <div data-attribute="left" className="sliderButton">&lt;</div>
      <div className="slider">
        <div className="sliderRow">
          {props.children}
        </div>
      </div>
      <div data-attribute="right" className="sliderButton">&gt;</div>
    </div>
  )
}