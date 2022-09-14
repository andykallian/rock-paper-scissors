blueElement = document.querySelector(".blue");
yellowElement = document.querySelector(".yellow");
redeElement = document.querySelector(".red");
number = document.querySelector('.number');
result = document.querySelector('.result')

selection = document.querySelectorAll(".img-container");
reset = document.querySelector('.reset');

playAgain = document.querySelector('.play-again');

let options = [1,2,3]
let score = 0;
let machineRandon;

let rock;
let scissors;
let paper;

let user;
let machine;

number.innerHTML = 0;

function updateScore(){
  if(user > machine){
    score++;
    result.innerHTML = 'YOU WIN';
  }else if(user < machine){
    result.innerHTML = 'YOU LOSE';
    score--;
  }
  number.innerHTML = score;
}


selection.forEach((element, index) => {  
    selection[index].addEventListener("click", function choice(){
      if(element.classList.contains('red')){
        user = 'rock';
        element.classList.add('user-choice')
        machineRandon = Math.floor(Math.random()*options.length+1)
        document.querySelector('.images-container').classList.add('row-reverse')
      }else if(element.classList.contains('yellow')){
        user = 'scissors';
        element.classList.add('user-choice')
        machineRandon = Math.floor(Math.random()*options.length+1)
      }else if(element.classList.contains('blue')){
        user = 'paper'
        element.classList.add('user-choice')
        machineRandon = Math.floor(Math.random()*options.length+1)
      }
  
      if(user !== undefined){
        switch(user){
          case 'rock':{
            rock = 2;
            paper = 3;
            scissors = 1;
            user = rock;
            blueElement.classList.add('hidden');
            yellowElement.classList.add('hidden');
            redeElement.style.boxShadow = "2px 0px 42px 15px rgba(0,0,0,0.42)"
            yellowElement.style.boxShadow = "none"
            blueElement.style.boxShadow = "none"
            break
          }
          case 'paper':{
            rock = 1;
            paper = 2;
            scissors = 3;
            user = paper;
            redeElement.classList.add('hidden');
            yellowElement.classList.add('hidden');
            blueElement.style.boxShadow = "2px 0px 42px 15px rgba(0,0,0,0.42)"
            redeElement.style.boxShadow = "none"
            yellowElement.style.boxShadow = "none"
            break
          }
          case "scissors":{
            rock = 3;
            paper = 1;
            scissors = 2;
            user = scissors;
            redeElement.classList.add('hidden');
            blueElement.classList.add('hidden');
            yellowElement.style.boxShadow = "2px 0px 42px 15px rgba(0,0,0,0.42)"
            redeElement.style.boxShadow = "none"
            blueElement.style.boxShadow = "none"
            break
          }
        }
      }

      do{
        switch(machineRandon){
          case 1:
            machine = 1
            break;
          case 2:
            machine = 2
            break;
          case 3:
            machine = 3
            break;
        }

        machine === user ? 
        machine = Math.floor(Math.random()*options.length+1) : 
        machine = machine
        

      }while(machine === user)

   
      if(machine === rock){
        redeElement.style.display = "flex";
        redeElement.classList.add('machine-choice')
        redeElement.classList.remove('hidden');
        document.querySelector('.images-container').classList.add("align-container")
      }else if(machine === paper){
        blueElement.style.display = "flex";
        blueElement.classList.add('machine-choice')
        blueElement.classList.remove('hidden');
        document.querySelector('.images-container').classList.add('align-container')
      }else if(machine === scissors){
        yellowElement.style.display = "flex";
        yellowElement.classList.add('machine-choice')
        yellowElement.classList.remove('hidden');
        document.querySelector('.images-container').classList.add('align-container')
      }

      playAgain.classList.remove('hide')
      blueElement.classList.add('not-clickable')
      redeElement.classList.add('not-clickable')
      yellowElement.classList.add('not-clickable')

      updateScore(score)

    })
});


reset.addEventListener("click", () =>{

  let classes = ['user-choice', 'machine-choice', 'hidden', 'not-clickable']

  blueElement.classList.remove(...classes);
  redeElement.classList.remove(...classes);
  yellowElement.classList.remove(...classes);

  playAgain.classList.add('hide')

})
