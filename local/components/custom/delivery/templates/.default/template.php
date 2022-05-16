<?php
\Bitrix\Main\Page\Asset::getInstance()->addCss(STATIC_FOLDER . "bundle/css/delivery.css");
?>

<div class="delivery">
    <div class="wrapper">
        <h2>Доставка и оплата</h2>
        <div class="delivery__steps">
            <div class="step">
                <div class="step-img">
                    <img src="/local/static/img/svg/icon-order.svg" alt="Заказ">
                </div>
                <div class="step-text">
                    <div class="step-title">Заказ</div>
                    <div class="step-offer">После оформления заказа мы&nbsp;свяжемся с&nbsp;вами для уточнения деталей.</div>
                </div>
            </div>
            <div class="step">
                <div class="step-img">
                    <img src="/local/static/img/svg/icon-delivery.svg" alt="Доставка">
                </div>
                <div class="step-text">
                    <div class="step-title">Доставка курьером</div>
                    <div class="step-offer">Мы&nbsp;доставим вашу пиццу горячей. Бесплатная доставка по&nbsp;городу.</div>
                </div>
            </div>
            <div class="step">
                <div class="step-img">
                    <img src="/local/static/img/svg/icon-pay.svg" alt="Оплата">
                </div>
                <div class="step-text">
                    <div class="step-title">Оплата</div>
                    <div class="step-offer">Оплатить можно наличными или картой курьеру. И&nbsp;золотом тоже можно.</div>
                </div>
            </div>
        </div>
    </div>
</div>


