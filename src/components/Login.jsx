import React, { useState } from 'react';
import { Twitter } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // tambahkan useNavigate
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // inisialisasi useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    // TODO: Gantilah logika berikut dengan logika autentikasi atau panggilan API yang sesungguhnya
    if (username === 'contoh' && password === 'password') {
      console.log('Login berhasil');
      // Navigasi ke halaman home
      navigate('/home');
    } else {
      setError('Username atau password salah');
    }
  };

  return (
    <div className='Homepage'>
      <div className='homepage__center'>
        <div className='homepage__topRight'>
          <Twitter className="sidebar__twitter-icon" />
          <h1 className='homepage__topRight__Title'>Happening now</h1>
          <h2 className='homepage__topRight__subtitle'>Join Twitter Today</h2>
          <div className='homepage_topRight__Buttons'>
            <form onSubmit={handleLogin}>
              <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type='submit' className='primary__button'>
                Masuk
              </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
          <div className='homepage_topRight__Buttons'>
            <button className='primary__button'>sign up with Google</button>
            <button className='primary__button'>sign up with Apple</button>
            <button className='secondary__button'>sign up with Phone or Email</button>
            <p className='homepage_topRight__policies'>
              by signing up, you agree to the <a href='/'>terms of service</a> and {" "}
              <a href='/'>privacy policy</a>, including {" "}
              <a href='/'>our cookie use.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
