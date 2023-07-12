import { useEffect } from "react";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import Managment from "../../utils/ElementsManagment";

export default function DropdownPage() {

  useEffect(() => {
    const managment = new Managment();
    managment.dropdownInit(document.querySelector('.dropdown-trigger'));
  }, [])

  return(
    <>
      <Button className="dropdown-trigger" dropdown_target = "dropdown1">TRIGGER</Button>
      <Dropdown id="dropdown1" className="s4 m6 l2 xl2">
        <a href="#!">
          <span>FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF</span>
        </a>
        <a href="#!">
          <span>FFF</span>
        </a>
        <a href="#!">
          <span>FFF</span>
        </a>
      </Dropdown>
    </>
  )
}