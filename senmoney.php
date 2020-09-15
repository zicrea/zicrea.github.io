<?php

$conn = mysqli_connect("localhost", "root", "", "senmoneydb");
$result = mysqli_query($conn, "SELECT DISTINCT numero, code, solde FROM compte ORDER BY numero;");

$data = array();
while ($row = mysqli_fetch_array($result))
{
	
	$data[]=  $row  ;
}

echo json_encode($data);
?>