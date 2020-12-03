<?php

// Importing DBConfig.php file.
include 'DBConfig.php';

// Creating connection.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');

 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);

// Populate patientID from JSON $obj array and store into $patientID.
$patientID = $obj['patientID'];

// Populate cough from JSON $obj array and store into $cough.
$cough = $obj['cough'];

// Populate highTemperature from JSON $obj array and store into $highTemperature.
$highTemperature = $obj['highTemperature'];

// Populate changeSmellTaste from JSON $obj array and store into $changeSmellTaste.
$changeSmellTaste = $obj['changeSmellTaste'];

// Populate daysSubText from JSON $obj array and store into $daysSubText.
$daysSubText = $obj['daysSubText'];

// Populate tested from JSON $obj array and store into $tested.
$tested = $obj['tested'];

// Populate mentalIssues from JSON $obj array and store into $mentalIssues.
$mentalIssues = $obj['mentalIssues'];

//Checking Patient already has symptoms or not using SQL query.
$CheckSQL = "SELECT * FROM COVID WHERE PatientID = '$patientID'";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));

if(isset($check)){

//update COVID symptoms
$Sql_Query = "Update COVID Set Cough = '$cough', Temperature = '$highTemperature', LossOfSAndT = '$changeSmellTaste', DaysWithSymp = '$daysSubText', Tested = '$tested', MentalIssues = '$mentalIssues' Where PatientID = '$patientID'";

 if(mysqli_query($con,$Sql_Query)){

 // If the record inserted successfully then show the message.
$SuccessfulMSG = 'Symptoms Updated' ;

// Converting the message into JSON format.
$SuccessfulJson = json_encode($SuccessfulMSG);

// Echo the message.
 echo $SuccessfulJson ;

 }
 else {
 $UnsuccessfulMSG = 'Try Again 1' ;

 // Converting the message into JSON format.
$UnsuccessfulJson = json_encode($UnsuccessfulMSG);

// Echo the message.
 echo $UnsuccessfulJson ;
 }
 }
 else{

 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "Insert into COVID (PatientID,Cough,Temperature,LossOfSAndT,DaysWithSymp,Tested,MentalIssues) values ('$patientID','$cough','$highTemperature','$changeSmellTaste','$daysSubText','$tested','$mentalIssues')";

 if(mysqli_query($con,$Sql_Query)){

 // If the record inserted successfully then show the message.
$SuccessfulMSG = 'Symptoms Updated' ;

// Converting the message into JSON format.
$SuccessfulJson = json_encode($SuccessfulMSG);

// Echo the message.
 echo $SuccessfulJson ;

 }
 else{

 // If the record inserted successfully then show the message.
$InvalidMSG = 'Try Again 2' ;

// Converting the message into JSON format.
$InvalidJSon = json_encode($InvalidMSG);

// Echo the message.
 echo $InvalidJSon ;
 }
 }
 mysqli_close($con);
?>