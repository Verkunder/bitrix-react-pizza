import React, {useState, useEffect} from 'react';
import Catalog from '/local/static/json/catalog.json'
import SizeBtn from "./components/SizeBtn";
import axios from "axios";
import Basket from '/local/static/json/basket.json'
import Filter from "./components/Filter";
import PizzaCatalogItem from "./components/PizzaCatalogItem";
import Modal from "./components/Modal";

const Pizza = () => {

    const [load, setLoad] = useState(true)
    const [status, setStatus] = useState(true)
    const [catalog, setCaatalog] = useState(Catalog)
    const [isModal, setModal] = useState(false);
    const [order, setOrder] = useState(Basket)

    const addBusket = (name, size, price, icon, img) => {
        const sizeBusket = order.length + 1
        const newOrder = order.push({
            id: sizeBusket,
            name: name,
            size: size,
            price: price,
            count: 1,
            icon: icon,
            img: img
        })
        openModal()
    }

    const filt = (key) => {
        if (key === 'all') {
            const newCatalog = Catalog
            setCaatalog(newCatalog)
        } else {
            const newCatalog = Catalog.filter(({sort}) => sort === key)
            setCaatalog(newCatalog)
        }
    }

    const request = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .catch((e) => {
                setStatus(false)
                console.log(e)
            })
    }

    const openModal = () => {
        setModal(true)
        console.log(isModal)
    }

    useEffect(() => {
        setTimeout(() => {
            const loading = false
            setLoad(loading)
        }, 1500)
        request()
    }, [])

    const style = {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        margin: "0 0 55px 0",
        font: 'normal 900 52px/150% "Alegreya", sans-serif'
    }

    const loader = () => {
        if (status === true) {
            if (load === true) {
                return (
                    <div className='loader'>
                        <img width='60px' src="local/static/img/gif/Pizza spinning.gif" alt=""/>
                        <h2 style={style}>Загрузка вкусной пиццы...</h2>
                    </div>
                )
            }
        } else {
                return (
                    <div className='loader'>
                        <h1 style={style}>Упс, пицца недоступна...</h1>
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
            {catalog.map(({name, description, size, price, icon, img, pizzaSize}) => <PizzaCatalogItem addBusket={addBusket} openModal={openModal} pizzaSize={pizzaSize} size={size} name={name} icon={icon} price={price} description={description} img={img} />)}
        </div>
        </div>
        <Modal isVisible={isModal}
               onClose={() => setModal(false)}
               basket={order}
        />
    </>
    );
};

export default Pizza;