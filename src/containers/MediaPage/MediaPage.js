import { useEffect } from "react";
import Media from "../../components/Media/Media";
import Managment from "../../utils/ElementsManagment";

export default function MediaPage() {

  useEffect(() => {
    const managment = new Managment();
    managment.mediaInit(document.querySelectorAll('.Media-parent'));
  }, [])

  return(
    <div>
      <Media src='./images/card-bg.jpg' alt='fff' className={'s2'}></Media>
      <Media src='./images/card-bg.jpg' alt='fff' className={'s2'}></Media>
      <div className="s4 offset-s4">
        <Media src='./images/card-bg.jpg' alt='fff' className={'s2'}></Media>
      </div>
    </div>
  )
}