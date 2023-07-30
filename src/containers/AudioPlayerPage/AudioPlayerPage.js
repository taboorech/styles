import { useEffect } from "react";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import Managment from "../../utils/ElementsManagment";

export default function AudioPlayerPage() {

  useEffect(() => {
    const managment = new Managment();
    managment.audioPlayerInit(document.querySelectorAll('.AudioPlayer'));
  }, []);

  return(
    <div>
      <AudioPlayer className='s6 offset-s3' list={['./files/under the influence x i was never there.mp3', './files/TWISTED - WORTH NOTING.mp3', './files/dream on - aerosmith (sped up).mp3']}/>
    </div>
  )
}