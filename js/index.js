const formul = document.getElementById("section2");

const button = document.getElementById('container');
const playvideo = document.getElementById("playBtn");
const bg = document.querySelector("#div-1");
playvideo.addEventListener("click",showVideo)
function showVideo(e){
    if(bg.style.display!="none"){


        bg.style.display ="none";
        formul.style.display="flex";
        button.style="";
        playvideo.innerHTML = "WATCH TRAILER";
    }else{
        bg.style.display ="flex";
        formul.style.display="none";
        button.style="flex";
        playvideo.innerHTML = "PLAY NOW";
    }


console.log(e);

}