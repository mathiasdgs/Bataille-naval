<?php
require('db.php');

$objetUser ='';
$name = $_SESSION['name'];
$timer = $_SESSION['lastmoveSess'];
$req = $dbh->prepare("UPDATE `users` SET `isconnect` = '1', `lastmove` = NOW() WHERE`users`.`name` = '$name'");


$req->execute();

$req2 = $dbh->prepare("UPDATE `users` SET `object` = '$objetUser',`ship0` = '',`ship1` = ''
,`ship2` = '',`ship3` = '',`ship4` = '', `lastmove` = NOW() WHERE`users`.`name` = '$name'");


$req2->execute();


if(!empty($_SESSION['name']) && !empty($_SESSION['lastmoveSess']) && $timer<time()+20){
  
  echo '<p id="username">'.$_SESSION['name'].'</p><p id="timer">'.$timer.'</p><div id="boxBtn"></div><a class="links" id="logOut" href="deco.php">LOG OUT</a>
  <a class="links" id="out" href="game.php">HOME</a></div>';

    
}
    else{
        header('Location: index.php');
    }


?>



<!DOCTYPE html>
<html lang="en">
<head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link type="text/css" href="css/createMap.css" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;600;700&display=swap" rel="stylesheet">
          <title>NewMap</title>

</head>
<body>
<video autoplay muted loop class="mp4">
   <source src="mp4/ocean_low.mp4"type="video/mp4">
</video>
          <div id="mapUser"></div>
          
          <div id="ships">
          <form action="NewMap.php" id="formShip" method="POST">
            <div  class="ships" id="d0">
              VERTICAL<input type="checkbox" id="shipBtn0"></input>
              
              <input id="inputShip0"name="inputShip0"required hidden></input>
              <span class="btnSelect" id="span0"> 1</span><span id="logShip0"></span>
            </div>
            <div class="ships" id="d1">
            VERTICAL<input type="checkbox" id="shipBtn1"></input>
              
              <input id="inputShip1"name="inputShip1"required hidden></input>
              <span class="btnSelect" id="span1"> 2</span><span id="logShip1"></span>
            </div>
            <div class="ships" id="d2">
              VERTICAL<input type="checkbox" id="shipBtn2"></input>
              
              <input id="inputShip2"name="inputShip2"required hidden></input>
              <span class="btnSelect" id="span2"> 3</span><span id="logShip2"></span>
            </div>
            <div class="ships" id="d3">
            VERTICAL<input type="checkbox" id="shipBtn3"></input>
              
              <input id="inputShip3"name="inputShip3"required hidden></input>
              <span class="btnSelect" id="span3"> 4</span><span id="logShip3"></span>
            </div>
            <div class="ships" id="d4">
            VERTICAL<input type="checkbox" id="shipBtn4"></input>
            
              <input id="inputShip4"name="inputShip4"required hidden></input>
              <span class="btnSelect" id="span4"> 5</span><span id="logShip4"></span>
            </div>
            <div id="submitMap">
            <input type="submit" value="OK" class="mapBtn">
            <input type="submit" value="CLEAR" class="mapBtn">
          </div>
          <span id="logs"></span>
          <span id="shipsValid"></span>

          </form>
          <?php 


if(!empty($_POST['inputShip0']) && !empty($_POST['inputShip1'])&&!empty($_POST['inputShip2'])&&!empty($_POST['inputShip3'])&&!empty($_POST['inputShip4'])){

$ship0 = $_POST['inputShip0'];
$ship1 = $_POST['inputShip1'];
$ship2 = $_POST['inputShip2'];
$ship3 = $_POST['inputShip3'];
$ship4 = $_POST['inputShip4'];

if(strlen($ship0)== 7 && strlen($ship1)== 11 && strlen($ship2)== 11 && strlen($ship3)== 15 && strlen($ship4)== 19){
     // replace with value of all  $_POST  -> objet on table users
     $objetUser =''. $ship0 .','. $ship1 .','. $ship2 .','. $ship3 .','. $ship4;
     $req = $dbh->prepare("UPDATE `users` SET `object` = '$objetUser',`ship0` = '$ship0',`ship1` = '$ship1'
     ,`ship2` = '$ship2',`ship3` = '$ship3',`ship4` = '$ship4', `lastmove` = NOW() WHERE`users`.`name` = '$name'");


     $req->execute();

     $_SESSION['ships']=$objetUser;
     $_SESSION['ship0'] = $ship0;
     $_SESSION['ship1'] = $ship1;
     $_SESSION['ship2'] = $ship2;
     $_SESSION['ship3'] = $ship3;
     $_SESSION['ship4'] = $ship4;


    header('Location: game.php');
} else{

    
    $_SESSION['ships']=$objetUser;
    $req = $dbh->prepare("UPDATE `users` SET `object` = '$objetUser',`ship0` = '',`ship1` = ''
    ,`ship2` = '',`ship3` = '',`ship4` = '', `lastmove` = NOW() WHERE`users`.`name` = '$name'");


    $req->execute();
    echo '<p> error length of ship</p>';
    header('Location: NewMap.php');
        // replace with empty string -> objet on table users


}

} else{
    echo '<p id="createLog">please define your battle map</p>';
    
}


?>
          </div>
          <img src="img/speakerOff.png" id="speakerOff" class="none" >
    <img src="img/speaker.png" id="speakerOn" class="none">
    <audio id="audioDiv" controls="false" autoplay="autoplay" loop preload="auto">
    <source src="mp3/bs.mp3" type="audio/mp3">

    </audio>

    <script src="js/audio.js" ></script>

          <script type="text/javascript" src="js/create.js" defer></script>
</body>

</html>