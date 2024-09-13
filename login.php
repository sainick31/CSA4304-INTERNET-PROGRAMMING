<?php
session_start();

// Include the database connection file
include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Check user credentials
    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        // User found, redirect to home page
        $_SESSION['email'] = $email;
        header("Location: home.php");
    } else {
        echo "Invalid email or password";
    }
    
    $conn->close();
}
?>
