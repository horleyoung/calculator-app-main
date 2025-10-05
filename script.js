const themeController = document.querySelector('.theme-controller');
const containerToggle = document.getElementById('buttons-container');
const mainTheme = document.querySelector('main');
const btn =  document.querySelectorAll('.btn');
const display = document.querySelector('.display');
const delKey = document.querySelector(".del")
const equality = document.querySelector('.equality');
const header = document.querySelector(".head");
const reset = document.getElementById('reset');
const backSpace = document.getElementById('del');
const circles = document.querySelectorAll('.circle');


let current = 0; // Start with the first circle visible

// Hide other circles except the first one
circles.forEach((circle, index) => {
  if (index !== current) circle.classList.add('hidden');
});

// Add click event to each circle
circles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    // Hide the current circle
    circles[current].classList.add('hidden');

    // Move to the next one (loop back to 0)
    current = (current + 1) % circles.length;

    // Show the new circle
    circles[current].classList.remove('hidden');

    // Reset all theme-related classes before applying new one
    themeController.classList.remove('theme-controllertwo', 'theme-controllerthree');
    containerToggle.classList.remove('buttons-two', 'buttons-three');
    mainTheme.classList.remove('main-two', 'main-three');
    display.classList.remove('display-two', 'display-three');
    btn.forEach(button => button.classList.remove('btn-two', 'btn-three'));
    delKey.classList.remove('del-two', 'del-three');
    reset.classList.remove('reset-two', 'reset-three');
    equality.classList.remove('equality-two', 'equality-three');
    header.classList.remove('head-two', 'head-three');

    // Apply new theme based on which circle is active
    if (current === 0) {
      // Theme 1 (default)
      console.log("Theme 1 active");
    } 
    else if (current === 1) {
      // Theme 2
      themeController.classList.add('theme-controllertwo');
      containerToggle.classList.add('buttons-two');
      mainTheme.classList.add('main-two');
      display.classList.add('display-two');
      btn.forEach(button => button.classList.add('btn-two'));
      delKey.classList.add('del-two');
      reset.classList.add('reset-two');
      equality.classList.add('equality-two');
      header.classList.add('head-two');
      console.log("Theme 2 active");
    } 
    else if (current === 2) {
      // Theme 3
      themeController.classList.add('theme-controllerthree');
      containerToggle.classList.add('buttons-three');
      mainTheme.classList.add('main-three');
      display.classList.add('display-three');
      btn.forEach(button => button.classList.add('btn-three'));
      delKey.classList.add('del-three');
      reset.classList.add('reset-three');
      equality.classList.add('equality-three');
      header.classList.add('head-three');
      console.log("Theme 3 active");
    }
  });
});



// calculations
btn.forEach(button => {
    button.addEventListener('click', function() {
        display.textContent += button.textContent;  
    })
})
//reset 
reset.addEventListener('click', function() {
    display.textContent = "";
})
//backspace
backSpace.addEventListener('click', function() { 
    let lengthOfDisplay = display.textContent.length;
    display.textContent = display.textContent.slice(0, lengthOfDisplay - 1);
    display = display.textContent;
})
// equals to
equality.addEventListener('click', function() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = "Error";
    }                   
})
