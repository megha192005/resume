<?php
include 'db.php';
$data = json_decode(file_get_contents("php://input"));
// Save $data->name, $data->email, etc. in your DB using SQL INSERT
// echo "success" or { "status":"success" }
?>
