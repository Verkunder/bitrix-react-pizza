<?php
\Bitrix\Main\Page\Asset::getInstance()->addCss(STATIC_FOLDER . "bundle/css/basket.css");
?>


<div class="basket" data-toggle="modal" data-target=".bd-example-modal-lg">
    <div class="basket__wrap--icon">
        <img src="/local/static/img/svg/basket-icon.svg" alt="Корзина" class="basket__icon">
        <div class="basket__count--icon">3</div>
    </div>
    <div class="basket__text">
        <div class="basket__text--order">Ваш заказ</div>
        <div class="basket__items--text smallText">Итальянская и&nbsp;ещё 2&nbsp;пиццы</div>
    </div>
</div>
