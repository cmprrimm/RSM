<?php

// Importing DBConfig.php file.
include 'DBConfig.php';

// Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');

 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);

// Populate ID from JSON $obj array and store into $ID.
$ID = $obj['ID'];

// Populate email from JSON $obj array and store into $email.
$email = $obj['email'];

// Populate address from JSON $obj array and store into $address.
$address = $obj['address'];

// Populate contactNo from JSON $obj array and store into $contactNo.
$contactNo = $obj['contactNo'];

$Sql_Query = "Update Patient Set Email = '$email', Address = '$address', ContactNumber = '$contactNo' Where ID = '$ID'";

 if(mysqli_query($con,$Sql_Query)){

 // If the record inserted successfully then show the message.
$SuccessfulMSG = 'Information Updated' ;

// Converting the message into JSON format.
$SuccessfulJson = json_encode($SuccessfulMSG);

// Echo the message.
 echo $SuccessfulJson ;

 }
 else{

 // If the record isn't updated successfully then show the message.
$InvalidMSG = 'Try Again' ;

// Converting the message into JSON format.
$InvalidJSon = json_encode($InvalidMSG);

// Echo the message.
 echo $InvalidJSon ;
 }

 mysqli_close($con);
?>