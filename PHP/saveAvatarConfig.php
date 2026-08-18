<?php

header("Content-Type: application/json");

$json = file_get_contents("php://input");

if (!$json) {

    echo json_encode([
        "success" => false,
        "message" => "No data received"
    ]);

    exit;

}


$data = json_decode($json, true);


if (
    json_last_error() !== JSON_ERROR_NONE
) {

    echo json_encode([
        "success" => false,
        "message" => json_last_error_msg()
    ]);

    exit;

}


$file = __DIR__ . "/../Data/avatarConfig.json";


$result = file_put_contents(

    $file,

    json_encode(
        $data,
        JSON_PRETTY_PRINT |
        JSON_UNESCAPED_UNICODE
    ),

    LOCK_EX

);


if ($result === false) {

    echo json_encode([
        "success" => false,
        "message" => "Failed to write avatarConfig.json"
    ]);

    exit;

}


echo json_encode([

    "success" => true,

    "message" => "Avatar configuration saved"

]);

?>