<?php
\Bitrix\Main\Page\Asset::getInstance()->addCss(STATIC_FOLDER . "bundle/css/catalog-filter.css");
\Bitrix\Main\Page\Asset::getInstance()->addCss(STATIC_FOLDER . "bundle/css/catalog-list.css");
\Bitrix\Main\Page\Asset::getInstance()->addCss(STATIC_FOLDER . "bundle/css/catalog-list.css");
$this->addExternalJs("/node_modules/jquery-form-validator/form-validator/jquery.form-validator.min.js");
\Bitrix\Main\Page\Asset::getInstance()->addJs("/node_modules/double-validate/jquery.double-validate.js");
\Bitrix\Main\Page\Asset::getInstance()->addJs("/node_modules/jquery.maskedinput/src/jquery.maskedinput.js");
\Bitrix\Main\Page\Asset::getInstance()->addCss(STATIC_FOLDER . "bundle/css/modal.css");
$this->addExternalJs('/local/static/bundle/catalog-list-r.js');
?>
<div class="wrapper">
<div class="catalog-pizza" id="catalog-pizza-card"></div>
</div>
</div>
