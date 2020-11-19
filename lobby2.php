<?php 
require('db.php');
if(!empty($_SESSION['name'])){
  
    echo '<p id="username">'.$_SESSION['name'].'</p><a href="game.php">Go back ?</a></br>
    <div id="allowHit">PLAY</div>';
    
}
    else{
        header('Location: game.php');
    }



$name = $_SESSION['name'];
$timer = $_SESSION['lastmoveSess'];

$req = $dbh->prepare("UPDATE `users` SET `onsalon` = '1', `lastmove` = NOW() WHERE`users`.`name` = '$name'");


$req->execute();




$response = $dbh->query('SELECT * FROM users WHERE onsalon = 1');

while ($donnees = $response->fetch())
{ 
    echo '<div class="userOnLobby"><p id="'.htmlspecialchars($donnees['name']).'">'.$donnees['object'].'</p></div>';
}
$response->closeCursor();
echo '<p id="allShips">'.$_SESSION['ships'].'</p><div id ="map"><div id="allShipsDiv"></div><div id="secondPlayer"></div></div>';
echo '<div id="'.$_SESSION['name'].'" hidden><p id="ship0">'.$_SESSION['ship0']. '</p><p id="ship1">'.$_SESSION['ship1']. '</p><p id="ship2">'.$_SESSION['ship2']. '</p>
<p id="ship3">'.$_SESSION['ship3']. '</p><p id="ship4">'.$_SESSION['ship4']. '</p></div><div id="logs">
<div id="shipList"><ul id="s0">ship0</ul><ul id="s1">ship1</ul><ul id="s2">ship2</ul><ul id="s3">ship3</ul><ul id="s4">ship4</ul></div><div id="history"><div id="usrLogs">You : </div><select id="userHit"></select><div id="iaLogs">IA : </div><select id="opponent"></select></div></div>';
echo '<script src="js/gameMedium.js" defer></script>';


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;600;700&display=swap" rel="stylesheet">    
    
    <link href="css/game.css" rel="stylesheet">
    <link rel="icon" href="favicon.ico" />
    <title>Lobby2-<?=$_SESSION['name']?></title>
</head>
<body>
    <video autoplay muted loop class="mp4">
    <source src="mp4/ocean_low.mp4"type="video/mp4">
    </video>
    <img src="img/speakerOff.png" id="speakerOff" class="none" >
    <img src="img/speaker.png" id="speakerOn" class="none">
    <audio id="audioDiv" controls="false" autoplay="autoplay" loop preload="auto">
    <source src="mp3/bs.mp3" type="audio/mp3">

    </audio>

    <script src="js/audio.js" defer></script>

</body>
</html>