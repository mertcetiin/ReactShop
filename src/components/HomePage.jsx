import { useFormik } from 'formik';
import { useState } from 'react'
import { loginSchema } from '../Schema';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Products } from './Products';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../styles/HomePage.css'
import '../styles/Form.css'
import '../styles/LikePage.css'


function HomePage({ totalItemCount, handleCount, handleLikeItem }) {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000)
        })
        actions.resetForm();
        navigate(handleLogin())
    }

    const { values, errors, handleChange, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema, onSubmit
    })

    const [isOpen, setIsOpen] = useState(false);

    const handleLogin = () => {
        setIsOpen((prevLogin) => !prevLogin)
    }

    const navigate = useNavigate();


    return (
        <div>
            <header>
                <button className='LoginDiv' onClick={handleLogin}><LoginIcon />  Login</button>
                <button onClick={() => navigate('/like')} className='likeIcon'><FavoriteBorderIcon /></button>
                <div className='counter-div'>
                    <button onClick={() => navigate('/mybasket')}><ShoppingCartIcon /> {totalItemCount}</button>
                </div>
            </header>

            <div className="container">
                {Products.map((item) => (
                    <div className='row' key={item.id}>
                        <img src={item.src} />
                        <h2>{item.name}</h2>
                        <div>
                            <p>{item.price.toLocaleString('tr-TR')} TL</p>
                            <button onClick={() => handleLikeItem(item.id)} className='likeIcon-btn'><FavoriteBorderIcon /></button>
                        </div>
                        <button onClick={() => handleCount(item.id)}>Add</button>
                    </div>
                ))}
            </div>

            {isOpen ? <div className='form-div'>
                <form onSubmit={handleSubmit}>
                    <button onClick={handleLogin} className='clear-icon'><ClearIcon /></button>

                    <div className='input-div'>
                        <label>Email</label>
                        <input type='email'
                            id='email'
                            onChange={handleChange}
                            value={values.email}
                            className={errors.email ? 'input-error' : ''}
                        />
                    </div>
                    {errors.email && <p className='error'>{errors.email}</p>}
                    <div className='input-div'>
                        <label>Password</label>
                        <input type='password'
                            id='password'
                            onChange={handleChange}
                            value={values.password}
                            className={errors.password ? 'input-error' : ''}
                        />
                    </div>
                    {errors.password && <p className='error'>{errors.password}</p>}

                    <button className='login-btn' type='submit' disabled={isSubmitting}>Login</button>

                    <Link className='create-btn' to='/createaccont'>Create Accont</Link>
                </form></div> : ''}
        </div>
    )
}

export default HomePage;