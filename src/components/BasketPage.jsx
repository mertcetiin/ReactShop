import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/BasketPage.css'


function BasketPage({ products }) {

    // const totalPrice = products.reduce((total, price) => total + price)


    return (
        <div className='basket-div'>
            {products.some(item => item.count > 0) ? (
                <div>
                    {products.map((item) => (
                        <div key={item.id}>
                            <h2>{item.name} - {item.count || 0}</h2>
                        </div>
                    ))}
                    {/* <p>Toplam Tutar: {totalPrice}</p>  */}
                    <p>Toplam Tutar: </p>
                </div>
            ) : (
                <p className='basket-p'><ShoppingCartIcon /> You have no items in your basket!</p>
            )}

            <Link to='/' className='basket-link'>Continue Shopping</Link>
        </div>
    )
}

export default BasketPage;