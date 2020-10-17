<?php
error_reporting(E_ALL); ini_set('display_errors', 1);
$name = $_POST['name'];

$ts = time();
$public_key = 'c7659a6fb7207acaebfb4432f82eb6ef';
$private_key = 'e2de190eb8ad1cac4ec8666505cdcefabb3c1b27';
$hash = md5($ts.$private_key.$public_key);
$url = 'https://gateway.marvel.com:443/v1/public/characters?ts='.$ts.'&apikey='.$public_key.'&hash='.$hash.'&name='.$name;

$response = file_get_contents($url);
echo (($response));