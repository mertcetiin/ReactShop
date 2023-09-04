import React from 'react'
import HomePage from './HomePage';
import { createSchema } from '../Schema';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import '../styles/CreateAccont.css'


function CreateAccont() {


    const { values, errors, handleSubmit, handleChange } = useFormik({
        onSubmit: () => {

        }

    })

    return (
        <div className='createForm-div'>
            <form>
                <div className='createInput-div'>
                    <label>Email</label>
                    <input />
                </div>
                <div className='createInput-div'>
                    <label>Password</label>
                    <input />
                </div>
                <div className='createInput-div'>
                    <label>Confirm Password</label>
                    <input />
                </div>
                <Link to='/' className='createLogin-btn'>Create Accont</Link>
            </form>

        </div>
    )
}

export default CreateAccont;