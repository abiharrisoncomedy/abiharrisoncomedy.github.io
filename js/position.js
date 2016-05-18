function setPosition(id)
{
  var myWidth = 0
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
  } 
  else if( document.documentElement && ( document.documentElement.clientWidth) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
  } 
  else if( document.body && ( document.body.clientWidth) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
  }
  //__________________________________________________________________________________
  //The above code is a variation of code from here
  //http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
  //---------------------------------------------------------------------------------
  
  var diff=0;
  var quo=0;
  var prod=0;
  if (myWidth > 960)
  	{
		diff=myWidth-960;
		quo=diff/100;
		prod=quo*50;
		sum=prod+647;
		//alert(diff+ " " + quo + " " + prod + " " + sum);
		document.getElementById(id).style.left=sum+"px";
	}
	else
	{
		document.getElementById(id).style.left="647px";
		//alert(diff);
	}
}


