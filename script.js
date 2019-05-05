let click2 = document.querySelector('#click2')

let LB1 = document.querySelector('#LB1');
let LB2 = document.querySelector('#LB2');
let LB3 = document.querySelector('#LB3');
let LB4 = document.querySelector('#LB4');
let LB5 = document.querySelector('#LB5');
let LB6 = document.querySelector('#LB6');

let switch1 = document.querySelector('#switch1');
let switch2 = document.querySelector('#switch2');
let switch3 = document.querySelector('#switch3');
let switch4 = document.querySelector('#switch4');
let switch5 = document.querySelector('#switch5');
let switch6 = document.querySelector('#switch6');

let Bulbs = document.querySelector('.Bulbs');

let ON = document.querySelector('.ON');

let winner = document.querySelector('.winner');

/*function changeState() {
    
}*/

function checkWin(){
    if (LB1.classList.contains('ON') & LB2.classList.contains('ON') & LB3.classList.contains('ON') & LB4.classList.contains('ON') & LB5.classList.contains('ON') & LB6.classList.contains('ON')){
        winner.innerHTML=`<h1 class="col s12 center-align">WINNER!!!</h1> </br> <img src="imagination.gif" class="col s12 center-align">`
    }
}

switch1.addEventListener('click', e=>{
    click2.play();
    LB1.classList.toggle('ON');
    LB3.classList.toggle('ON');
    checkWin();
});

switch2.addEventListener('click', e=>{
    click2.play();
    LB2.classList.toggle('ON');
    LB5.classList.toggle('ON');
    checkWin();
});

switch3.addEventListener('click', e=>{
    click2.play();
    LB6.classList.toggle('ON');
    LB4.classList.toggle('ON');
    checkWin();
});

switch4.addEventListener('click', e=>{
    click2.play();
    LB3.classList.toggle('ON');
    LB5.classList.toggle('ON');
    checkWin();
});

switch5.addEventListener('click', e=>{
    click2.play();
    LB2.classList.toggle('ON');
    LB6.classList.toggle('ON');
    checkWin();
});


switch6.addEventListener('click', e=>{
    click2.play();
    LB1.classList.toggle('ON');
    LB4.classList.toggle('ON');
    checkWin();
});














/*ON.innerHTML=`<img src="LBon.PNG" class="Bulbs"></img>`*/