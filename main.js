// // Function to play the sound and animate the pad
// function playSound(event) {
//     const keyCode = event.keyCode
//     const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  
//     if (!audio) return; 
  
//     audio.currentTime = 0; 
//     audio.play();
  
//     key.classList.add("playing"); 
//   }


//   function removeTransition(event) {
//     if (event.propertyName !== "transform") return; 
  
//     this.classList.remove("playing");
//   }
  
//   const keys = document.querySelectorAll(".key");
//   keys.forEach((key) => {
//     key.addEventListener("transitionend", removeTransition);
//   });
  
//   window.addEventListener("keydown", playSound);

function playSound(event) {
    let keyCode = event.keyCode
    let audio = document.querySelector('audio[data-key="' + keyCode + '"]')
    let key=document.querySelector('.key[data-key="' + keyCode + '"]')

audio.currentTime = 0;
audio.play();

key.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

let keys = document.querySelectorAll ('.key');
keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);
