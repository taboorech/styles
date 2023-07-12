import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import Managment from "../../utils/ElementsManagment";
import { useEffect } from "react";

export default function ModalsPage() {
  
  useEffect(() => {
    const managment = new Managment();
    managment.buttonsWavesEffectInit(document.querySelectorAll('.Button.waves-effect'));
    managment.modalInit(document.querySelectorAll('.Button.modal-trigger'))
  }, []);

  return (
    <div>
      <Modal 
        id="modal1"
        title={'Modal title'} 
        description={
          <>
            <p>Modal description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla eu nisi ac neque consectetur interdum.
            Ut porta urna vitae fringilla facilisis.
            Curabitur id commodo nulla.</p>
            <p>Praesent vel elementum lacus, et molestie dolor. 
            Morbi semper arcu nec ultrices maximus. 
            Integer nec posuere leo. Curabitur quis orci nec velit dictum convallis. 
            Vestibulum condimentum, massa non tristique tincidunt, odio lectus sollicitudin risus, nec sollicitudin nisi lacus nec felis. 
            Curabitur vehicula aliquam nulla a ornare. 
            Maecenas varius, lectus ac consectetur egestas, metus metus fringilla ipsum, vitae porttitor nisi felis sed est. 
            Morbi ullamcorper mattis ex, et sagittis nunc bibendum et. 
            Nam tincidunt fermentum ante quis vestibulum.</p>
            <p>Pellentesque pharetra porta enim, vitae porttitor lorem commodo nec. 
            Integer dapibus, massa eu malesuada facilisis, diam sem tempor justo, gravida sagittis risus ante ac felis. 
            Praesent posuere mi id arcu fermentum euismod. 
            Proin porta eros eu sapien molestie, quis varius tortor fermentum. 
            Proin sit amet malesuada tortor. 
            Suspendisse imperdiet ornare justo, eu condimentum est. 
            Vivamus ut tristique massa, vitae fringilla ligula. 
            In vel lorem sed nisl laoreet posuere at eget lectus. 
            Pellentesque finibus, turpis fermentum fringilla elementum, sapien ligula tempus arcu, non vehicula odio lorem at nibh. 
            Nullam malesuada ac ex nec tincidunt.</p>
          </>
        }
      >
        <Button className={'waves-effect s4 offset-s1 l2 offset-l7'}>FFF</Button>
        <Button className={'waves-effect red s4 offset-s1 l2 offset-l1'}>FFF</Button>
      </Modal>
      <Button className={'waves-effect modal-trigger'} modal_target = "modal1">FFF</Button>
    </div>
  )
}