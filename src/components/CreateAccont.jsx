import React from 'react'
import { createSchema } from '../Schema';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateAccont.css'


function CreateAccont() {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000)
        })
        actions.resetForm();
        navigate('/')
    }


    const { values, errors, handleSubmit, handleChange, isSubmitting } = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: createSchema, onSubmit
    })

    const navigate = useNavigate();

    return (
        <div className='createForm-div'>
            <form onSubmit={handleSubmit}>
                <div className='createInput-div'>
                    <label>Email</label>
                    <input type='email'
                        id='email'
                        onChange={handleChange}
                        value={values.email}
                    />
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                <div className='createInput-div'>
                    <label>Password</label>
                    <input type='password'
                        id='password'
                        onChange={handleChange}
                        value={values.password}
                    />
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>
                <div className='createInput-div'>
                    <label>Confirm Password</label>
                    <input type='password'
                        id='confirmPassword'
                        onChange={handleChange}
                        value={values.confirmPassword}
                    />
                    {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
                </div>
                <button type='submit' className='createLogin-btn' disabled={isSubmitting}>Create Accont</button>
            </form>

        </div>
    )
}

export default CreateAccont;