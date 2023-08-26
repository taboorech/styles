import { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import Managment from "../../utils/ElementsManagment";

export default function SliderPage() {

  useEffect(() => {
    const managment = new Managment();
    managment.sliderInit(document.querySelectorAll('.SliderBlock'));
  }, []);

  return(
    <div>
      <Slider>
        <img src="./images/card-bg.jpg" alt="sliderImage"/>
        <img src="./images/card-bg.jpg" alt="sliderImage"/>
        <img src="./images/card-bg.jpg" alt="sliderImage"/>
      </Slider>
    </div>
  )
}