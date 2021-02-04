document.addEventListener('DOMContentLoaded',()=>{

    let squares= document.querySelectorAll('.square');

    squares.forEach((square)=>{
        square.addEventListener('click',handleClick)
    })
    
})
function handleClick(event){
   let square = event.target;
   let position = square.id 
   
   if(handleMove(position)){
       setTimeout(()=>{
        alert('o jogo acabou e o vencedor foi '+playerTime+' o simblo vencedor foi '+symbols[playerTime])
       },10)
        
    };
   updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol= board[position];
    square.innerHTML=`<div class='${symbol}'></div>`
}

let resetgame = document.getElementById('reset');
resetgame.addEventListener('click',reseta);



reseta()
updateSquares()
function updateSquares(){

    let squares = document.querySelectorAll('.square')

    squares.forEach((square)=>{
        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}