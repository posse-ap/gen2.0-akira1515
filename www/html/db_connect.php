<?php


/// h関数が未定義の場合は定義
// if( ! function_exists('h') ) {
//   function h($s) {
//     echo htmlspecialchars($s, ENT_QUOTES, "UTF-8");
//   }
// }

$dsn = 'mysql:host=db;dbname=webapp;charset=utf8mb4;';
$user = 'akira';
$password = 'secret';

try {
  $db = new PDO($dsn, $user, $password);
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo '接続失敗: ' . $e->getMessage();
  exit();
}


// <?php

// $dsn = 'mysql:host=db;dbname=kuizy;charset=utf8;';
// $user = 'root';
// $password = 'secret';

// try {

//   $db = new PDO($dsn, $user, $password);
//   $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//   // echo '成功';

// } catch (PDOException $e) {

//   echo '接続失敗' . $e->getMessage();
//   exit();

// }