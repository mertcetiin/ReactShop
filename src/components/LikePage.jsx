import React from 'react'
import '../styles/LikePage.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

function LikePage({ products }) {
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
                <p> You have no items in your basket!</p>
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