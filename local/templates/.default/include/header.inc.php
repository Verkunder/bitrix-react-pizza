<header class="header">
    <div class="wrapper">
        <div class="header__wrap">
            <a href="#" class="logo-header">
                <img src="/local/static/img/svg/Logo.svg" alt="Pizza Menu" class="logo-header__img">
            </a>
            <?
            $APPLICATION->IncludeComponent(
                "custom:menu",
                "", // если имя шаблона пустое - то подставляется .default
                []
            );?>
            <? $APPLICATION->IncludeComponent(
                "custom:phone",
                "", // если имя шаблона пустое - то подставляется .default
                []
            );?>
            <? $APPLICATION->IncludeComponent(
                "custom:basket",
                "", // если имя шаблона пустое - то подставляется .default
                []
            );?>
            <button class="language">
                <span class="language__text">EN</span>
            </button>
            <div class="mobile-burger">
                <img src="/local/static/img/svg/mobile-menu.svg" alt="" class="mobile-burger__icon">
            </div>
        </div>
    </div>
</header>
<main>