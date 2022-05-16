<?php
// для подключения файлов методом include из глобального шаблона и из локального
define ('FULL_PATH_DEFAULT_TEMPLATE', DOCUMENT_ROOT . '/local/templates/.default/');
define ('FULL_PATH_LOCAL_TEMPLATE', DOCUMENT_ROOT . '/local/templates/'.SITE_TEMPLATE_ID.'/');

// для подключения локальных файлов из глобального шаблона и из локального.
define ('PATH_DEFAULT_TEMPLATE', '/local/templates/.default/');
define ('PATH_LOCAL_TEMPLATE', '/local/templates/'.SITE_TEMPLATE_ID.'/');
