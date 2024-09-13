<?php
// Database connection details
$servername = "localhost";
$username = "root"; // Change if necessary
$password = ""; // Change if necessary
$dbname = "bus_booking";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from POST request
$from = $_POST['from'];
$to = $_POST['to'];
$date = $_POST['date'];
$bus_name = $_POST['busName'];
$start_time = $_POST['startTime'];
$end_time = $_POST['endTime'];
$price = $_POST['price'];
$seats = $_POST['seats'];
$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$mobile = $_POST['mobile'];

// Insert data into the bookings table
$sql = "INSERT INTO bookings (`from`, `to`, date, bus_name, start_time, end_time, price, seats, name, age, gender, mobile) 
        VALUES ('$from', '$to', '$date', '$bus_name', '$start_time', '$end_time', '$price', '$seats', '$name', '$age', '$gender', '$mobile')";

if ($conn->query($sql) === TRUE) {
    echo "Booking details saved successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
