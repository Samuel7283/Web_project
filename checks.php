<?php

$username = $_POST["name"];
$conn = new mysqli("localhost", "root", "", "samuel");
$query = "SELECT * FROM `testing` WHERE username = '". $username ."';";
if ($conn->connect_error || !mysqli_query($conn, $query)) {
  die("Connection failed: " . $conn->connect_error);
}
echo $conn->query($query)->num_rows;
?>