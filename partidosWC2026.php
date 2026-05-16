<?php
// api_competiciones.php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");


ini_set('display_errors', 1);
error_reporting(E_ALL);
// TU API KEY (NO va en JS)
$API_KEY = "ccbdcb265ba0436fac94f04dc5513585";

// Endpoint de la API externa
$url = "https://api.football-data.org/v4/competitions/2000/matches";

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "X-Auth-Token: $API_KEY"
]);

$response = curl_exec($ch);

if ($response === false) {
    http_response_code(500);
    echo json_encode([
        "error" => "Error al consumir la API",
        "detalle" => curl_error($ch)
    ]);
    curl_close($ch);
    exit;
}

curl_close($ch);

// 👇 opcional: validar JSON
$data = json_decode($response, true);

if ($data === null) {
    http_response_code(500);
    echo json_encode([
        "error" => "Respuesta inválida de la API"
    ]);
    exit;
}

echo json_encode($data);