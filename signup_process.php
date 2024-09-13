<?php
// Include the database connection file
include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Insert user data into the database
    $sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";
    
    if ($conn->query($sql) === TRUE) {
        // Redirect to login page after successful signup
        header("Location: index.php");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();
}
?>
