<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
$APPLICATION->SetTitle('Главная');
?>
<?
$APPLICATION->IncludeComponent(
    "custom:banner",
    "", // если имя шаблона пустое - то подставляется .default
    []
);?>
<?
$APPLICATION->IncludeComponent(
    "custom:stock",
    "", // если имя шаблона пустое - то подставляется .default
    []
);?>
<?
$APPLICATION->IncludeComponent(
    "custom:catalog-list",
    "", // если имя шаблона пустое - то подставляется .default
    []
);?>
<?
$APPLICATION->IncludeComponent(
    "custom:delivery",
    "", // если имя шаблона пустое - то подставляется .default
    []
);?>
<?
$APPLICATION->IncludeComponent(
    "custom:about",
    "", // если имя шаблона пустое - то подставляется .default
    []
);?>
<?
$APPLICATION->IncludeComponent(
    "custom:instagram",
    "", // если имя шаблона пустое - то подставляется .default
    []
);?>
<?
$APPLICATION->IncludeComponent(
    "custom:modal",
    "", // если имя шаблона пустое - то подставляется .default
    []
);?>
<?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php');
?>