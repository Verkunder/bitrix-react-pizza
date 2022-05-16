<?php
use \Bitrix\Main as Main;

$application = Main\HttpApplication::getInstance();
$context     = Main\Context::getCurrent();
$request     = $context->getRequest();
$asset       = Main\Page\Asset::getInstance();

// используем document_root из D7
define ('DOCUMENT_ROOT', $application::getDocumentRoot());

// Для папки статики
define ('STATIC_FOLDER', '/local/static/');
define ('FULL_PATH_STATIC_FOLDER', DOCUMENT_ROOT . STATIC_FOLDER);

// для проверок на директорию / URL (использовать в крайних случаях)
define ('DIR', $request->getRequestedPageDirectory()); // Директория запрошенной страницы (напр. "/catalog/category/")
define ('PAGE', $request->getRequestUri()); // Запрошенный адрес (напр. "/catalog/category/?param=value")
