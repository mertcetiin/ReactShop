import { useFormik } from 'formik';
import { useState } from 'react'
import { loginSchema } from '../Schema';

function HomePage() {


    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema
    })

    const [isOpen, setIsOpen] = useState(false);

    const handleLogin = () => {
        setIsOpen(true)
    }

    return (
        <div>
            <header>
                <button onClick={handleLogin}>Login</button>
            </header>
            {isOpen ? <div>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type='email'
                        id='email'
                        onChange={handleChange}
                        value={values.email}
                        className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <p>{errors.email}</p>}
                    <label>Password</label>
                    <input type='password'
                        id='password'
                        onChange={handleChange}
                        value={values.password}
                        className={errors.password ? 'input-error' : ''}
                    />
                    {errors.password && <p>{errors.password}</p>}
                    <button type='submit'>Login</button>
                </form></div> : ''}

            <div className="container">
                <h1>Mert Çetin</h1>
            </div>
        </div>
    )
}

export default HomePage