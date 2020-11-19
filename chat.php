
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

if($task == "write"){

  postMessage();

} else {
  getMessages();
}

function getMessages(){
  global $dbh;
  $resultats = $dbh->query("SELECT * FROM messages ORDER BY id DESC LIMIT 20");
  $messages = $resultats->fetchAll();
  echo json_encode($messages);
  



  }



function postMessage(){
  global $dbh;
  if(!array_key_exists('author', $_POST) || !array_key_exists('content', $_POST)){
    echo json_encode(["status" => "error", "message" => "One field or many have not been sent"]);
    return;
  }
 
  $content = htmlspecialchars($_POST['content']);
    $author =  $_SESSION['name'];
    $reloadDbh = $dbh->prepare("UPDATE `users` SET `isconnect` = '3', `lastmove` = NOW() WHERE`users`.`name` = '$author'");
    $reloadDbh->execute();
    $_SESSION['lastmoveSess'] = time();
  $query = $dbh->prepare('INSERT INTO messages SET author = :author, content = :content, created_at = NOW()');

  $query->execute([
    "author" => $author,
    "content" => $content
  ]);
  echo json_encode(["status" => "success"]);

}

?>
