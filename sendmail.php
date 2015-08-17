<?php

$name = $_POST['name'] ;
$email = $_POST['email'] ;
$phone = $_POST['phone'] ;
$referral = $_POST['referral'] ;
$message = $_POST['message'] ;

$to = "robasaad@gmail.com";
$subject = "robasaad.com: New message from $name!";
$body = "Name: $name \nPhone: $phone \nE-mail: $email \nHow'd you hear about me?: $referral \nMessage: $message";
$sent = mail($to, $subject, $body, $headers);

?>