let timerNow, numberDiv, previewUser, divCreate, allShips;
let timerSessionCreate = document.querySelector('#timer');
timerSessionCreate.style.display ="none";
let timerSessionRefresh =(parseInt(timerSessionCreate.innerHTML));
console.log(timerSessionRefresh);
numberDiv = 200;
divCreate = [];

getTime =()=>{

  timerNow  = Math.floor(Date.now()/1000);

  if((timerNow-3000)<timerSessionRefresh){

  }else{
    window.location = 'deco.php';

  }


}
setInterval(getTime, 1000);


if(document.getElementById("previewUser")){
  previewUser = document.getElementById("previewUser");
  allShips = document.getElementById('allShips').innerText;

for(let i =100; i<numberDiv;i++){

    divCreate[i] = document.createElement("div");
    divCreate[i].id = i;
    divCreate[i].classList.add("box");
    previewUser.append(divCreate[i]);
    if(allShips.includes(i)){
      divCreate[i].className = 'box2';
    }
}




} else{
  console.log('please defined your ships')
}
