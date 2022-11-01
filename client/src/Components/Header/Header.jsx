import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom';
import { handleLogout, reset } from '../../store/auth/authSlice'
import Avatar from '../Avatar/Avatar';
import './Header.css'

function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : '';
    const userLogin = JSON.parse(localStorage.getItem('userInfo'));

    const logOut = (e) => {
        e.preventDefault();
        dispatch(handleLogout());
        dispatch(reset())
        navigate('/registration')
    }

    return (
        <div>
            {userLogin ? (
                <div className='header'>
                    <div style={{display: 'flex', justifyContent: 'center', alignItem: 'center'}}>
                        <p style={{textDecoration: 'none', color: '#8A9A5B', fontSize: '24px', margin: '0px 10px'}}>
                            Welcome {user.name}
                        </p>
                    </div>
                    <div className='logout_button'>
                        <button onClick={(e) => {logOut(e)}} className='header_button' >
                            Logout
                        </button>
                    </div>
                </div>
                ) : (
                <div className='header' >
                    <Link to='/login' style={{textDecoration: 'none', color: '#8A9A5B', fontSize: '28px', margin: '0px 10px', fontWeight: '700'}}>
                        Login
                    </Link>
                    <Link to='/registration' style={{textDecoration: 'none', color: '#8A9A5B', fontSize: '28px', margin: '0px 10px', fontWeight: '700'}}>
                        Registration
                    </Link>
                </div>
                )}
                {/* <Avatar /> */}
        </div>
    )
}

export default Header