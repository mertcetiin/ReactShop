import React from 'react'
import HomePage from './HomePage';
import { createSchema } from '../Schema';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


function CreateAccont() {

    const navigate = useNavigate();

    const { values, errors, handleSubmit, handleChange } = useFormik({
        onSubmit: () => {
            navigate('')
        }

    })

    return (
        <div className='form-div'>
            <form>
                <div className='input-div'>
                    <label>Email</label>
                    <input />
                </div>
                <div className='input-div'>
                    <label>Password</label>
                    <input />
                </div>
                <div className='input-div'>
                    <label>Confirm Password</label>
                    <input />
                </div>
                <button type='submit' className='create-btn'>Create Accont</button>
            </form>

        </div>
    )
}

export default CreateAccont;