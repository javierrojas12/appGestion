<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
ini_set('session.use_strict_mode', 1);
error_reporting(E_ALL); 

    header('Content-Type:application/json;charset=utf-8');
	header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
	header('Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Allow-Origin, Authorization');

    header('Expires: Wed, 16 Aug 1972 04:00:00 GMT');
    header('Cache-Control: no-store, no-cache, must-revalidate');
    header('Cache-Control: post-check=0, pre-check=0', FALSE);
    header('Pragma: no-cache');

	$_POST=json_decode(file_get_contents('php://input'), true);

?>