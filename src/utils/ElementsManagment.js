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

      // change state of menu. Visible / unvisible. Create backdrop
      const backdrop = document.createElement('div');
      backdrop.classList.add('Backdrop');
      backdrop.onclick = () => {
        backdrop.remove();
        if(dropdown.classList.contains('active')) {
          dropdown.classList.remove('active');
          return dropdown.style.visibility = 'hidden';
        }
      }
      document.body.appendChild(backdrop);

      dropdown.classList.add('active');
      return dropdown.style.visibility = 'visible';
    })
  }

  modalInit(modalTriggers) {
    modalTriggers.forEach(modalTrigger => {
      modalTrigger.addEventListener('click', (event) => {
        const modal = document.querySelector(`#${event.target.getAttribute('modal_target')}`);
        
        // create backdrop with settings
        const backdrop = document.createElement('div');
        backdrop.classList.add('Backdrop');
        backdrop.onclick = () => {
          backdrop.remove();
          if(modal.classList.contains('active')) {
            return modal.classList.remove('active');
          }
        }

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
}