<?php
// 1.データベースに接続する。
$pdo = new PDO('mysql:dbname=quizy; host=db;' , 'root', 'secret');
$pdo->query('SET NAMES utf8;');

// 2.実行したいSQL文をセットする。
$stmt = $pdo->prepare('SELECT * FROM big_questions WHERE id = :id' );

// 3.SQLに対してパラメーターをセットする。【任意】(可変する部分の受け皿)
// $stmt->bindValue(':mail_address', $mail_address, PDO::PARAM_STR);
$stmt->bindValue(':id', 1);
echo $_GET["first_name"];

// 4.実際にSQLを実行する。
$stmt->execute(); //prepareの時に発射させるもの

// 5.結果を取得する。【任意】
$user = $stmt->fetchAll();
print_r($user) ;

// 6.データーベースから切断する。
unset($pdo);

