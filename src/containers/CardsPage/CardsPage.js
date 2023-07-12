import Card from "../../components/Card/Card";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useEffect } from "react";
import Managment from "../../utils/ElementsManagment";

export default function CardsPage() {
  useEffect(() => {
    const managment = new Managment();
    managment.dropdownInit(document.querySelector('.dropdown-trigger'));
  }, [])
  return (
    <>
      <Card className="darkslategray white-text"/>
      <Card className="darkslategray white-text menu" dropdown_target="dropdown1" />
      <Dropdown id="dropdown1">
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
      <Card className="darkslategray white-text with-body">
        <div>fff</div>
        <div>fff</div>
        <div>fff</div>
      </Card>
      <Card className="darkslategray white-text" image="./images/card-bg.jpg"/>
      <Card className="darkslategray white-text" image="https://aad.hsu.edu.hk/wp-content/uploads/2020/07/geometric-dark-bg.jpg"/>
      <Card className="darkslategray white-text with-footer" footerLinks = {[{title: 'Fff', link: 'https://aad.hsu.edu.hk/wp-content/uploads/2020/07/geometric-dark-bg.jpg'}, {title: 'FF2', link: 'https://aad.hsu.edu.hk/wp-content/uploads/2020/07/geometric-dark-bg.jpg'}]}/>
      <Card className="darkslategray white-text with-body with-footer" footerLinks = {[{title: 'Fff', link: 'https://aad.hsu.edu.hk/wp-content/uploads/2020/07/geometric-dark-bg.jpg'}, {title: 'FF2', link: 'https://aad.hsu.edu.hk/wp-content/uploads/2020/07/geometric-dark-bg.jpg'}]}>
        <div>fff</div>
        <div>fff</div>
        <div>fff</div>
      </Card>
    </>
  )
}