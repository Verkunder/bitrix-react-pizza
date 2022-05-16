<?php
require_once DOCUMENT_ROOT . '/local/php_interface/constants-template.php';

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
}
?>
<!doctype html>
<html lang="ru">
<head>
    <?php
    // Базовые заголовки bitrix
    $APPLICATION->ShowHead();
    
    // общие теги между шаблонами
    include $_SERVER["DOCUMENT_ROOT"] . '/local/templates/.default/include/head.inc.php';
    ?>
    <title>Pizza Menu</title>
</head>
<body>
<div id="panel">
    <?php $APPLICATION->ShowPanel(); ?>
</div>
<? include $_SERVER["DOCUMENT_ROOT"] . '/local/templates/.default/include/header.inc.php'; ?>
