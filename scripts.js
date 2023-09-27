

function initialize(){
     button = document.getElementById("canthandlespice");
     text1 = document.getElementById("p1");
     text2 = document.getElementById("p2");
     total = document.getElementById("p3");


    button.addEventListener("click", rollDice);
    console.log("Hello World");
    
}


function rollDice(){
    
    const roll1 = Math.round( Math.random() * 5 + 1);
    const roll2 = Math.round( Math.random() * 5 + 1);
    const totalRoll = roll1 + roll2;
    text1.textContent= 'Roll 1: ' + roll1;
    text2.textContent= 'Roll 2: ' + roll2;
    total.textContent= 'Total: ' + totalRoll;
}