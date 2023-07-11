import { useEffect } from "react";
import Button from "../../components/Button/Button";
import Managment from "../../utils/ElementsManagment";

export default function ButtonsPage(props) {
  useEffect(() => {
    const managment = new Managment();
    managment.buttonsWavesEffectInit(document.querySelectorAll('.Button.waves-effect'));
  }, [])
  return (
    <>
      <Button className="large waves-effect" disabled>button</Button>
      <Button className="small waves-effect">button</Button>
      <Button className="btn-circle large waves-effect">+</Button>
      <Button className="btn-circle waves-effect">+</Button>
      <Button className="btn-circle small waves-effect">+</Button>
      <Button className="close-effect">button</Button>
      <Button className="small" disabled>button</Button>
      <Button>
        ff
        <div>FFF</div>
      </Button>
    </>
  )
}