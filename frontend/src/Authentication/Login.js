import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import './Autcss.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Reset email, password, and recaptcha errors before each login attempt
      setEmailError('');
      setPasswordError('');

      // Validate email, password, and recaptcha
      if (!email) {
        setEmailError('Email is required');
        return;
      }

      if (!password) {
        setPasswordError('Password is required');
        return;
      }

      if (!recaptchaValue) {
        // Handle recaptcha not solved
        // You can display an error message or prevent form submission
        return;
      }

      setIsLoading(true);

      // Your existing fetch logic here...
      const response = await fetch('http://localhost:5000/app/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email: email, Password: password, Recaptcha: recaptchaValue }),
      });

      // Check if login is successful based on your server response logic
      if (response.ok) {
        // Navigate to /app/welcomeHome on successful login
        navigate('/app/welcomeHome');
      } else {
        // Handle login failure, show error message, 
        alert('Error: userLogin failed');
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Error during login:', error);
      alert("error in loggin")
      setIsLoading(false);
    }
  };

  return (
    <div className='App App-header'>
    <h2>Login</h2>
      <label htmlFor="email" className="text_head">
        Email:
      </label>
      <input
        type="email"
        id="email"
        placeholder="eg@gits.com"
        className="inputfield"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailError(''); 
        }}
      />
      {emailError && <div style={{ color: 'red', backgroundColor: '#282c34',fontFamily:"cursive",fontSize:'15px' }}>{emailError}</div>}

      <label htmlFor="password" className="text_head">
        Password:
      </label>
      <input
      className="inputfield"
        type="password"
        id="password"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

<ReCAPTCHA
  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
  onChange={(value) => setRecaptchaValue(value)}
/>

      <br />
      <button type="button" className='button-5' onClick={handleLogin} disabled={isLoading}> 
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default Login;

