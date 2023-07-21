import Button from '../Button/Button';
import './AudioPlayer.scss';

export default function AudioPlayer(props) {
  return(
    <div className={'AudioPlayer '.concat(props.className)} list={props.list}>
      <div className='durationBlock'>
        <div className='currentTime time'>0:00</div>
        <div className='progressBar'>
          <div className='progress'></div>
        </div>
        <div className='durationTime time'></div>
      </div>
      <div className='toolsBlock'>
        <div className='songName'></div>
        <div className='buttonsBlock'>
          <Button className="btn-circle audioButton" >{"<"}</Button>
          <Button className="btn-circle playButton audioButton" active_play_button_symbol="▶" disable_play_button_symbol="❚❚"></Button>
          <Button className="btn-circle audioButton" >{">"}</Button>
        </div>
        <div className='volumeBlock'></div>
      </div>
    </div>
  )
}