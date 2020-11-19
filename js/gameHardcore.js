
let numberDiv, divCreate, allShips, allShipsDiv,
ship0,ship1,ship2,ship3,ship4, logs, s0, s1,s2,s3,s4, userHit, opponent,
shipIA0,shipIA1,shipIA2,shipIA3,shipIA4, numberShipIa, allowHit, playToRound,
round, score;
let victory = "Hardcore";
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
    playToRound.removeEventListener('click',play)
    playToRound.innerHTML = `Round : ${round}`
}
playToRound.addEventListener('click',play)


verification=()=>{

    if (document.querySelectorAll('.userOnLobby').length == 2){
        clearInterval(interV);
        userOnLobby = document.querySelectorAll('.userOnLobby');
        createMap();
    } 
    else{
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

randomIa=()=>{

    round++;
    playToRound.innerHTML = `Round : ${round}`;
    // console.log(getRandomInt(possibility.length));
    let random = getRandomInt(possibility.length);
    const hit = document.getElementById(possibility[random]).id;
    // console.log(random)
    console.log(hit)
    const addToSelect = document.createElement('option');
addToSelect.innerText= hit;
opponent.append(addToSelect);

    // document.getElementById(possibility[random]).innerText = 'w'
    // document.getElementById(possibility[random]).classList.add('miss');
    if(document.getElementById(possibility[random]).className == "ship0"){
        console.log(`IA hit ${document.getElementById(possibility[random]).className}`)
        // document.getElementById(possibility[random]).innerText = 'x';
        document.getElementById(possibility[random]).classList.add('boom');
        var myAudio = new Audio('mp3/xplo.mp3');
        myAudio.play();
        for(let i=0;i<s0.children.length;i++){
            if(s0.children[i].innerText.includes(hit)){
                s0.children[i].remove()
            }
        }
    }    if(document.getElementById(possibility[random]).className == "ship1"){
        console.log(`IA hit ${document.getElementById(possibility[random]).className}`)
        // document.getElementById(possibility[random]).innerText = 'x';
        document.getElementById(possibility[random]).classList.add('boom');
        var myAudio = new Audio('mp3/xplo.mp3');
        myAudio.play();
        for(let i=0;i<s1.children.length;i++){
            if(s1.children[i].innerText.includes(hit)){
                s1.children[i].remove()
            }
        }
    }    if(document.getElementById(possibility[random]).className == "ship2"){
        console.log(`IA hit ${document.getElementById(possibility[random]).className}`)
        // document.getElementById(possibility[random]).innerText = 'x';
        document.getElementById(possibility[random]).classList.add('boom');
        var myAudio = new Audio('mp3/xplo.mp3');
        myAudio.play();
        for(let i=0;i<s2.children.length;i++){
            if(s2.children[i].innerText.includes(hit)){
                s2.children[i].remove()
            }
        }
    }    if(document.getElementById(possibility[random]).className == "ship3"){
        console.log(`IA hit ${document.getElementById(possibility[random]).className}`)
        // document.getElementById(possibility[random]).innerText = 'x';
        document.getElementById(possibility[random]).classList.add('boom');
        var myAudio = new Audio('mp3/xplo.mp3');
        myAudio.play();
        for(let i=0;i<s3.children.length;i++){
            if(s3.children[i].innerText.includes(hit)){
                s3.children[i].remove()
            }
        }
    }    if(document.getElementById(possibility[random]).className == "ship4"){
        console.log(`IA hit ${document.getElementById(possibility[random]).className}`)
        // document.getElementById(possibility[random]).innerText = 'x';
        document.getElementById(possibility[random]).classList.add('boom');
        var myAudio = new Audio('mp3/xplo.mp3');
        myAudio.play();
        for(let i=0;i<s4.children.length;i++){
            if(s4.children[i].innerText.includes(hit)){
                s4.children[i].remove()
            }
        }
        
    }else {
        document.getElementById(possibility[random]).classList.add('miss');
    }
    possibility.splice(random,1);
    verif();


}
for(let i=0;i<100;i++){
    possibility.push(i+100)
    // console.log(i)
    }
    shipU0.forEach(shipU0 => {
        s0li = document.createElement('li');
        s0li.innerText = shipU0
        s0li.id = `s0c${s0.children.length}`;
        s0.append(s0li);
    });
    shipU1.forEach(shipU1 => {
        s1li = document.createElement('li');
        s1li.innerText = shipU1
        s1li.id = `s1c${s1.children.length}`;
        s1.append(s1li);
    });
    shipU2.forEach(shipU2 => {
        s2li = document.createElement('li');
        s2li.innerText = shipU2
        s2li.id = `s2c${s2.children.length}`;
        s2.append(s2li);
    });
    shipU3.forEach(shipU3 => {
        s3li = document.createElement('li');
        s3li.innerText = shipU3
        s3li.id = `s3c${s3.children.length}`;
        s3.append(s3li);
    });
    shipU4.forEach(shipU4 => {
        s4li = document.createElement('li');
        s4li.innerText = shipU4
        s4li.id = `s4c${s4.children.length}`;
        s4.append(s4li);
    });

    const verticalIa = [1,10];
    const allShipIa = [];




    for(let i=0;i<numberShipIa;i++){
        shipIA.push( Object ({
            name: "shipIa" + i,
            debut : NaN,
            size: NaN,
            decalage:verticalIa[getRandomInt(verticalIa.length)],
            final:[],
            placement : function(){       
                this.final.splice(0,this.final.length)
                this.debut = getRandomInt(100)+100;
                if(this.decalage == 1){
                    let x = parseInt(this.debut.toString()[2]);
                    let y = x + this.size + this.decalage;
                    // console.log(y)
                    if(y<10){
                        for(let i=0;i<this.size;i++){
                            this.final.push(this.debut+(this.decalage*i))
                            if(possibilityIa.includes(this.debut+(this.decalage*i))){
                                let removFromArray = possibilityIa.indexOf(this.debut+(this.decalage*i))
                                console.log(possibilityIa[removFromArray]);
                                possibilityIa.splice(removFromArray,1);
                            } else{
                                console.log('horizontal not good ')
                                return this.placement();
                            }
                        }
                        console.log(this.final)
                    } else{
                       
                        this.placement();
                    }
                    // console.log(`x : ${x} y : ${y}`)
                } if(this.decalage == 10){
                    let z = this.debut+(this.size *this.decalage)
                    let zT = parseInt(z.toString()[0])
                    // console.log(zT)
                    if(zT<2){
                        for(let i=0;i<this.size;i++){
                            this.final.push(this.debut+(this.decalage*i))
                            if(possibilityIa.includes(this.debut+(this.decalage*i))){
                            let removFromArray = possibilityIa.indexOf(this.debut+(this.decalage*i))
                            console.log(possibilityIa[removFromArray]);
                            possibilityIa.splice(removFromArray,1);
                            } else{
                                console.log('vertical not good ')
                                return this.placement();
                            }
                        }
                        console.log(this.final)
                       
                    }
                    else{
                        this.placement();
                    }}}}))
    }
    shipIA[0].size = 2, shipIA[1].size = 3, shipIA[2].size = 3,
    shipIA[3].size = 4,shipIA[4].size = 5
    UltimV =()=>{
        shipIA[4].placement();
        shipIA[3].placement();
        shipIA[2].placement();
        shipIA[1].placement();
        shipIA[0].placement();
        setTimeout(placeIa,500)
    }
    possibilityIa =[];
    for(let i=0;i<100;i++){
        possibilityIa.push(i+100)
    }
    setTimeout(UltimV,1500);
    shipIA0 =[],shipIA1 =[],shipIA2 =[],shipIA3 =[],shipIA4 =[];
let toReplace=[];
replaceClass=()=> {
    for(let i=0;i<toReplace.length;i++){
    toReplace[i].className='debris'
    // console.log(toReplace);
    }

}
    hit=(e)=>{
        if(allowHit) {
        console.log(e.target)
        console.log(e.target.getAttribute('ship'))
        const replaceStyle = e.target.getAttribute('ship')
        e.target.removeEventListener('click',hit)
        e.target.className = replaceStyle;
        // e.target.innerText = 'y'
        e.target.classList.add('boom')
        score++;
        toReplace.push(e.target)
        setTimeout(replaceClass,2000);
        var myAudio = new Audio('mp3/xplo2.mp3');
        myAudio.play();
        } else {
            console.log('NO ! GOD NO !!');
        }


    }

    placeIa =()=>{
        for(let i=0;i<shipIA[4].final.length;i++){
            // console.log(document.getElementsByName(shipIA[4].final[i]))
            let toAssign = document.getElementById(`e${shipIA[4].final[i]}`)
            // console.log(toAssign)
            toAssign.addEventListener('click',hit)
            toAssign.setAttribute('ship',`shipIA4 ${i}`)
            // document.getElementsByName(shipIA[4].final[i]).setAttribute('ship4', i)
            shipIA4.push(shipIA[4].final[i])

        }
        for(let i=0;i<shipIA[3].final.length;i++){
            // console.log(document.getElementsByName(shipIA[3].final[i]))
            let toAssign = document.getElementById(`e${shipIA[3].final[i]}`)
            // console.log(toAssign)
            toAssign.addEventListener('click',hit)
            toAssign.setAttribute('ship',`shipIA3 ${i}`)
            // document.getElementsByName(shipIA[4].final[i]).setAttribute('ship3', i)
            shipIA3.push(shipIA[3].final[i])
        }
        for(let i=0;i<shipIA[2].final.length;i++){
            // console.log(document.getElementsByName(shipIA[2].final[i]))
            let toAssign = document.getElementById(`e${shipIA[2].final[i]}`)
            // console.log(toAssign)
            toAssign.addEventListener('click',hit)
            toAssign.setAttribute('ship',`shipIA2 ${i}`)
            // toAssign.setAttribute('ship2', i)
            // document.getElementsByName(shipIA[4].final[i]).addEventListener('click',hit)
            shipIA2.push(shipIA[2].final[i])

        }
        for(let i=0;i<shipIA[1].final.length;i++){
            // console.log(document.getElementsByName(shipIA[1].final[i]))
            let toAssign = document.getElementById(`e${shipIA[1].final[i]}`)
            // console.log(toAssign)
            toAssign.addEventListener('click',hit)
            toAssign.setAttribute('ship',`shipIA1 ${i}`)
            // document.getElementsByName(shipIA[4].final[i]).setAttribute('ship1', i)
            shipIA1.push(shipIA[1].final[i])
        }
        for(let i=0;i<shipIA[0].final.length;i++){
            // console.log(document.getElementsByName(shipIA[0].final[i]))
            let toAssign = document.getElementById(`e${shipIA[0].final[i]}`)
            // console.log(toAssign)
            toAssign.addEventListener('click',hit)
            toAssign.setAttribute('ship',`shipIA0 ${i}`)
            // document.getElementsByName(shipIA[4].final[i]).setAttribute('ship0', i)
            shipIA0.push(shipIA[0].final[i])
        }
    }
    const paramPost = ['POST', 'data.php'];

    let optionSend = [];
    let optionSendOther = [];
  let user = document.getElementById('username').innerText;

    function xmlEp(){
        for(let i=0;i<userHit.children.length;i++){
    optionSend.push(userHit.children[i].innerText)
}
for(let i=0;i<opponent.children.length;i++){
    optionSendOther.push(opponent.children[i].innerText)
}



        const data = new FormData();
        data.append("username", user);
        data.append("hit",optionSend);
        data.append("otherhit",optionSendOther);
        data.append('victory', victory);

        const xhr = new XMLHttpRequest();
        xhr.open(paramPost[0],`${paramPost[1]}?task=victory`)
        xhr.send(data)
        getAjax();
}

function getAjax() {

    const requeteAjax = new XMLHttpRequest();
    requeteAjax.open("GET", "data.php");


    requeteAjax.onload = function () {
        const resultat = requeteAjax.responseText;
        console.log(resultat)
    }

    requeteAjax.send();
}
    setInterval(win,1100);
    


