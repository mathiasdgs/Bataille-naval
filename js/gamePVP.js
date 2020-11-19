
let numberDiv, divCreate, allShips, allShipsDiv,
ship0,ship1,ship2,ship3,ship4, logs, s0, s1,s2,s3,s4, userHit, opponent,
shipIA0,shipIA1,shipIA2,shipIA3,shipIA4, numberShipIa, allowHit, playToRound,
round, score;
let victory = "PVP";
score = 0;
numberDiv = 200;
divCreate = [];
divEnnemy =[];
let userOnLobby;
allShipsDiv = document.getElementById('allShipsDiv');
secondPlayer = document.getElementById('secondPlayer');
ship0 = document.getElementById('ship0'),
ship1 = document.getElementById('ship1'),
ship2 = document.getElementById('ship2'),
ship3 = document.getElementById('ship3'),
ship4 = document.getElementById('ship4');
s0 = document.getElementById('s0'),s1 = document.getElementById('s1'),
s2 = document.getElementById('s2'),s3 = document.getElementById('s3'),
s4 = document.getElementById('s4');
playToRound = document.getElementById('allowHit');
allowHit = false;
let possibility=[];
numberShipIa = 5;
shipIA =[];
let splitV = ",";
let splitP = ".";
let shipU0 = ship0.innerText.split(splitV),shipU1 = ship1.innerText.split(splitV),
shipU2 = ship2.innerText.split(splitV),shipU3 = ship3.innerText.split(splitV),
shipU4 = ship4.innerText.split(splitV);
userHit = document.querySelector('#userHit');
opponent = document.querySelector('#opponent');
round = 0;



logs = document.getElementById('logs')

win =()=>{
    if(score == 17){
        alert('GG')
        xmlEp();
        window.location = 'Scoreboard.html';

      }
}

play=()=>{
    console.log('okok game-sReady')
    allowHit = true;
    playToRound.removeEventListener('clisk',play)
    playToRound.innerHTML = `Round : ${round}`
}
playToRound.addEventListener('click',play)


verification=()=>{

    if (document.querySelectorAll('.userOnLobby').length == 2){
        clearInterval(interV);
        userOnLobby = document.querySelectorAll('.userOnLobby');
        createMap();
    } else{
        clearInterval(interV);
        alert('please wait for an other player');
        window.location = 'lobby1.php';
    }
    
}

    let interV = setInterval(verification,1000);
   
// replaceStyle=(e)=>{
// // console.log(e.target);
// e.target.classList.replace(e.target.className, "Target")
// }
// reReplaceStyle=(e)=>{
//     // console.log(e);
//     e.target.classList.replace(e.target.className, "noTarget")
//     }


tryHit=(e)=>{
    if(allowHit){
        console.log(e.target.getAttribute('name'));
        e.target.removeEventListener('click',tryHit);
        e.target.classList.add('miss');
        const addToSelect = document.createElement('option');
        addToSelect.innerText= e.target.getAttribute('name');
        userHit.append(addToSelect);
        var myAudio = new Audio('mp3/splash.mp3');
        myAudio.play();
        randomIa();

    }else{
        alert('please press play')
    }


}

createMap=()=>{
    
allShips = document.getElementById('allShips');
    console.log(userOnLobby[0]);
    console.log(allShips);
    for(let i=100;i<numberDiv;i++){
        divCreate[i] = document.createElement('div'),
        divEnnemy[i] = document.createElement('div'),
        divEnnemy[i].addEventListener('click',tryHit)
        divCreate[i].id = i,
        divEnnemy[i].id = `e${i}`,
        divCreate[i].classList.add('box'),
        divEnnemy[i].classList.add('noTarget'),
        divEnnemy[i].setAttribute("name", i);
        
        if(ship0.innerText.includes(i)){
            divCreate[i].className = "ship0";
        } if(ship1.innerText.includes(i)){
            divCreate[i].className = "ship1";
        } if(ship2.innerText.includes(i)){
            divCreate[i].className = "ship2";
        } if(ship3.innerText.includes(i)){
            divCreate[i].className = "ship3";
        } if(ship4.innerText.includes(i)){
            divCreate[i].className = "ship4";
        }
        
        allShipsDiv.append(divCreate[i]),
        secondPlayer.append(divEnnemy[i]);
        // secondPlayer.addEventListener('mouseover',replaceStyle);
        // secondPlayer.addEventListener('mouseout',reReplaceStyle);
    }

}
getRandomInt=(max)=> {
    return Math.floor(Math.random() * Math.floor(max));
  }
  verif=()=>{

      if(s0.childElementCount==0 &&s1.childElementCount==0&& 
        s2.childElementCount==0 && s3.childElementCount==0 
        && s4.childElementCount==0){
            logs.innerHTML ='YOULOSE';
        }
    if(s0.childElementCount==0){s0.innerText ="ship0 sunk !"}
    if(s1.childElementCount==0){s1.innerText ="ship1 sunk !"}
    if(s2.childElementCount==0){s2.innerText ="ship2 sunk !"}
    if(s3.childElementCount==0){s3.innerText ="ship3 sunk !"}
    if(s4.childElementCount==0){s4.innerText ="ship4 sunk !"}

  }

