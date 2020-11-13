<?php

// Importing DBConfig.php file.
include 'DBConfig.php';

// Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');

 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);

// Populate email from JSON $obj array and store into $email.
$email = $obj['email'];

// Populate password from JSON $obj array and store into $password.
$password = $obj['password'];

// Populate name from JSON $obj array and store into $name.
$fullName = $obj['fullName'];

// Populate address from JSON $obj array and store into $address.
$address = $obj['address'];

// Populate gender from JSON $obj array and store into $gender.
$gender = $obj['gender'];

// Populate DOB from JSON $obj array and store into $DOB.
$DOB = $obj['DOB'];

// Populate contact number from JSON $obj array and store into $contactNo.
$contactNo = $obj['contactNo'];

//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM Patient WHERE Email = '$email'";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));


if(isset($check)){

 $EmailExistMSG = 'Email Already Exist, Please Try Again' ;

 // Converting the message into JSON format.
$EmailExistJson = json_encode($EmailExistMSG);

// Echo the message.
 echo $EmailExistJson ;

 }
 else{

 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "Insert into Patient (Name,Password,Email,DOB,Address,Gender,ContactNumber) values ('$fullName','$password','$email','$DOB','$address','$gender','$contactNo')";


 if(mysqli_query($con,$Sql_Query)){

 // If the record inserted successfully then show the message.
$SuccessfulMSG = 'User Registered Successfully' ;

// Converting the message into JSON format.
$SuccessfulJson = json_encode($SuccessfulMSG);

// Echo the message.
 echo $SuccessfulJson ;

 }
 else{

 // If the record inserted successfully then show the message.
$InvalidMSG = 'Try Again' ;

// Converting the message into JSON format.
$InvalidJSon = json_encode($InvalidMSG);

// Echo the message.
 echo $InvalidJSon ;
 }
 }
 mysqli_close($con);
?>