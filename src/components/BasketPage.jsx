import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/BasketPage.css'


function BasketPage({ products, totalItemPrice, basketClear }) {

    const totalPrice = totalItemPrice(products);


    return (
        <div className='basket-div'>
            <button onClick={basketClear}>Basket Clear</button>
            {products.some(item => item.count > 0) ? (
                <div>
                    {products.map((item) => (
                        <div key={item.id}>
                            <h2>{item.count > 0 ? `${item.name} - ${item.count}` : ''}</h2>
                        </div>
                    ))}
                    <p>Toplam Tutar: {totalPrice.toLocaleString('tr-TR')} TL</p>
                </div>
            ) : (
                <p className='basket-p'><ShoppingCartIcon /> You have no items in your basket!</p>
            )}

            <Link to='/' className='basket-link'>Continue Shopping</Link>
        </div>
    )
}

export default BasketPage;