
<?php
require('db.php');
if(!empty($_SESSION['name']) && !empty($_SESSION['lastmoveSess'])){
  
  
}
  else{
      header('Location: index.php');
  }
$timer = $_SESSION['lastmoveSess'];






$task = "list";

if(array_key_exists("task", $_GET)){
  $task = $_GET['task'];
}

if($task == "victory"){

  sendData();

} else {
  getData();
}

function getData(){
  global $dbh;
  $resultats = $dbh->query("SELECT * FROM scoreboard ORDER BY id DESC LIMIT 20");
  $messages = $resultats->fetchAll();
  echo json_encode($messages);
  



  }



function sendData(){
  global $dbh;
  if(!array_key_exists('username', $_POST) || !array_key_exists('hit', $_POST)){
    echo json_encode(["status" => "error", "message" => "One field or many have not been sent"]);
    return;
  }
 
  $hit = $_POST['hit'];
  $otherhit = $_POST['otherhit'];
    $author =  $_POST['username'];
    $victory = $_POST['victory'];
    $reloadDbh = $dbh->prepare("UPDATE `users` SET `isconnect` = '3', `lastmove` = NOW() WHERE`users`.`name` = '$author'");
    $reloadDbh->execute();
    $_SESSION['lastmoveSess'] = time();
  $query = $dbh->prepare('INSERT INTO scoreboard SET username = :username, hit = :hit, otherhit = :otherhit, victory = :victory, created_at = NOW()');

  $query->execute([
    "username" => $author,
    "hit" => $hit,
    "otherhit" => $otherhit,
    "victory" => $victory
  ]);
  echo json_encode(["status" => "success"]);

}

?>