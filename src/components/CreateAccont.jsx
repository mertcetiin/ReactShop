import React from 'react'
import HomePage from './HomePage';


function CreateAccont() {
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
                <button onClick={<HomePage />} className='create-btn'>Create Accont</button>
            </form>
        </div>
    )
}

export default CreateAccont;