import { AudioPlayer } from "./AudioPlayer.class";

export default class Managment extends AudioPlayer {

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
      let list = audioPlayer.getAttribute('list').split(',');

      const songNameBlocks = (audioPlayer.querySelector('.songName')).querySelectorAll('span');

      const prevSongButton = audioPlayer.querySelector('.prevSongButton');
      const nextSongButton = audioPlayer.querySelector('.nextSongButton');
      
      // find time elements
      const currentTime = audioPlayer.querySelector('.currentTime');
      const durationTime = audioPlayer.querySelector('.durationTime');
      
      // find play / pause button
      const playButton = audioPlayer.querySelector('.playButton');
      
      // set play button default text
      playButton.innerHTML = playButton.getAttribute("active_play_button_symbol");
      
      // find progress bar's elements
      const progressBar = audioPlayer.querySelector('.progressBar');
      const progress = progressBar.querySelector('.progress');
      
      // find volume bar's elements
      const volumeBar = audioPlayer.querySelector('.volumeBar');
      const volume = volumeBar.querySelector('.volume');
      const volumeIndicator = volumeBar.querySelector('.volumeIndicator');
      
      const repeatButton = audioPlayer.querySelector('.repeatButton');

      const listBlock = audioPlayer.querySelector('.listBlock');

      this.init(
        list, 
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
      );
      this.changeSongName();

    })
  }

  slideMenuInit(additionalMenu) {
    const slideButton = additionalMenu.querySelector('.slideButton');
    slideButton.onclick = () => {
      const additionalBackdropClickFunction = () => {
        slideButton.style.left = 0;
        slideButton.classList.remove('active');
      }
      const backdrop = this.backdropFunctions(additionalMenu, additionalBackdropClickFunction);
      if(additionalMenu.classList.contains('active')) {
        return backdrop.click();
      }
      slideButton.style.left = additionalMenu.offsetWidth + 'px';
      slideButton.classList.add('active');
      document.body.appendChild(backdrop);
      return additionalMenu.classList.add('active');
    }
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