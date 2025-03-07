import React, {useState, useEffect} from 'react';
import OrderItem from "./OrderItem";
import ReactDOM from 'react-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalL from '@mui/material/Modal';
import axios from 'axios'

const Modal = ({isVisible, onClose, basket, removeBasket}) => {
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [adres, setAdres] = useState('')
    const [complete, setComplete] = useState(false)
    const [errorName, setNameError] = useState(false)
    const [errorTel, setTelError] = useState(false)
    const [errorAdres, setAdresError] = useState(false)
    const [orderReguest, setOrderRequest] = useState({})

    ///@TODO reduce
    const totalSum = () => {
        let s = 0
        for (let i = 0; i < basket.length; i++) {
            s += basket[i].price * basket[i].count
            console.log(s)
            setTotal(s)
        }
        return s
    }
    const [total, setTotal] = useState(totalSum)

    const incTotal = (price) => {
        setTotal(total => total + price)
    }
    const neincTotal = (price) => {
        setTotal(total => total - price)
    }

    const changeName = (e) => {
        setName(e.target.value)
        setNameError(false)
    }
    const changeTel = (e) => {
        setTel(e.target.value)
        setTelError(false)
    }
    const changeAdres = (e) => {
        setAdres(e.target.value)
        setAdresError(false)
    }

    const removeOrder = () => {
        onClose()
        setComplete(false)
        setAdres('')
        setTel('')
        setName('')
    }

    const compliteOrder = () => {
        if (name, tel, adres !== '') {
            axios.get('local/static/json/complite.json')
                 .then(({data}) => {
                     setComplete(true)
                     setOrderRequest(data)
                     basket.splice(0, basket.length)
                 })
                 .catch((e) => {
                    setComplete(true)
                     setOrderRequest({
                         text: "Ошибка при отправке.",
                         title: "Пожалуйста повторите заказ"
                     })
                    console.log(e)
                 })
        } else {
            if (name === '') {
                setNameError(true)
            }
            if (tel === '') {
                setTelError(true)
            }
            if (adres === '') {
                setAdresError(true)
            }
        }
    }

    useEffect(() => {
        totalSum()
    }, [basket.length])

    if (!isVisible) return null
    return ReactDOM.createPortal(
        <ModalL
            open={isVisible}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="modal"
        >
            <div>
                <div className="modal__wrapper" data-content="basketAndOrderForm"
                     style={{display: complete === false ? '' : 'none'}}>
                    <h3 className="modal__title">Ваш заказ</h3>
                    <button className="modal__close" onClick={onClose}/>
                    <div className="wrap-basket">
                        <ul className="basket-modal">
                            {basket.map(({name, size, price, icon, img, count, id}) => <OrderItem key={id}
                                                                                                  neincTotal={neincTotal}
                                                                                                  incTotal={incTotal}
                                                                                                  id={id}
                                                                                                  removeBasket={removeBasket}
                                                                                                  img={img}
                                                                                                  price={price}
                                                                                                  name={name}
                                                                                                  icon={icon}
                                                                                                  size={size}
                                                                                                  count={count}/>)}
                        </ul>
                        <span className="sum-basket">
            <span className="sum-basket__text">Сумма заказа :</span>
            <span className="sum-basket__sum">{total} руб</span>
        </span>
                    </div>
                    <span className="buy-form__title">Контакты</span>
                    <div className="buy-form__wrap buy-form__wrap--two-сolumn">
                        <div className={
                            name !== '' ? 'buy-form__wrap-input complete' : 'buy-form__wrap-input'
                        }>
                            <input type="text"
                                   className={errorName ? "buy-form__input error" : 'buy-form__input'}
                                   name="firstname"
                                   id="firstname"
                                   data-validation="required"
                                   data-validation-error-msg-required="Поле обязательно для заполнения"
                                   required
                                   value={name}
                                   onChange={(e) => changeName(e)}
                            />
                            <label className="buy-form__label" htmlFor="firstname">Ваше имя</label>
                        </div>
                        <div className={
                            tel !== '' ? 'buy-form__wrap-input complete' : 'buy-form__wrap-input'
                        }>
                            <input
                                value={tel}
                                onChange={(e) => changeTel(e)}
                                type="text"
                                className={errorTel ? "buy-form__input error" : 'buy-form__input'}
                                name="phone"
                                id="phone"
                                data-validation="required"
                                data-validation-error-msg-required="Поле обязательно для заполнения"
                                required
                            />
                            <label className="buy-form__label" htmlFor="phone">Телефон</label>
                        </div>
                    </div>
                    <div className={
                        adres !== '' ? 'buy-form__wrap-input complete' : 'buy-form__wrap-input'
                    }>
                        <div className="buy-form__wrap-input">
                            <input
                                value={adres}
                                onChange={(e) => changeAdres(e)}
                                type="text"
                                className={errorAdres ? "buy-form__input error" : 'buy-form__input'}
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

                    <button type="submit" className="buy-form__btn-buy" onClick={compliteOrder}>Оформить заказ</button>

                    <p className="buy-form__info smallText">Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой
                        конфиденциальности</p>
                </div>
                <div style={{display: complete === true ? '' : 'none'}} className="modal__wrapper"
                     data-content="successBuy">
                    <button className="modal__close" onClick={removeOrder}/>
                    <h3 className="modal__title--seccess">{orderReguest.title}</h3>
                    <p className="modal__text">{orderReguest.text}</p>
                </div>
            </div>
        </ModalL>,
        document.getElementById('footer')
    );
};

export default Modal;