import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Managment from "../../utils/ElementsManagment";

export default function NavbarPage() {

  useEffect(() => {
    const managment = new Managment();
    managment.slideMenuInit(document.querySelector('.mobile-slide'));
  }, [])

  return (
    <div>
      <Navbar className={"mobile-slide"} />
    </div>
  )
}