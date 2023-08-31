import React from 'react'
import { Link } from 'react-router-dom';



function BasketPage({ products }) {


    return (
        <div>
            <p>Sepetinizde hiç ürün Bulunmamaktadır</p>

            {products.map((item) => (
                <div key={item.id}>
                    <h2>{item.name} x {item.count || 0}</h2>
                </div>
            ))}

            <Link to='/'>Home Page</Link>
        </div>
    )
}

export default BasketPage;