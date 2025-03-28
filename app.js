let gameseq =[];
let userseq=[];
btns =["yellow","red","blue","green"]
 let started = false;
 let level = 0;
 h2=document.querySelector("h3");
 body=document.querySelector("body")
 document.addEventListener("keypress",function(){
    if(!started){
    console.log("game startred");
    started=true;
    levelUp()
 }});
 function levelUp(){
    userseq=[];
    level++;
    h2.innerText= `level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let btnColor= btns[randIdx];
let randbtn = document.querySelector(`.${btnColor}`);
flash(randbtn);
// console.log(randIdx);
// console.log(btnColor);
// console.log(randbtn);

gameseq.push(btnColor);
console.log(gameseq)

 }

function flash (b){
b.classList.add("flash");
setTimeout(function(){
    b.classList.remove("flash");
},250)
}

function userFlash (b){
    b.classList.add("userFlash");
    setTimeout(function(){
        b.classList.remove("userFlash");
    },250)
    }
    function checkBtn(idx){
        
        if (userseq[idx]===gameseq[idx]){
            if(userseq.length == gameseq.length){
               setTimeout(  levelUp,350);
            }
        }else{
            h2.innerHTML= `game over ! your score was <b>${level} </b> <br> press any key to start`;
            reset();
            body.classList.add("redbg");
            setTimeout(function (){
                document.querySelector("body").classList.remove("redbg"),250
            })
    }
}
  function redbg(b){
    b.classList.remove("redbg")
  }
function btnPress (){
    let btn = this;
    userFlash(btn);
    
    let userColor =btn.getAttribute("id");
    
    userseq.push(userColor);
    
    checkBtn(userseq.length-1)
}
let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}