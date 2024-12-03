<?php

$username = $_POST["name"];
$pass = $_POST["pass"];

$conn = new mysqli("localhost", "root", "", "samuel");
$query = "INSERT INTO `testing`(`username`, `password`) VALUES ('". $username ."', '" . $pass . "')";
if ($conn->connect_error || !mysqli_query($conn, $query)) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Account has successfully created";
?>