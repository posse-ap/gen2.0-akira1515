<?php
require("./dbconnect.php");


$stmt = $db ->prepare('select study_hour from study_data where DATE_FORMAT(study_date, "%Y%m") = DATE_FORMAT(NOW(), "%Y%m")');
$stmt->execute();
$studyHourEverydays = $stmt->fetchAll();
$studyHour="";
foreach($studyHourEverydays as $studyHourEveryday){
    $studyHour .=$studyHourEveryday["study_hour"];
}

$array = [
    'one' => $studyHour[0],
];


?>

