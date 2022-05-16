import React, {useState} from 'react';
import TheModalItem from "./TheModalItem";
import Basket from '/local/static/json/basket.json'

const TheModal = () => {
    const [order, setOrder] = useState(Basket)
    const removeItem = (name) => {
        const newOreder = order.filter(item => item.name != name)
        setOrder(newOreder)
    }

    return (
        <>
            <h3 className="modal__title">Ваш заказ</h3>
            <button className="modal__close" data-dismiss="modal"></button>
            <div className="wrap__basket">
                <div className="basket-modal">
                    {order.map(({name, size, price, count, icon, img}, idx) => {
                        return  <TheModalItem key={idx} img={img} icon={icon} name={name} size={size} price={price} count={count} removeItem={removeItem} />
                    })}
                </div>
                <div className="sum-basket">
                    <div className="sum-basket__text">Сумма заказа:</div>
                    <div className="sum-basket__sum">1 877 руб</div>
                </div>
                <form id="buy" className="buy-form" autoComplete="off" name="buy">
                    <span className="buy-form__title">Контакты</span>
                    <div className="buy-form__wrap buy-form__wrap--two--сolumn">
                        <div className="buy-form__wrap--input">
                            <input
                                type="text"
                                className="buy-form__input"
                                name="firstname"
                                id="firstname"
                            />
                                <label className="buy-form__label" htmlFor="firstname">Ваше имя</label>
                        </div>
                        <div className="buy-form__wrap--input">
                            <input
                                type="text"
                                className="buy-form__input"
                                name="phone"
                                id="phone"
                            />
                            <label className="buy-form__label" htmlFor="phone">Телефон</label>
                        </div>
                    </div>
                    <div className="buy-form__wrap">
                        <div className="buy-form__wrap--input">
                            <input
                                type="text"
                                className="buy-form__input"
                                name="address"
                                id="address"
                            />
                            <label className="buy-form__label" htmlFor="address">Адрес доставки</label>
                        </div>
                    </div>
                    <div className="buy-form__title">Способ оплаты</div>
                    <div className="buy-from__radio">
                        <input type="radio" className="buy-form__radio" name='payment' id="paymentСourier"/>
                        <label htmlFor="paymentСourier" className="buy-form__radio--label">Оплата наличными или картой
                            курьеру</label>
                    </div>
                    <div className="buy-from__radio">
                        <input type="radio" className="buy-form__radio" name='payment' id="paymentSite"/>
                        <label htmlFor="paymentSite" className="buy-form__radio--label">Оплата картой онлайн
                            на&nbsp;сайте</label>
                    </div>
                    <label htmlFor="" className="error">Выберите способ оплаты!</label>
                    <button type="submit" className="buy-form__btn--buy">Оформить заказ</button>
                    <div className="buy-form__info smallText">Нажимая кнопку &laquo;Оформить
                        заказ&raquo; вы&nbsp;соглашаетесь с&nbsp;политикой конфиденциальности
                    </div>
                </form>
            </div>
        </>
    );
};

export default TheModal;