import React from 'react'
import '../styles/LikePage.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import '../styles/LikePage.css'


function LikePage({ products }) {

    const navigate = useNavigate();

    return (
        <div className="container">
            {products.some(item => item.likeCount > 0) ? (
                <div>
                    {products.map((item) => (
                        <div key={item.id}>
                            {item.likeCount > 0 ? (
                                <div className='row' >
                                    <img src={item.src} />
                                    <h2>{item.name}</h2>
                                    <div>
                                        <p>{item.price.toLocaleString('tr-TR')} TL</p>
                                        <button className='likeIcon-btn'><FavoriteIcon /></button>
                                    </div>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className='likePage-div'>
                    <p className='likePage-icon'><FavoriteIcon /> No product in your favorites</p>
                    <button onClick={() => navigate('/')} className='start-btn'>Start Shopping</button>
                </div>
            )}
        </div>
    )
}

export default LikePage;


{/* <div className="container">
            {products.map((item) => (
                <div className='row' key={item.id}>
                    <img src={item.src} />
                    <h2>{item.name}</h2>
                    <div>
                        <p>{item.price.toLocaleString('tr-TR')} TL</p>
                        <button className='likeIcon-btn'><FavoriteIcon /></button>
                    </div>
                </div>
            ))}
        </div> */}