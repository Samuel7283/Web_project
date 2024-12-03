<?php

$username = $_POST["name"];
$pass = $_POST["pass"];

$conn = new mysqli("localhost", "root", "", "samuel");
$query = "SELECT * FROM `testing` WHERE username = '". $username ."' AND password = '". $pass ."';";
if ($conn->connect_error || !mysqli_query($conn, $query)) {
  die("Connection failed: " . $conn->connect_error);
}
$result = $conn->query($query);
if ($result->num_rows == 0) {
  echo "Whoops! Wrong username or password";
}
?>