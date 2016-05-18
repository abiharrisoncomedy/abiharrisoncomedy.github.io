<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Email Sent</title>
</head>

<body>

<?php

$formKey=array();
$formValue=array();
$errors=array();
foreach($_POST as $key => $data)
{
	if ($data == "" || $data == null)
	{
		array_push($formKey, $key);
	array_push($formValue, "-1");
	}
	else
	{
	array_push($formKey, $key);
	array_push($formValue, $data);
	}
}

function validate()
{
	global $formKey, $formValue, $errors;
	$message="";
	for($i=0; $i<count($formKey);$i++)
	{
		if($formValue[$i]=="-1")
		{
			array_push($errors, $formKey[$i]);
		}
	}
	if(count($errors)==0)
	{
		$to = "abigailfunny@gmail.com";
		$email = $_REQUEST['email'];
		$subject = "Hire for gig.";
		for($a=0;$a<count($formKey);$a++)
		{
			$message.="$formKey[$a]: $formValue[$a] \n";
		}
		$message = wordwrap($message, 70);
		mail($to, $subject, $message, "From: " . $email);
		echo "Thank you for using our mail form. <a href='http://abigailisfunny.com'>Click here to be returned to abigailisfunny.com's home page</a>.";
	} 
	else 
	{
		echo "The following fields were not filled out correctly:";
		for ($x=0; $x<count($errors);$x++)
		{
			echo"<br />";
			print_r($errors[$x]);
		}		
	}
}

validate();
	
/*
	if (0 === preg_match("/\S+/", $_POST["firstname"]))
	{	echo ("One or more of the fields has not been filled out.");}
		else if (0 === preg_match("/\S+/", $_POST["lastname"]))
	{echo ("One or more of the fields has not been filled out.");}
		else if (0 === preg_match("/\S+/", $_POST["phonenumber"]))
	{echo ("One or more of the fields has not been filled out.");}
		else if (0 === preg_match("/\S+/", $_POST["email"]))
	{echo ("One or more of the fields has not been filled out.");}
		else if (0 === preg_match("/\S+/", $_POST["eventname"]))
	{echo ("One or more of the fields has not been filled out.");}
		else if (0 === preg_match("/\S+/", $_POST["venue"]))
	{echo ("One or more of the fields has not been filled out.");}
		else if (0 === preg_match("/\S+/", $_POST["audiencenumber"]))
	{echo ("One or more of the fields has not been filled out.");}
		else if (0 === preg_match("/\S+/", $_POST["bid"]))
	{echo ("One or more of the fields has not been filled out.");}
		else if (0 === preg_match("/\S+/", $_POST["details"]))
		{echo ("One or more of the fields has not been filled out.");}
	else
	{
		$fname = $_REQUEST['firstname'];
		$lname = $_REQUEST['lastname'];
		$phone = $_REQUEST['phonenumber'];
		$email = $_REQUEST['email'];
		$event = $_REQUEST['eventname'];
		$venue = $_REQUEST['venue'];
		$audience = $_REQUEST['audiencenumber'];
		$bid = $_REQUEST['bid'];
		$details = $_REQUEST['details'];
		$to = "abigailfunny@gmail.com";
		$subject = "Hire for gig.";
		$message = "Name: $fname $lname \nPhone number: $phone \nEmail: $email \nEvent name: $event \nVenue: $venue \nAudience number: $audience \nBid: $bid \nDetails: $details";
		$message = wordwrap($message, 70);
		
  $result=mail($to, $subject, $message, "From: " . $email);
  
  
if($result) {
echo "Thank you for using our mail form. <a href='http://abigailisfunny.com/home.html'>Click here to be returned to abigailisfunny.com's home page</a>.";
} 
else 
{
echo 'error';
	}}*/
		
  ?>

</body>
</html>