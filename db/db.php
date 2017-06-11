<?php


$server = 'localhost:3306';
$user = 'root';
$pass = 'admin';
$dbname = 'sv';

$db = mysqli_connect($server, $user, $pass, $dbname);
if (mysqli_connect_errno())
{
    echo 'Błąd';
    exit;
}
else {
}

function console_log( $data ){
  echo '<script>';
  echo 'console.log('. json_encode( $data ) .')';
  echo '</script>';
}

?>