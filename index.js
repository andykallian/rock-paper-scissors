blueElement = document.querySelector(".blue");
yellowElement = document.querySelector(".yellow");
redeElement = document.querySelector(".red");

selection = document.querySelectorAll(".img-container");

let options = [1,2,3]
let machineRandon;

let rock;
let scissors;
let paper;

let user;
let machine;


selection.forEach((element, index) => {  
    selection[index].addEventListener("click", function(){
      if(element.classList.contains('red')){
        user = 'rock';
        machineRandon = Math.floor(Math.random()*options.length+1)
      }else if(element.classList.contains('yellow')){
        user = 'scissors';
        machineRandon = Math.floor(Math.random()*options.length+1)
      }else if(element.classList.contains('blue')){
        user = 'paper'
        machineRandon = Math.floor(Math.random()*options.length+1)
      }
  
      if(user !== undefined){
        switch(user){
          case 'rock':{
            rock = 2;
            paper = 3;
            scissors = 1;
            user = rock;
            blueElement.style.display = "none";
            yellowElement.style.display = "none";
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
            redeElement.style.display = "none";
            yellowElement.style.display = "none";
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
            redeElement.style.display = "none";
            blueElement.style.display = "none";
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
      }else if(machine === paper){
        blueElement.style.display = "flex";
      }else if(machine === scissors){
        yellowElement.style.display = "flex";
      }

    })
});











// let options = [1,2,3,4,5,6];


// let machineOption = Math.floor(Math.random()*options.length+1);
// let machine;



// switch(machineOption){
//   case 1:
//   case 2:{
//     machine = pedra
//     break
//   }
//   case 3:
//   case 4:{
//     machine = papel
//     break
//   }
//   case 5: 
//   case 6:{
//     machine = tesoura
//     break
//   }
// }

// console.log(`A escolha do usuário foi: ${usuario}`)
// console.log(`A escolha da maquina foi: ${machine}`)

// if(usuario > machine){
//   console.log('usuario ganhou')
// }else if(machine > usuario){
//   console.log('a maquina ganhou')
// }else{
//   console.log('empate')
// }



