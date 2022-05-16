import React, {useState, useEffect} from 'react';
import OrderItem from "./OrderItem";
import ReactDOM from 'react-dom'

const Modal = ({isVisible, onClose, basket, removeBasket}) => {
    if(!isVisible) return null
    return ReactDOM.createPortal(
        <div className="modal" >
            <div className="modal__bg"></div>
            <div className="modal__wrapper" data-content="basketAndOrderForm">
                <h3 className="modal__title">Ваш заказ</h3>
                <button className="modal__close" onClick={onClose}></button>
                <div className="wrap-basket">
                    <ul className="basket-modal">
                        {basket.map(({name, size, price, icon, img, count, id}) => <OrderItem id={id} removeBasket={removeBasket} img={img} price={price} name={name} icon={icon} size={size} count={count} />)}
                    </ul>
                    <span className="sum-basket">
            <span className="sum-basket__text">Сумма заказа :</span>
            <span className="sum-basket__sum">1 887 руб</span>
        </span>
                </div>
                    <span className="buy-form__title">Контакты</span>
                    <div className="buy-form__wrap buy-form__wrap--two-сolumn">
                        <div className="buy-form__wrap-input">
                            <input type="text"
                                   className="buy-form__input"
                                   name="firstname"
                                   id="firstname"
                                   data-validation="required"
                                   data-validation-error-msg-required="Поле обязательно для заполнения"
                                   required
                            />
                            <label className="buy-form__label" htmlFor="firstname">Ваше имя</label>
                        </div>
                        <div className="buy-form__wrap-input">
                            <input
                                type="text"
                                className="buy-form__input"
                                name="phone"
                                id="phone"
                                data-validation="required"
                                data-validation-error-msg-required="Поле обязательно для заполнения"
                                required
                            />
                            <label className="buy-form__label" htmlFor="phone">Телефон</label>
                        </div>
                    </div>
                    <div className="buy-form__wrap">
                        <div className="buy-form__wrap-input">
                            <input
                                type="text"
                                className="buy-form__input"
                                name="address"
                                id="address"
                                data-validation="required"
                                data-validation-error-msg-required="Поле обязательно для заполнения"
                                required
                            />
                            <label className="buy-form__label" htmlFor="address">Адрес доставки</label>
                        </div>
                    </div>
                    <span className="buy-form__title">Способ оплаты</span>
                    <div className="buy-form__wrap-radio">
                        <input type="radio" className="buy-form__radio" name='payment' id="paymentСourier"
                               checked/>
                        <label htmlFor="paymentСourier" className="buy-form__radio-label">Оплата наличными или картой
                            курьеру</label>
                    </div>
                    <div className="buy-form__wrap-radio">
                        <input type="radio" className="buy-form__radio" name='payment' id="paymentSite"/>
                        <label htmlFor="paymentSite" className="buy-form__radio-label">Оплата картой онлайн на
                            сайте</label>
                    </div>

                    <button type="submit" className="buy-form__btn-buy">Оформить заказ</button>

                    <p className="buy-form__info smallText">Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой
                        конфиденциальности</p>
            </div>
        </div>,
        document.getElementById('footer')
    );
};

export default Modal;