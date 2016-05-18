var x;

function emailCheck(form, input)
{
	
	x=document.forms[form][input].value;
	
	var possEmail = new RegExp(/^[\w\+\.\-]+\@[a-zA-Z0-9\-]+\.[a-zA-Z0-9]{2,4}$/);
	
	if (possEmail.test(x))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function letterCheck(form, input)
{
	x=document.forms[form][input].value;
	
	var possName = new RegExp(/^[a-zA-Z\s\-\']+$/);
	
	if (possName.test(x))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function numberCheck(form, input)
{
	x=document.forms[form][input].value;
	
	var possNum = new RegExp(/^[0-9]+$/);
	
	if (possNum.test(x))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function selectAll(id)
{
    document.getElementById(id).select();
}

//there has to be a way that I can create some arrays that contain all possible field names and then see iff the current field, a, is in one of the arrays. then depending on which array it's in a certain check function will be carried out. If I could figure out how to do this we could replace all of the  a==... || a==..., etc.

var a, y;	
function validate(form)
{
	displayErrors.innerHTML="";
	var formKey=new Array();
	var formValue=new Array();
	var _errors=new Array();
	var fEle = document.forms[form].elements;
	var _name = new Array("firstname", "lastname");
	var number = new Array("audiencenumber", "bid");
	
for (i=0; i<fEle.length; i++)
{
	a=fEle[i].name;
	y=fEle[i].value;
	//alert(y);

	if (y == "" || y == null)
	{
		_errors[i] = "The "+a+" field cannot be left empty <br />"
		//alert(_errors);
	}
	else if (a=="firstname" || a=="lastname")
	{
		_errors[i] = "";
		if (letterCheck(form, a))
		{
			formKey.push(a);
			formValue.push(y);
		}
		else
		{
			_errors[i] = "Your entry in the "+a+" field is not valid <br />"
		}
	}
	else if (a=="bid" || a=="audiencenumber" || a=="phonenumber")
	{
		_errors[i] = "";
		if (numberCheck(form, a))
		{
			formKey.push(a);
			formValue.push(y);
			if (a=="phonenumber" && x.length<10)
			{
				_errors[i] = "The phone number you have entered is too short.<br />You need to enter your full number, including <br />the area code <br />";
			}
		}
		else
		{
			_errors[i] = "Your entry in the "+a+" field is not valid.<br />Please use only numerical values(0-9) <br />";
		}
	}	
	else if (a=="email")
	{
		_errors[i]="";
		if (emailCheck(form, a)==false)
		{
			_errors[i] = "Your entry in the "+a+" field is not valid <br />";
		}
	}
	else if(y=="Enter additional details about the event" || y=="Enter message here")
	{
		_errors[i]="You must enter a message";
	}
	else
	{
		_errors[i]="";
	}
}

  var numOfNonErrors=0;
  for(i=0;i<_errors.length;i++)
  {
	  if (_errors[i]=="")
	  {
		  numOfNonErrors++;
	  }
	  else
	  {
		  displayErrors.innerHTML += "<li>"+_errors[i]+"</li>";
	  }
  }
  
  if (numOfNonErrors==_errors.length)
  {
	  return true;
  }
  else
  {
	  return false;
  }  
}



/*
function validate()
{

	var message="";
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
		echo "Thank you for using our mail form. <a href='http://abigailisfunny.com/hire.html'>Click here to be returned to abigailisfunny.com</a>.";
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
*/