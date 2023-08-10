import { useEffect } from "react";
import Tabs from "../../components/Tabs/Tabs";
import Managment from "../../utils/ElementsManagment";

export default function TabsPage() {

  useEffect(() => {
    const managment = new Managment();
    managment.tabsInit(document.querySelectorAll('.Tabs'))
  }, []);

  return(
    <div>
      <Tabs>
        <div className="tabsBlock">F1</div>
        <div className="tabsBlock">F2</div>
        <div className="tabsBlock">F3</div>
      </Tabs>
    </div>
  )
}