var timer = 60;
var score = 0;
var hitrn = 0;


function makeBubbles(){
    var clutter = "";

    for(var i=1; i<=161; i++){
       var rn =  Math.floor(Math.random()*10)
         clutter += ` <div class="bubble">${rn}</div>`;
    }
    document.querySelector("#bubblearea").innerHTML= clutter;
}

function runtimer(){
    var timeint = setInterval(function() {
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            document.querySelector("#bubblearea").innerHTML = `<h1> Game Over</h1>`;
            clearInterval(timerint)
        }
    }, 1000);
}


function hitbuuble(){
 hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitint").textContent = hitrn;
}

function scorecard(){
    score += 10;
   document.querySelector("#scoreval").textContent = score;

}

document.querySelector("#bubblearea").addEventListener("click" , function(details){
 var clickednum = (Number(details.target.textContent))
 if(clickednum === hitrn){
    scorecard();
    hitbuuble();
    makeBubbles();
    
 }
})

hitbuuble();
runtimer();
makeBubbles();




