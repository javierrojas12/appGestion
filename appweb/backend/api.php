<?php

function requestApi($peticion)
{
    # Servidor
    
    $server = 'https://api2.aplicacionesweb.cl';
    $url = false;

    # Datos de autenticación
    // $id_usuario = "soporte";
    // $contrasena = "soporte";
    // $claveApi = "54b7ca29cb1cd5ce0f1f64c46398dee4";

	$url = $server . '/apilira-gestion/dashboard/'.$peticion['metodo'];


    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 60);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

    // $headers = ['Authorization' => $claveApi];

    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($peticion['body'], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
    $headers[] = 'Authorization: 94ec33d0d75949c298f47adaa78928c2';
    $headers[] = 'Distribuidor: 001';
    $headers[] = 'Content-Type: application/json';

    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    $response = curl_exec($ch);
#if( $peticion['metodo'] == 'ventasgastosrentabilidad' ) die("WAA:". $response);
    if (curl_errno($ch)) {
        curl_close($ch);
        return false; // Manejo del error, podrías manejarlo de mejor manera según tu necesidad
    }

    $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($statusCode == 200) { // Verificamos que la respuesta haya sido exitosa
        $data = json_decode($response);
        // json_decode y return ?
        return $data;
    } else {
        return null; // O manejar de alguna otra manera según el código de estado
    }
}
