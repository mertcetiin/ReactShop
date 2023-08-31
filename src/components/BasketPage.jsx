import React from 'react'
import { Link } from 'react-router-dom';


function BasketPage({ products }) {

    return (
        <div>
            {products.some(item => item.count > 0) ? (
                <div>
                    {products.map((item) => (
                        <div key={item.id}>
                            <h2>{item.name} x {item.count || 0}</h2>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Sepetinizde hiç ürün Bulunmamaktadır</p>
            )}

            <Link to='/'>Home Page</Link>
        </div>
    )
}

export default BasketPage;