import Button from '../Button/Button';
import './AudioPlayer.scss';

export default function AudioPlayer(props) {
  return(
    <div className={'AudioPlayer '.concat(props.className)} list={props.list}>
      <div className='listBlock'>
        {/* <div className='list-item s10 offset-s1'>
          <div className='listSongName'>
            <div className='listSongPlay'>▶</div>
            <span>FFF</span>
          </div>
          <div className='listSongDuration'>2:45</div>
        </div> */}
      </div>
      <div className='durationBlock'>
        <div className='currentTime time'>0:00</div>
        <div className='progressBar'>
          <div className='progress'></div>
        </div>
        <div className='durationTime time'>0:00</div>
      </div>
      <div className='toolsBlock'>
        <div className='songName s4'>
          <span></span>
          <span></span>
        </div>
        <div className='buttonsBlock s4'>
          <Button className="btn-circle prevSongButton audioButton" >{"<"}</Button>
          <Button className="btn-circle playButton audioButton" active_play_button_symbol="▶" disable_play_button_symbol="❚❚"></Button>
          <Button className="btn-circle nextSongButton audioButton" >{">"}</Button>
        </div>
        <div className='volumeBlock s4'>
          <div className='repeatBlock s2 offset-s1'>
            <button className='repeatButton'>{String.fromCharCode(8620)}</button>
          </div>
          <div className='volumeBar s8 offset-s1'>
            <div className='volumeIndicator'></div>
            <div className='volume'></div>
          </div>
        </div>
      </div>
    </div>
  )
}