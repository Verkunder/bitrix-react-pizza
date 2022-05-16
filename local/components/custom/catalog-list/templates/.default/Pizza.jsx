import React, {useState, useEffect} from 'react';
import Catalog from '/local/static/json/catalog.json'
import SizeBtn from "./SizeBtn";
import axios from "axios";
import Basket from '/local/static/json/basket.json'
import Filter from "./Filter";
import PizzaCatalogItem from "./PizzaCatalogItem";

const Pizza = () => {

    const [load, setLoad] = useState(true)
    const [status, setStatus] = useState(true)
    const [catalog, setCaatalog] = useState(Catalog)

    const filt = (key) => {

        if (key === 'all') {
            const newCatalog = Catalog
            setCaatalog(newCatalog)
        } else {
            const newCatalog = Catalog.filter(({sort}) => sort === key)
            setCaatalog(newCatalog)
        }
        console.log(newCatalog)
    }

    const request = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .catch((e) => {
                setStatus(false)
                console.log(e)
            })
    }

    useEffect(() => {
        setTimeout(() => {
            const loading = false
            setLoad(loading)
        }, 1500)
        request()
    }, [])

    const loader = () => {
        if (status === true) {
            if (load === true) {
                return (
                    <div className='loader'>
                        <img width='60px' src="local/static/img/gif/Pizza spinning.gif" alt=""/>
                        <h2>Загрузка вкусной пиццы...</h2>
                    </div>
                )
            }
        } else {
                return (
                    <div className='loader'>
                        <h1>Упс, пицца недоступна...</h1>
                    </div>
                )
            }
        }
    return (
    <>
        {loader()}
        <div style={{display: load === true ? 'none' : ''}}>
        <Filter filt={filt} />
        <div className="catalog-pizza-card">
            {catalog.map(({name, description, size, price, icon, img, pizzaSize}) => <PizzaCatalogItem pizzaSize={pizzaSize} size={size} name={name} icon={icon} price={price} description={description} img={img} />)}
        </div>
        </div>
    </>
    );
};

export default Pizza;