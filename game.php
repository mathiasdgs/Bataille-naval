<?php
require('db.php');


$name = $_SESSION['name'];
$timer = $_SESSION['lastmoveSess'];
$req = $dbh->prepare("UPDATE `users` SET `isconnect` = '1', `lastmove` = NOW() WHERE`users`.`name` = '$name'");


$req->execute();
$response = $dbh->query("SELECT * FROM `users` WHERE users.name = '$name'");
// VVVVVV database: usergame/ table: users
while ($donnees = $response->fetch())
{ // display data by important input in html        
    $_SESSION['ships'] = $donnees['object'];
    $_SESSION['ship0'] = $donnees['ship0'];
    $_SESSION['ship1'] = $donnees['ship1'];
    $_SESSION['ship2'] = $donnees['ship2'];
    $_SESSION['ship3'] = $donnees['ship3'];
    $_SESSION['ship4'] = $donnees['ship4'];
}
$response->closeCursor(); // close response




if(!empty($_SESSION['name']) && !empty($_SESSION['lastmoveSess']) && $timer<time()+20){
  
    echo '<p id="username">'.$_SESSION['name'].'</p><p id="timer">'.$timer.'</p><a href="deco.php" id="logOut">LOG OUT</a><p id="allShips">'.$_SESSION['ships'].'</p>';
    
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
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;600;700&display=swap" rel="stylesheet">    
    
    <?=$cssStyle;?>
    <link rel="icon" href="favicon.ico" />
    <title>PlayMyGameOrDie</title>
</head>
<body>
<section id="main">
    <div id="leftPanel">
        <div id="onlineUsers"> ONLINE :
        <?php
// Fetch all datas
$response = $dbh->query('SELECT * FROM users WHERE isconnect = 1');
// VVVVVV database: usergame/ table: users
while ($donnees = $response->fetch())
{ // display data by important input in html
    echo '<div class="userOnline"><p class="msg">' . htmlspecialchars($donnees['name']) .'<p class="salon"> in salon : '. htmlspecialchars($donnees['onsalon']). '<p class="date">'.$donnees['lastmove'] .'
    </p></p></p></div>';

}
$response->closeCursor(); // close response
?>
        </div>
        <section class="chat">
            <div id="chatbox">
                <div class="messages">
                    <div id="divContent"class="wrapper"></div>
                </div>
            </div>    
            <section id="belowChat">        
                <div class="user-inputs">
                    <form action="chat.php?task=write" method="POST">
                        <input type="text" name="author" id="author" placeholder="Nickname ?" hidden>
                        <input type="text" id="content" name="content" placeholder="TYPE SOMETHING...">
                        <button type="submit">SEND</button>
                    </form>
                </div>

            </section>  
        </section>  
    </div>

    

    <section id="salon">
        <section id="editMap">
            
            <span class="createA"><a href="NewMap.php">BUILD - EDIT LAYOUT</a></span>
                <div id="mapPlusPos">
                    <?php
                    if(!empty($_SESSION['ships'])){
                        echo '<div id="previewUser"></div>';
                        echo '<span id="ship0">'.$_SESSION['ship0'].'</span>
                        <span id="ship1">'.$_SESSION['ship1'].'</span>
                        <span id="ship2">'.$_SESSION['ship2'].'</span>
                        <span id="ship3">'.$_SESSION['ship3'].'</span>
                        <span id="ship4">'.$_SESSION['ship4'].'</span>';

                    } else{
                        echo "until you define where your ships will be, you cannot go to war";
                    }
                    ?>
                </div>
            </section>
            
            
            
        <div id="salon1">
        <span><a href="lobby1.php">JOIN CHANNEL 1 - IA EASY</a></span>
        <?php
// Fetch all datas
$response = $dbh->query('SELECT * FROM users WHERE onsalon = 1');
// VVVVVV database: usergame/ table: users
while ($donnees = $response->fetch())
{ // display data by important input in html
    echo '<div class="userOnline"><p class="msg">' . htmlspecialchars($donnees['name']) .'
    </p></div>';
}
$response->closeCursor(); // close response
?>
        </div>
        <div id="salon2">
        <span><a href="lobby2.php">JOIN CHANNEL 2 - IA MEDIUM</a></span>
        <?php
// Fetch all datas
$response = $dbh->query('SELECT * FROM users WHERE onsalon = 2');
// VVVVVV database: usergame/ table: users
while ($donnees = $response->fetch())
{ // display data by important input in html
    echo '<div class="userOnline"><p class="msg">' . htmlspecialchars($donnees['name']) .'
    </p></div>';
}
$response->closeCursor(); // close response
?>

        </div>
        <div id="salon3">
            <span><a href="lobby3.php">JOIN CHANNEL 3 - IA HARD</a></span>
        <?php
// Fetch all datas
$response = $dbh->query('SELECT * FROM users WHERE onsalon = 3');
// VVVVVV database: usergame/ table: users
while ($donnees = $response->fetch())
{ // display data by important input in html
    echo '<div class="userOnline"><p class="msg">' . htmlspecialchars($donnees['name']) .'
    </p></div>';
}
$response->closeCursor(); // close response
?>
        </div>

        <div id="salon4">
        <span><a href="lobbyPVP.php">JOIN CHANNEL 4 - PVP</a></span>
        </div>
        <img src="img/speakerOff.png" id="speakerOff" class="none" >
        <img src="img/speaker.png" id="speakerOn" class="none">

    </section>

</section>
<audio id="audioDiv" controls="false" autoplay="autoplay" loop preload="auto">
    <source src="mp3/bs.mp3" type="audio/mp3">

    </audio>

    <script src="js/audio.js"></script>
    <script src="js/main.js"></script>
    <script src="js/map.js"></script>

</body>
</html>
