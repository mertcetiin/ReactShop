import React from 'react'
import { Products } from './Products';
import { Link } from 'react-router-dom';


function BasketPage() {
    return (
        <div>
            <h3>Sepetinizde hiç ürün Bulunmamaktadır</h3>

            {Products.map((item) => (
                <div key={item.id}>
                    <h2>{item.name} x</h2>
                </div>
            ))}

            <Link to='/'>Home Page</Link>
        </div>
    )
}

export default BasketPage