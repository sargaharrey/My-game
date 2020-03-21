const stone = document.querySelector('.stone');
var papper = document.querySelector('.papper');
var scissor = document.querySelector('.scissor');
var computer = document.getElementById('computer');
var firstScreen = document.getElementById('one'); 
var secoundScreen = document.getElementById('two');
var thirdScreen = document.getElementById('three');

var score = 0;
var winScore = 0;
var loseScore = 0;
//To choose one and hide oithers

stone.onclick = function () {

    papper.style.display = 'none';
    scissor.style.display = 'none';
    stone.classList.add('Active');
    return apper();
    
    
   

};
papper.onclick = function () {

    stone.style.display = 'none';
    scissor.style.display = 'none';
     papper.classList.add('Active');
    return apper();

};
scissor.onclick = function () {

    stone.style.display = 'none';
    papper.style.display = 'none';
    scissor.classList.add('Active');
    return apper();
};


// computer random
function apper(){
    Array = [stone.innerHTML, papper.innerHTML, scissor.innerHTML]
    var random = Array[Math.floor(Math.random() * Array.length)]
    computer.innerHTML = random;
    computer.style.display ="inline-bLock";
    computer.style.marginLeft = '300' + 'px'
    computer.classList.add('style')
    if(random == Array[0]){
     if(stone.classList.contains('Active')){
         firstScreen.innerText = score++;
         secoundScreen.innerText = null;
         thirdScreen.innerText = null;
      }

     else if (papper.classList.contains('Active')){
         secoundScreen.innerText = score++;
          firstScreen.innerText = null;
          thirdScreen.innerText = null;
      }
       else if (scissor.classList.contains('Active')){
         thirdScreen.innerText = score++;
          firstScreen.innerText = null;
          secoundScreen.innerText = null;
      }   
    }
    else if(random == Array[1])  {
        if (stone.classList.contains('Active')) {
            firstScreen.innerText = null;
            secoundScreen.innerText = null;
            thirdScreen.innerText = score++;
        }

        else if (papper.classList.contains('Active')) {
            secoundScreen.innerText = null;
            firstScreen.innerText = score++;
            thirdScreen.innerText = null;
        }
        else if (scissor.classList.contains('Active')) {
            thirdScreen.innerText = null;
            firstScreen.innerText = null;
            secoundScreen.innerText = score++;
        }   
    }      
    else if (random == Array[2]) {
        if (stone.classList.contains('Active')) {
            firstScreen.innerText = null;
            secoundScreen.innerText = score++;
            thirdScreen.innerText = null;
        }

        else if (papper.classList.contains('Active')) {
            secoundScreen.innerText = null;
            firstScreen.innerText = null;
            thirdScreen.innerText = score++;
        }
        else if (scissor.classList.contains('Active')) {
            firstScreen.innerText = score++;
            secoundScreen.innerText = null;
            thirdScreen.innerText = null;
        }
    }      
}
