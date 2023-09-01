import React from 'react'
import HomePage from './HomePage';
import { createSchema } from '../Schema';
import { useFormik } from 'formik';


function CreateAccont() {

    const { values, errors, handleSubmit, handleChange } = useFormik({

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
                <button className='create-btn'>Create Accont</button>
            </form>

        </div>
    )
}

export default CreateAccont;