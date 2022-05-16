<?php
define("LOG_FILENAME", $_SERVER["DOCUMENT_ROOT"]."/local/php_interface/custom-log.txt");

// Composer
try {
    require_once $_SERVER["DOCUMENT_ROOT"].'/vendor/autoload.php';
} catch (Exception $exception) {
    die('Не установлен composer');
}

// Constants
require_once "constants.php";
