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

// Populate smoker from JSON $obj array and store into $smoker.
$smoker = $obj['Smoker'];

// Populate pregnant from JSON $obj array and store into $pregnant.
$pregnant = $obj['Pregnant'];

// Populate medicalConditions from JSON $obj array and store into $medicalConditions.
$medicalConditions = $obj['MedicalConditions'];

// Populate hospitalised from JSON $obj array and store into $hospitalised.
$hospitalised = $obj['Hospitalised'];

// Populate covidSymptoms from JSON $obj array and store into $covidSymptoms.
$covidSymptoms = $obj['CovidSymptoms'];

$Sql_Query = "Update Patient Set Smoker = '$smoker', Pregnant = '$pregnant', MedicalConditions = '$medicalConditions', Hospitalised = '$hospitalised', CovidSymptoms = '$covidSymptoms' Where Email = '$email'";

 if(mysqli_query($con,$Sql_Query)){

 // If the record inserted successfully then show the message.
$SuccessfulMSG = 'Symptoms Updated' ;

// Converting the message into JSON format.
$SuccessfulJson = json_encode($SuccessfulMSG);

// Echo the message.
 echo $SuccessfulJson ;

 }
 else{

 // If the record isn't inserted successfully then show the message.
$InvalidMSG = 'Try Again' ;

// Converting the message into JSON format.
$InvalidJSon = json_encode($InvalidMSG);

// Echo the message.
 echo $InvalidJSon ;
 }

 mysqli_close($con);
?>