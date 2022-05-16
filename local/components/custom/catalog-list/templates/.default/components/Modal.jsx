import React from 'react';

const Modal = ({isVisible, onClose}) => {
    return (
        <div className="modal" style={{display: isVisible === true ? '' : 'none'}}>
            <div className="modal__bg"></div>
            <div className="modal__wrapper" data-content="basketAndOrderForm">
                <h3 className="modal__title">Ваш заказ</h3>
                <button className="modal__close" onClick={onClose}></button>
                <div className="wrap-basket">
                    <ul className="basket-modal">

                        <li className="basket-modal__item">
                            <div className="basket-modal__wrap-img">
                                <div className="basket-modal__wrap-icons-type">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.7398 4.26013C18.4571 2.97739 14.163 -1.10111 12.7793 0.282735C11.3955 1.66648 15.4739 5.96052 16.7568 7.24325C18.0395 8.52608 22.3335 12.6045 23.7173 11.2207C25.101 9.83698 21.0226 5.54295 19.7398 4.26013Z" fill="#C5CBD1"/>
                                        <path d="M8.27704 4.78508C5.3444 7.71768 4.33743 11.9835 5.64881 15.9179C5.68331 16.0212 5.74157 16.1154 5.81873 16.1926L7.80745 18.1814C7.8847 18.2585 7.97887 18.3168 8.08228 18.3513C12.0166 19.6627 16.2824 18.6557 19.215 15.723L22.1482 12.79C20.5176 12.3823 18.4064 10.8816 15.7624 8.23757C13.1185 5.59363 11.6177 3.48257 11.2101 1.85193L8.27704 4.78508Z" fill="#C5CBD1"/>
                                        <path d="M4.42298 16.5939L3.22397 17.8125H2.10914C0.945891 17.8125 0 18.7387 0 19.9021C0 21.0256 0.883219 21.9476 1.99162 22.0083C2.02031 22.5274 2.23589 23.0119 2.60634 23.3823C3.0045 23.7805 3.5347 24 4.09791 24C5.26125 24 6.1875 23.0542 6.1875 21.8908V20.776L7.40611 19.577C7.18903 19.4736 6.9832 19.3459 6.813 19.1757L4.82428 17.187C4.65412 17.0168 4.52639 16.811 4.42298 16.5939V16.5939Z" fill="#C5CBD1"/>
                                    </svg>
                                </div>
                                <img src='/local/static/img/png/Pizza02.png'
                                     alt="Итальянская пицца"
                                     className="basket-modal__img-pizza"/>
                            </div>
                            <div className="basket-modal__wrap-text">
                                <span className="basket-modal__title-pizza">Маргарита</span>
                                <span className="basket-modal__size-pizza">30 см</span>
                            </div>
                            <div className="basket-modal__wrap-count">
                                <button className="basket-modal__minus "></button>
                                <input type="text" className="basket-modal__count" value='1' disabled/>
                                <button className="basket-modal__plus"></button>
                            </div>
                            <div className="basket-modal__wrap-price">
                                <span className="basket-modal__price">479 руб</span>
                                <button className="basket-modal__remove-item"></button>
                            </div>
                        </li>
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
        </div>

    );
};

export default Modal;