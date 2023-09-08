import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import '../styles/BasketPage.css'


function BasketPage({ products, totalItemPrice, basketClear, handleDelete }) {

    const totalPrice = totalItemPrice(products);

    return (
        <div className='basket-div'>
            <button className='basketClear-btn' onClick={basketClear}><ClearIcon /></button>
            {products.some(item => item.count > 0) ? (
                <div>
                    {products.map((item) => (
                        <div key={item.id}>
                            {item.count > 0 ? (
                                <div>
                                    <h2>{`${item.name} - ${item.count}`}
                                        <button onClick={() => handleDelete(item.id)} className='deleteIcon-btn'><DeleteIcon /></button>
                                    </h2>
                                </div>
                            ) : (
                                ''
                            )}
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