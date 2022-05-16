<?php
\Bitrix\Main\Page\Asset::getInstance()->addCss(STATIC_FOLDER . "bundle/css/catalog-filter.css");
\Bitrix\Main\Page\Asset::getInstance()->addCss(STATIC_FOLDER . "bundle/css/catalog-list.css");
$this->addExternalJs('/local/static/bundle/catalog-list-r.js');
?>
<div class="wrapper">
<div class="catalog-pizza" id="catalog-pizza-card"></div>
</div>
</div>
