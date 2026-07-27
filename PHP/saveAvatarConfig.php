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

if ($data === null) {

    echo json_encode([
        "success" => false,
        "message" => "Invalid JSON"
    ]);

    exit;

}


$file = "../Data/avatarConfig.json";


$result = file_put_contents(
    $file,
    json_encode(
        $data,
        JSON_PRETTY_PRINT
    )
);


if ($result === false) {

    echo json_encode([
        "success" => false,
        "message" => "Failed to write file"
    ]);

    exit;

}


echo json_encode([
    "success" => true
]);

?>