export default class Managment {
  buttonsWavesEffectInit(elements) {
    const buttons = elements;
    buttons.forEach(button => {
      button.onclick = (event) => {
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = diameter + "px";
        circle.style.left = event.clientX - (button.offsetLeft + radius) + "px";
        circle.style.top = event.clientY - (button.offsetTop + radius) + "px";
        circle.classList.add('ripple');
  
        const ripple = document.querySelector('.ripple');
        if(ripple) {
          ripple.remove();
        }
  
        button.appendChild(circle);
      }
    });
  }

  dropdownInit(dropdownTrigger) {
    dropdownTrigger.onclick = (event) => {      
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
      if(dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
        return dropdown.style.visibility = 'hidden';
      }
      document.body.appendChild(backdrop);

      dropdown.classList.add('active');
      return dropdown.style.visibility = 'visible';
    }
  }
}