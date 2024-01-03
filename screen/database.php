<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'registration';


// create connection with Database

try {
    $conn = new PDO("mysql:host = $servername; $dbname", $username , $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo " Connection faild: " . $e->getMessage ();
}

$Username = $_POST ['username'];
$Email = $_POST ['email'];
$Password = $_POST ['password'];
// hash the password
$hashpassword = password_hash($Password,PASSWORD_DEFAULT);

$query = 'INSERT INTO user("username", "email" , "password") VALUES ($Username , $Email , $Password)';
$query_run = $conn->prepare($query);
$data = [$Username , $Email , $Password];
$query_execute = $query_run->execute($data);

if ($query_execute){
    $Message = 'You has been registered successfully';
}
else 
{
    $Message = 'Server Error ... please try again latter';
}
echo ($Message);


?>