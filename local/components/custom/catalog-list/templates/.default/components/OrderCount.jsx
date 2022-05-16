import React from 'react';
import ReactDOM from "react-dom";

const OrderCount = ({basket, openModal}) => {

    const order = () => {
        if (basket.length !== 0) {
        if (basket.length > 1) {
            return <div className="basket__items--text smallText">{basket[0].name} и&nbsp;ещё {basket.length - 1}&nbsp;пиццы</div>
        }
        if (basket.length = 1) {
            return <div className="basket__items--text smallText">{basket[0].name}</div>
        }
        } else {
            return <div className="basket__items--text smallText">Корзина пуста</div>
        }
    }

    return ReactDOM.createPortal(
        <>
            <div className="basket__wrap--icon" onClick={openModal}>
                <img src="/local/static/img/svg/basket-icon.svg" alt="Корзина" className="basket__icon" />
                    <div className="basket__count--icon" style={{
                        display: basket.length !== 0 ? '' : 'none'
                    }}>{basket.length}</div>
            </div>
            <div className="basket__text"  onClick={openModal}>
                <div className="basket__text--order">Ваш заказ</div>
                <div className="basket__items--text smallText">{order()}</div>
            </div>
        </>,
        document.getElementById('basket')
    );
};

export default OrderCount;