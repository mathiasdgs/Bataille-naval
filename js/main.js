function getMessages() {

    const requeteAjax = new XMLHttpRequest();
    requeteAjax.open("GET", "chat.php");


    requeteAjax.onload = function () {
        const resultat = JSON.parse(requeteAjax.responseText);
        const html = resultat.reverse().map(function (message) {
            return `
          <div class="message">
            <span class="date">${message.created_at}</span>
            <span class="author">${message.author}</span> : 
            <span class="content">${message.content}</span>
          </div>
        `
        }).join('');

        const messages = document.querySelector('.messages');

        messages.innerHTML = html;
        messages.scrollTop = messages.scrollHeight;
    }

    requeteAjax.send();
}


function postMessage(event) {
    event.preventDefault();

    const author = document.querySelector('#author');
    const content = document.querySelector('#content');

        const data = new FormData();
        data.append('author', author.value);
        data.append('content', content.value);
    
        const requeteAjax = new XMLHttpRequest();
        requeteAjax.open('POST', 'chat.php?task=write');
    
        requeteAjax.onload = function () {
            content.value = '';
            content.focus();
            getMessages();
            window.location='game.php';
        }
    
        requeteAjax.send(data);




    

}
document.querySelector('form').addEventListener('submit', postMessage);
const interval = window.setInterval(getMessages, 300);
getMessages();

var audio = document.getElementById("audioDiv");

function playAudio() {
    audio.play();
};

//document.querySelector('body')
window.addEventListener('mousemove', playAudio);

document.getElementById("speakerOn").onclick = function() {
    document.getElementById("speakerOff").classList.remove("none");
    document.getElementById("speakerOn").classList.add("none");


}
document.getElementById("speakerOff").onclick = function() {

    document.getElementById("speakerOff").classList.add("none");
    document.getElementById("speakerOn").classList.remove("none");

}

document.getElementById("speakerOn").addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);

document.getElementById("speakerOff").addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, true);