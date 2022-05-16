<?php
$this->addExternalJs("/node_modules/jquery-form-validator/form-validator/jquery.form-validator.min.js");
\Bitrix\Main\Page\Asset::getInstance()->addJs("/node_modules/double-validate/jquery.double-validate.js");
\Bitrix\Main\Page\Asset::getInstance()->addJs("/node_modules/jquery.maskedinput/src/jquery.maskedinput.js");
\Bitrix\Main\Page\Asset::getInstance()->addCss(STATIC_FOLDER . "bundle/css/modal.css");
$this->addExternalJs('/local/static/bundle/react-modal.js');
?>

<!-- Large modal -->
<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div id="modal-content" class="modal-content">

        </div>
    </div>
</div>

<div class="modal fade successBuy" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal__wrapper" data-content="successBuy">
                <button class="modal__close" data-dismiss="modal"></button>
                <h3 class="modal__title--seccess">Ваш заказ принят!</h3>
                <div class="modal__text">Наш оператор скоро свяжется с&nbsp;вами.</div>
            </div>
        </div>
    </div>
</div>