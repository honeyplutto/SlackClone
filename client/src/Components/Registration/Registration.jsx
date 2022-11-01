import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleRegistration } from '../../store/auth/authSlice';
import './Registration.css'

function Registration() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const success = useSelector((state) => state.auth.success);

    const handleRegistation = (e) => {
        e.preventDefault();
        const userData = {name, email, password};
        dispatch(handleRegistration(userData));
    }

    useEffect(() => {
        if(success) {
            setName('');
            setEmail('');
            setPassword('');
            navigate('/login');
        }
    }, [success]);

    return (
        <div className='registration_div' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <form className='registration_form' onSubmit={(e) => {handleRegistation(e)}}>
                <p className='registration_title'>Registration</p>
                <div className='input_box'>
                    <div className='registration_input' >
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
                    </div>

                    <div className='registration_input' >
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>

                    <div className='registration_input' >
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>

                    <div className='registration_button'>
                        <button type='submit'>
                            Submit
                        </button>
                    </div>

                    <div className='login_href'>
                        <span>Already Have Account? <Link to='/login' style={{color: '#8A9A5B', textDecoration: 'none'}}>Login</Link></span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Registration