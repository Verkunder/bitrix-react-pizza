<?php
\Bitrix\Main\Page\Asset::getInstance()->addCss(STATIC_FOLDER . "bundle/css/menu.css");
?>
<nav class="navigation">
    <img src="/local/static/img/svg/logo-mobile-menu.svg" alt="" class="logo-mobile">
    <div class="navigation__list">
        <div class="navigation__link">
            <a href="#">Меню</a>
        </div>
        <div class="navigation__link">
            <a href="#">О нас</a>
        </div>
        <div class="navigation__link">
            <a href="#">Контакты</a>
        </div>
    </div>
    <div class="about-mobile">
        <img src="/local/static/img/svg/Menu-close.svg" alt="" class="close-button">
        <div class="about-mobile__title">Заказать по&nbsp;телефону</div>
        <a href="tel:+79184326587" class="about-mobile__phone">+7 (918) 432-65-87</a>
        <div class="about-mobile__time">Ежедневно с&nbsp;9:00 до&nbsp;23:00</div>
    </div>
    <div class="language-mobile">
        <a href="#" class="language-mobile__button">English</a>
    </div>
</nav>