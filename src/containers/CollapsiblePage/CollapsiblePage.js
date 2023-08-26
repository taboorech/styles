import { useEffect } from "react";
import Collapsible from "../../components/Collapsible/Collapsible";
import Managment from "../../utils/ElementsManagment";

export default function CollapsiblePage() {

  useEffect(() => {
    const managment = new Managment();
    managment.collapsibleInit(document.querySelectorAll('.Collapsible'));
  }, [])

  return (
    <div>
      <Collapsible 
        className="col s10 offset-s1" 
        title="fff"
        description = {
          <p>Lorem</p>
        }
      ></Collapsible>
      <Collapsible 
        className="col s10 offset-s1" 
        title="fff"
        description = {
          <p>Lorem</p>
        }
      ></Collapsible>
    </div>
  )
}