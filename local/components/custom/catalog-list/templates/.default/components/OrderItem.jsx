import React, {useState, useEffect, useContext} from 'react';

const OrderItem = ({name, size, price, count, icon, img, removeBasket, id, incTotal, neincTotal}) => {

    const [newCount, setCount] = useState(count)


    const inc = () => {
        const increment = newCount + 1
        setCount(increment)
        incTotal(price)
    }

    const neinc = () => {
        setCount(newCount => newCount - 1)
        const prices = newCount !== 0 ? price : price
        console.log(newCount + ' ' + price)
        neincTotal(prices)


    }

    return (
        <>
            <li className="basket-modal__item">
                <div className="basket-modal__wrap-img">
                    <div className="basket-modal__wrap-icons-type">
                        <img width='15px' height='15px' src={'local/static/img/svg/' + icon} alt=""/>
                    </div>
                    <img src={'/local/static/img/png/' + img}
                         alt={name}
                         className="basket-modal__img-pizza"/>
                </div>
                <div className="basket-modal__wrap-text">
                    <span className="basket-modal__title-pizza">{name}</span>
                    <span className="basket-modal__size-pizza">{size} см</span>
                </div>
                <div className="basket-modal__wrap-count">
                    <button className={newCount === 0 ? "basket-modal__minus disabled" : 'basket-modal__minus'} onClick={neinc}></button>
                    <input type="text" className="basket-modal__count" value={newCount} disabled/>
                    <button className="basket-modal__plus" onClick={inc}></button>
                </div>
                <div className="basket-modal__wrap-price">
                    <span className="basket-modal__price">{price * newCount} руб</span>
                    <button className="basket-modal__remove-item" onClick={() => removeBasket(id)}></button>
                </div>
            </li>
        </>
    );
};

export default OrderItem;