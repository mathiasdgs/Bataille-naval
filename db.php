<?php 
session_start();
if(!isset($_SESSION['count'])){
    $_SESSION['count'] = 0;
} else{
    $_SESSION['count']++;
}


$dsn = 'mysql:dbname=usergame;host=127.0.0.1';
$user = 'root';
$password = '';

$cssStyle ='
<link href="css/general.css" rel="stylesheet">
<link href="css/desktop.css" rel="stylesheet">
<link href="css/channels.css" rel="stylesheet">
<link href="css/formulaire.css" rel="stylesheet">
<link href="css/mobile.css" rel="stylesheet">';
try {
    $dbh = new PDO($dsn, $user, $password); // use bdh for all SQL query
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Cant access to mysql server, read this : ' . $e->getMessage();
}

?>
