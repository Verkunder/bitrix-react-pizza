import React, {useState} from 'react';
import SizeBtn from "./SizeBtn";

const PizzaCatalogItem = ({name, description, size, price, icon, img, pizzaSize}) => {

    const [newPizzaSize, setPizzaSize] = useState(pizzaSize)
    const [newSize, setSize] = useState(size)

    const resize = (item) => {
        setSize(item)
        if (item == '20') {
            setPizzaSize('small')
        }
        if (item == '30') {
            setPizzaSize('middle')
        }
        if (item == '40') {
            setPizzaSize('big')
        }
    }

    return (
        <div className="catalog-pizza-card__block hot">
            <div className="catalog-pizza-card__block-item">
                <div className="catalog-pizza-card__wrap--left--side--mobile">
                    <div className="catalog-pizza-card__wrap--icon">
                        {icon.map(item => { return <img width='24px' height='24px' src={'local/static/img/svg/' + item} alt=""/>})}
                    </div>
                    <div className="catalog-pizza-card__wrap--img">
                        <img src={"/local/static/img/png/" + img} alt={name}
                             className={"catalog-pizza-card__img " + newPizzaSize} />
                    </div>
                </div>
                <div className="catalog-pizza-card__wrap--right--side--mobile">
                    <div className="catalog-pizza-card__wrap--content">
                        <h4 className="catalog-pizza-card__title">{name}</h4>
                        <div className="catalog-pizza-card__recept">{description}</div>
                    </div>
                    <div className="catalog-pizza-card__wrap--content">
                        <div className="catalog-pizza-card__title--size">Размер, см:</div>
                        <SizeBtn size={newSize} resize={resize} />
                        <div className="catalog-pizza-card__price">от {price} руб.</div>
                        <button className="catalog-pizza-card__buy"т>Заказать</button>
                        <button className="catalog-pizza-card__buy mobileBuy">от {price} руб.</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaCatalogItem;