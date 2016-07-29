<?php
$name = $_POST['name'];
$password = $_POST['password'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$content = $_POST['text'];
if ($name == '') {
	$name = 'none';
}
if ($password == '') {
	$password = 'none';
}
if ($email == '') {
	$email = 'none';
}
if ($mobile == '') {
	$mobile = 'none';
}
if ($content == '') {
	$content = 'none';
}
$text = "name:".$name."/password:".$password."/email:".$email."/mobile:".$mobile."/text:".$content."/time:".date("Y-m-d H:i:s",time())."\n";
date_default_timezone_set('PRC');
$fh = fopen('index.json', "a");
fwrite($fh, $text);
fclose($fh);
echo 1;