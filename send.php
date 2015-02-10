<?php
header('Access-Control-Allow-Origin: *');

$emri=$_POST['emri'];
$mesazhi=$_POST['comment'];
$IPAdresa = $_SERVER["REMOTE_ADDR"];


$browser="";
     if(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]),strtolower("MSIE"))){$browser="ie";}
else if(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]),strtolower("Presto"))){$browser="opera";}
else if(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]),strtolower("CHROME"))){$browser="chrome";}
else if(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]),strtolower("SAFARI"))){$browser="safari";}
else if(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]),strtolower("FIREFOX"))){$browser="firefox";}
else {$browser="other";}

$to = "dergomesazh@radio-pendimi.com";
$subject = "Rubrika DergoMesazh (mobile app)";
$message = " Emri: " . $emri . "\r\n Mesazhi: " . $mesazhi. "\r\n IP Adresa: " . $IPAdresa. "\r\n Browser: " . $browser;
 
 
$from = "info@radio-pendimi.com";
$headers = "From:" . $from . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 
 
if ($emri == "" || $mesazhi == ""){
echo "Plotësoni fushat e nevojshme dhe provoni përsëri";
} else {
if(@mail($to,$subject,$message,$headers))
{
  echo "Mesazhi juaj u dërgua me sukses";
}else{
  echo "Gabim! Ju lutemi provoni përsëri.";
}
}
?>