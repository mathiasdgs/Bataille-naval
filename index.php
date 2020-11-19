<?php
require('db.php');
session_destroy();

if(isset($_POST['name'])AND !empty($_POST['name']) AND isset($_POST['password']) AND !empty($_POST['password'])){
    $name = $_POST['name'];
    $password = $_POST['password'];

    
    $req = $dbh->prepare('SELECT * FROM users WHERE name = ? AND password = ?');
    $req->execute(array($_POST['name'], md5($_POST['password'])));
    if ($row = $req->fetch(PDO::FETCH_ASSOC)) {
       session_start();
       $_SESSION['name'] = $name;
       $_SESSION['lastmoveSess'] = time();

       header('Location: game.php');

    }
    else{
        echo 'bru, you are not going anywhere ...';
    }

}


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="favicon.ico" />
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;600;700&display=swap" rel="stylesheet">
    <?=$cssStyle;?>
    <title>PlayMyGameOrDie</title>
</head>

<body>

<section class="section" id="section2">

<div id="div-2">
    <img src="img/warship4.jpg" id="imgbkg">
    <form id="formulaire" method="POST" action="index.php">
        <input type="text" id="pseudo" class="form-control" placeholder="Nickname" name="name" required />
        <input type="password" id="mdp" class="form-control" placeholder="Password" name="password" required />
        <input type="submit" id="btnsub" value="LOGIN/REGISTER">
    </form>

</div>
</section>


<div id="div-1">
<video autoplay muted loop class="mp4">
    <source src="mp4/WARSHIP.mp4" type="video/mp4">
</video>
</div>
<div id="container">
<h1>BATTLESHIP</h1>

<div id="playBtn">PLAY NOW</div>
<img src="img/speakerOff.png" id="speakerOff" class="none" >
<img src="img/speaker.png" id="speakerOn" class="none">

</div>
</section>
<audio id="audioDiv" controls="false" autoplay="autoplay" loop preload="auto">
  <source src="mp3/bs.mp3" type="audio/mp3">

</audio>
<script src="js/audio.js"></script>
<script src="js/index.js"></script>
<script src="js/map.js"> </script>
</body>


</html>