<?php
require('db.php');
$name = $_SESSION['name'];

$req = $dbh->prepare("UPDATE `users` SET `isconnect` = '0', `lastmove` = NOW(), `onsalon` = 'Home' WHERE`users`.`name` = '$name'");


$req->execute();


header('Location: index.php');

?>