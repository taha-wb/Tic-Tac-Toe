const boxes = document.querySelectorAll(".box");
const popUp = document.querySelector(".popUp");
const popUp_text = document.querySelector(".text");
const playButton = document.querySelector(".playAgain-button");
let current = 'x' ;
const combinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
]



start_game();

function start_game(){
  boxes.forEach(box => {
    box.addEventListener('click' , addEvents, {once : true});
  })
 
  
 
}


function addEvents(e){
  if(current == "x"){
    e.target.classList.add("circle");
    current = "circle";
   
  }
  else{
    e.target.classList.add("x");
    current = "x";
   
  }


  
  check_win();
  check_draw();

  if(check_win()){
    popUp.style.display = "flex";
    popUp_text.textContent = current + ' has won !' ;
    
    }
    else if(check_draw()){
      popUp.style.display = "flex";
      popUp_text.textContent = ' it\'s a draw !' ;
      
      }

      
  }
    
  



function check_win(){
 return combinations.some(combination => combination.every(index => boxes[index].classList.contains(current))) 
 
}


playButton.addEventListener("click" , clear);

function clear(){
  
  popUp.style.display = "none";
  popUp_text.textContent = '' ;

  boxes.forEach(box => {
   
   if(box.classList[1] == 'x' ){
    box.classList.remove('x');
   }
   if(box.classList[1] == 'circle'){
     box.classList.remove('circle');
   }

  })

  start_game();
}


function check_draw(){
  return [...boxes].every(box => box.classList.contains("x") || box.classList.contains("circle"));
}