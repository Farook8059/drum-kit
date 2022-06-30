window.addEventListener('keyup', playsound)

function playsound(e) {

    // console.log(e);  //keyboard details

    // console.log(e.keyCode);     //output->  65

    const audio = document.querySelector(`audio[data-key="${e.which}"]`);
    const key = document.querySelector(`.key[data-key="${e.which}"]`);
    
   // console.log(audio);    //output-> audio element

    //if there is no audio
    if (!audio) return;  //stop function from running ll together.

    //rewind to the start
    audio.currentTime = 0;

    // to play audio
    audio.play()

    // console.log(key)

    key.classList.add('playing')  //adding class
    // key.classList.remove('playing')  //removing class

}



//removeTransition function

function removeTransition(e) {
    // console.log(e)
    if (e.propertyName !== 'transform') return; //skip it if it's not  transform

    // console.log(e.propertyName)  //transorm

    // console.log(this)  //the key element uh press.
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
//run this in console => document.querySelectorAll('.key');  //output array of all the keys in it.

//for each in used to listen transitionend on each one.
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

