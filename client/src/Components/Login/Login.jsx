import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogin } from '../../store/auth/authSlice'
import './Login.css'

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLogin = useSelector((state) => state.auth.userLogin);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {email, password};
        dispatch(handleLogin(userData));
    }

    useEffect(() => {
        if(isLogin) {
            setEmail('');
            setPassword('');
            navigate('/workspace');
        }
    }, [isLogin])

    return (
        <div className='login_div' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <form className='login_form' onSubmit={handleSubmit}>
                <p className='login_title'>Login</p>
                <div className='input_box'>
                    <div className='login_input' style={{display: 'flex', flexDirection: 'column', width: '300px'}}>
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>

                    <div className='login_input' style={{display: 'flex', flexDirection: 'column', width: '300px'}}>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>

                    <div className='login_button'>
                        <button type='submit'>
                            Submit
                        </button>
                    </div>


                    <div className='registration_href'>
                        <span>New User? <Link to='/registration' style={{color: '#8A9A5B', textDecoration: 'none', }}>Join Us</Link></span>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default Login