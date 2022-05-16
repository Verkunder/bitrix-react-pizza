import React, {useState, useEffect} from 'react';

const TheModalItem = ({name, size, price, count, removeItem, icon, img, totalSum}) => {
    const [inCount, setCount] = useState(count)
    const plus = () => {
        setCount(inCount+1)
    }
    const minus = () => {
        if (inCount - 1 != 0) {
            setCount(inCount-1)
        } else {
            removeItem(name)
        }
    }

    return (
        <div className="basket-modal__item">
            <div className="basket-modal__wrap--img">
                <div className="basket-modal__wrap--icons--type">
                    {icon.map(item => { return <img src={'local/static/img/svg/' + item} alt=""/>})}
                </div>
                <img src={"/local/static/img/png/" + img} alt={name}
                     className="basket-modal__img--pizza" />
            </div>
            <div className="basket-modal__wrap--text">
                <div className="basket-modal__title--pizza">
                    {name}
                </div>
                <div className="basket-modal__size--pizza">{size} см</div>
            </div>
            <div className="basket-modal__wrap--count">
                <button className={"basket-modal__minus"} onClick={minus}></button>
                <input type="text" className="basket-modal__count" value={inCount} />
                <button className="basket-modal__plus" onClick={plus}></button>
            </div>
            <div className="basket-modal__wrap--price">
                <div className="basket-modal__price">{price * inCount} руб</div>
                <button className="basket-modal__remove--item" onClick={() => removeItem(name)}></button>
            </div>
        </div>
    );
};

export default TheModalItem;