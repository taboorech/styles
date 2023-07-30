export class AudioPlayer {
  
  constructor() {
    this.audioSettings = new Audio();
    this.play = false;
    this.count = 0;
  }

  init(
    songList, 
    songNameBlocks, 
    progressBar, 
    progress, 
    currentTime, 
    durationTime, 
    playButton, 
    prevSongButton, 
    nextSongButton,
    volumeBar,
    volume,
    volumeIndicator,
    repeatButton,
    listBlock
  ) {
    this.list = songList;
    this.songNameBlocks = songNameBlocks;
    this.progressBar = progressBar;
    this.progress = progress;
    this.currentTime = currentTime;
    this.durationTime = durationTime;
    this.playButton = playButton;
    this.prevSongButton = prevSongButton;
    this.nextSongButton = nextSongButton;
    this.volumeBar = volumeBar;
    this.volume = volume;
    this.volumeIndicator = volumeIndicator;
    this.repeatButton = repeatButton;
    this.listBlock = listBlock;

    this.fillPlayList(this);

    if(!!this.list) {
      this.audioSettings.src = this.list[this.count];
    }
    
    // update duration time on metadata load
    this.audioSettings.addEventListener('loadedmetadata', () => {
      if(!!this.audioSettings.src) {
        this.durationTime.innerHTML = this.calculateTime(this.audioSettings.duration);
      }
    });

    this.progressBar.onmousedown = (event) => {
      this.progressBarMouseDown(event);
    }

    this.playButton.onclick = (event) => {
      this.playButtonOnClick(event);
    }

    (this.songNameBlocks[0].parentNode).onmouseover = () => {
      this.songNameBlocks.forEach(songNameBlock => {
        songNameBlock.style.animationPlayState = "running";
      });
    }
    
    (this.songNameBlocks[0].parentNode).onmouseleave = this.songNameBlockMouseLeave.bind(this);

    this.prevSongButton.onclick = () => this.prevSongButtonClick(this);
    this.nextSongButton.onclick = () => this.nextSongButtonClick(this);

    this.volumeBar.onmousedown = (event) => this.volumeBarMouseDown(event);

    this.repeatButton.onclick = this.repeatButtonClick.bind(this);

  }
  
  async playState() {
    if(this.play) {
      return this.audioSettings.play()
      .then(() => {
        setInterval(this.changeProgress.bind(this), 500);
      })
      .catch(err => {
        console.log(err);
      })
    }
    return this.audioSettings.pause();
  }

  getSongName(player) {
    return `${(player.src.split('/').slice(-1))}`.replaceAll('%20', ' ').replaceAll('.mp3', '');
  }
  
  changeSongName() {
    const songName = this.getSongName(this.audioSettings);
    this.songNameBlocks.forEach(songNameBlock => {
      songNameBlock.innerHTML = songName;
    });
  }
  
  calculateFunction(event, bar, progress) {
    // function to change progress position on click
    let currentProgress = ((event.clientX - bar.offsetLeft) * 100) / bar.offsetWidth;
    if(currentProgress > 100) {
      currentProgress = 100;
    }
    if(currentProgress < 0) {
      currentProgress = 0;
    }
    progress.style.width = currentProgress + "%";
    
    return currentProgress;
  }
  
  calculateTime(time) {
    // convert from seconds to hours, minutes, seconds
    // time - time in seconds
    const minutes = Math.floor(time / 60);
    const hours = Math.floor(minutes / 60);
    let seconds = (time % 60).toFixed();
    if(seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
  }

  changeProgress() {
    // dynamic progress change
    let currentProgress = (this.audioSettings).currentTime * 100 / this.audioSettings.duration;
    if(this.audioSettings.currentTime === this.audioSettings.duration) {
      this.nextSongButtonClick();
    }
    this.currentTime.innerHTML = this.calculateTime(this.audioSettings.currentTime);
    this.progress.style.width = currentProgress + "%";
  }

  progressBarMouseDown(event) {
    let currentProgress;
    currentProgress = this.calculateFunction(event, this.progressBar, this.progress);
    if(this.play) {
      this.audioSettings.pause();
    }
    this.audioSettings.currentTime = (currentProgress / 100) * this.audioSettings.duration;
    this.currentTime.innerHTML = this.calculateTime(this.audioSettings.currentTime);
    window.onmousemove = (event) => {
      currentProgress = this.calculateFunction(event, this.progressBar, this.progress);
      this.audioSettings.currentTime = (currentProgress / 100) * this.audioSettings.duration;
      this.currentTime.innerHTML = this.calculateTime(this.audioSettings.currentTime);
    }
    window.onmouseup = () => {
      window.onmousemove = null;
      this.playState();
    }
  }

  playButtonOnClick(event) {
    this.play = !this.play;
    if(this.play) {
      event.target.innerHTML = event.target.getAttribute("disable_play_button_symbol");
    } else {
      event.target.innerHTML = event.target.getAttribute("active_play_button_symbol");
    }
    this.playState();
  }

  songNameBlockMouseLeave() {
    this.songNameBlocks.forEach(songNameBlock => {
      songNameBlock.style.animationPlayState = "running";
      const songNameAnimationEndFunc = () => {
        songNameBlock.style.animationPlayState = "paused";
        songNameBlock.removeEventListener('animationiteration', songNameAnimationEndFunc);
      };
      songNameBlock.addEventListener('animationiteration', songNameAnimationEndFunc)
    });
  }

  prevSongButtonClick() {
    if(this.count - 1 < 0) {
      this.count = this.list.length - 1;
    } else {
      this.count -= 1;
    }
    this.audioSettings.src = this.list[this.count];
    this.changeSongName();
    return this.playState();
  }

  nextSongButtonClick() {
    if(this.count + 1 < this.list.length) {
      this.count += 1;
    } else {
      this.count = 0;
    }
    this.audioSettings.src = this.list[this.count];
    this.changeSongName();
    return this.playState();
  }

  volumeBarMouseDown(event) {
    let currentProgress;
    currentProgress = this.calculateFunction(event, this.volumeBar, this.volume);
    this.audioSettings.volume = currentProgress / 100;
    this.volumeIndicator.innerHTML = `${this.audioSettings.volume.toFixed(2) * 100}`.split('.')[0] + '%';
    this.volumeIndicator.style.top = event.clientY - 5 * (this.volumeBar.offsetHeight) + 'px';
    this.volumeIndicator.hidden = false;
    window.onmousemove = (event) => {
      currentProgress = this.calculateFunction(event, this.volumeBar, this.volume);
      this.audioSettings.volume = currentProgress / 100;
      this.volumeIndicator.innerHTML = `${this.audioSettings.volume.toFixed(2) * 100}`.split('.')[0] + '%';
      this.volumeIndicator.style.left = event.clientX - (this.volumeIndicator.clientWidth / 3) + 'px';
    }
    window.onmouseup = () => {
      window.onmousemove = null;
      this.volumeIndicator.hidden = true;
    }

  }

  repeatButtonClick() {
    if(!this.repeatButton.classList.contains('active')) {
      this.audioSettings.loop = true;
      return this.repeatButton.classList.add('active');
    }
    this.audioSettings.loop = false;
    return this.repeatButton.classList.remove('active');
  }

  fillPlayList() {
    this.list.forEach(song => {
      const audio = new Audio();
      const listItem = document.createElement('div');
      listItem.classList.add('list-item');
      listItem.classList.add('s10');
      listItem.classList.add('offset-s1');
      
      const listSongName = document.createElement('div');
      listSongName.classList.add('listSongName');
      const listSongPlay = document.createElement('div');
      listSongPlay.innerHTML = "▶";
      listSongPlay.classList.add('listSongPlay');
      const spanName = document.createElement('span');
      listSongName.appendChild(listSongPlay);
      listSongName.appendChild(spanName);
      
      const listSongDuration = document.createElement('div');
      listSongDuration.classList.add('listSongDuration');
      audio.addEventListener('loadedmetadata', () => {
        spanName.innerHTML = this.getSongName(audio);
        listSongDuration.innerHTML = this.calculateTime(audio.duration)  
      });
      listItem.appendChild(listSongName);
      listItem.appendChild(listSongDuration);
      this.listBlock.appendChild(listItem);
      audio.src = song;
    })
  }

}