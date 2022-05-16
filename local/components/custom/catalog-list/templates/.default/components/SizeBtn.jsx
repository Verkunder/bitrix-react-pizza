import React, {useState} from 'react';

const SizeBtn = ({size, resize}) => {
    const sizeItem = ['20', '30', '40']

    return (
        <div className="catalog-pizza-card__size--list">
            {sizeItem.map(item => {
                if (item == size) {
                    return (
                        <div className="catalog-pizza-card__size--item">
                            <button className="catalog-pizza-card__size--btn active">{item}</button>
                        </div>
                    )
                } else {
                    return (
                        <div className="catalog-pizza-card__size--item">
                            <button className="catalog-pizza-card__size--btn" onClick={() => resize(item)}>{item}</button>
                        </div>
                    )
                }
            })
            }
        </div>
    );
};

export default SizeBtn;