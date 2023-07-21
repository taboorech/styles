export default class Managment {

  buttonsWavesEffectInit(elements) {
    const buttons = elements;
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        // create wave effect for button
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = diameter + "px";
        const buttonSettings = button.getBoundingClientRect();
        circle.style.left = event.clientX - (buttonSettings.left + radius) + "px";
        circle.style.top = event.clientY - (buttonSettings.top + radius) + "px";
        circle.classList.add('ripple');
  
        const ripple = document.querySelector('.ripple');
        if(ripple) {
          ripple.remove();
        }
  
        button.appendChild(circle);
      })
    });
  }

  dropdownInit(dropdownTrigger) {
    dropdownTrigger.addEventListener('click', (event) => {      
      const dropdown = document.querySelector(`#${event.target.getAttribute('dropdown_target')}`);
      const dropdownTriggerSettings = dropdownTrigger.getBoundingClientRect();

      // menu position on the x-axis

      let xPosition = (dropdownTriggerSettings.x + (dropdownTrigger.clientWidth / 2) - (dropdown.clientWidth / 2));
      if(xPosition >= 0) {
        dropdown.style.left = xPosition + "px";
      } else {
        dropdown.style.left = dropdownTriggerSettings.x;
      }

      // menu position on the y-axis
      let yPosition = dropdownTrigger.offsetHeight + "px";
      dropdown.style.top = yPosition + "px";

      const backdrop = this.backdropFunctions(dropdown);
      document.body.appendChild(backdrop);

      return dropdown.classList.add('active');
    })
  }

  modalInit(modalTriggers) {
    modalTriggers.forEach(modalTrigger => {
      modalTrigger.addEventListener('click', (event) => {
        const modal = document.querySelector(`#${event.target.getAttribute('modal_target')}`);

        const backdrop = this.backdropFunctions(modal);

        // set close events for buttons in footer
        const footerButtons = modal.querySelector('.modal-footer').children;
        for(let i = 0; i < footerButtons.length; i++) {
          if(footerButtons[i].tagName === "A" || footerButtons[i].tagName === "BUTTON") {
            footerButtons[i].onclick = () => {
              backdrop.click();
            }
          }
        }

        document.body.appendChild(backdrop);
        
        return modal.classList.add('active');
      })
    })
  }

  mediaInit(mediaElements) {
    mediaElements.forEach((media) => {
      const element = media.querySelector('.Media-clone');
      const elementToClick = media.querySelector('.Media');

      // set default left, top, width styles for block
      window.addEventListener('load', () => {
        element.style.setProperty('--begin-left', elementToClick.offsetLeft + 'px');
        element.style.setProperty('--begin-top', elementToClick.offsetTop + 'px');
        element.style.setProperty('--begin-width', elementToClick.offsetWidth + 'px');
      });
      
      // set click handler
      const clickHandler = () => {
        
        // function to set the image's second click event
        // wherein second click set close event
        const secondClickHandler = () => {
          backdrop.click();
          media.removeEventListener('click', secondClickHandler);
          media.addEventListener('click', clickHandler);
        }

        // function to add transition-end event to the default image element
        // default image element show after big image element's transition end
        const closeFunc = () => {
          const transitionEndFunc = () => {
            elementToClick.classList.remove('active')
            element.removeEventListener('transitionend', transitionEndFunc);
          }
          element.addEventListener('transitionend', transitionEndFunc);
          media.removeEventListener('click', secondClickHandler);
          media.addEventListener('click', clickHandler);
        }

        const backdrop = this.backdropFunctions(element, closeFunc);

        document.body.appendChild(backdrop);
        element.classList.add('active');
        elementToClick.classList.add('active');

        media.removeEventListener('click', clickHandler);
        media.addEventListener('click', secondClickHandler);
      };
      media.addEventListener('click', clickHandler);
    })
  }

  audioPlayerInit(audioPlayers) {
    audioPlayers.forEach(audioPlayer => {
      const audioSettings = new Audio('./files/under the influence x i was never there.mp3');
      
      const currentTime = audioPlayer.querySelector('.currentTime');
      const durationTime = audioPlayer.querySelector('.durationTime');
      const calculateTime = (time) => {
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

      // set play / pause settings
      let play = false;
      const playButton = audioPlayer.querySelector('.playButton');
      const playState = async () => {
        if(play) {
          return await audioSettings.play()
          .then(() => {
            setInterval(changeProgress, 500);
          })
          .catch(err => {
            console.log(err);
          })
        }
        return audioSettings.pause();
      }
      playButton.onclick = async (event) => {
        play = !play;
        if(play) {
          event.target.innerHTML = event.target.getAttribute("disable_play_button_symbol");
        } else {
          event.target.innerHTML = event.target.getAttribute("active_play_button_symbol");
        }
        playState();
      }
      
      // update duration time on window load
      window.addEventListener('load', () => {
        durationTime.innerHTML = calculateTime(audioSettings.duration);
        playButton.innerHTML = playButton.getAttribute("active_play_button_symbol");
      })

      // set progress bar's settings
      const progressBar = audioPlayer.querySelector('.progressBar');
      const progress = progressBar.querySelector('.progress');
      
      const calculateFunction = (event) => {
        // function to change progress position on click
        let currentProgress = ((event.clientX - progressBar.offsetLeft) * 100) / progressBar.offsetWidth;
        if(currentProgress > 100) {
          currentProgress = 100;
        }
        if(currentProgress < 0) {
          currentProgress = 0;
        }
        progress.style.width = currentProgress + "%";

        return currentProgress;
      }
      
      progressBar.onmousedown = (event) => {
        let currentProgress;
        currentProgress = calculateFunction(event);
        if(play) {
          audioSettings.pause();
        }
        audioSettings.currentTime = (currentProgress / 100) * audioSettings.duration;
        currentTime.innerHTML = calculateTime(audioSettings.currentTime);
        window.onmousemove = (event) => {
          currentProgress = calculateFunction(event);
          audioSettings.currentTime = (currentProgress / 100) * audioSettings.duration;
          currentTime.innerHTML = calculateTime(audioSettings.currentTime);
        }
        window.onmouseup = () => {
          window.onmousemove = null;
          playState();
        }
      }

      const changeProgress = () => {
        // dynamic progress change
        let currentProgress = audioSettings.currentTime * 100 / audioSettings.duration;
        currentTime.innerHTML = calculateTime(audioSettings.currentTime);
        progress.style.width = currentProgress + "%";
      }
    })
  }
  
  backdropFunctions(element, func) {
    // element - element after which backdrop must to be
    // func - additional code to backdrop click

    // create or find backdrop
    let backdrop = document.querySelector('.Backdrop');
    if(!backdrop) {
      backdrop = document.createElement('div');
      backdrop.classList.add('Backdrop');
    }
    backdrop.onclick = () => {
      backdrop.classList.remove('active');
      window.onkeydown = null;
      if(typeof func === 'function') {
        func();
      }
      
      return element.classList.remove('active');
    }

    backdrop.classList.add('active');

    // set window keydown event to close backdrop on escape press
    window.onkeydown = (event) => {
      if(event.key !== "Escape") {
        return;
      }
      backdrop.click();
    };

    return backdrop;
  }
}