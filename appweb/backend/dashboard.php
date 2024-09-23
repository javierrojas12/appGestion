<?php

include_once(__DIR__.'/common.php');
include_once(__DIR__.'/api.php');


if (!isset($_POST['peticion'])) {
    die( json_encode(['error' => 'No se especificó la petición.']) );
}
$response = requestApi([
    'metodo' => $_POST['peticion'],
    /*
    'body'   => [ 
        'Distribuidor' => '001',
    ],
    */
    'body'=>$_POST
]);

echo json_encode($response, JSON_INVALID_UTF8_IGNORE);

