'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import './login.css';

const page = () => {
  const router = useRouter();

  const handleSignUpRedirect = () => {
    router.push('/frontend/signup');
  };
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const backgrounds = [
    '/images/login/a4.jpg',
    '/images/login/a3.jpg',
    '/images/login/a6.webp',
    '/images/login/a7.jpg',
    '/images/login/a8.jpg',
    '/images/login/a11.jpg',
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="login-container">
  {/* Left Section */}
  <div className="left-section">
    <Image
      src={backgrounds[backgroundIndex]}
      alt="Background"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      quality={100}
    />
    <div className="overlay">
      <h2>Welcome Back!</h2>
      <p>Log in to access your account.</p>
    </div>
  </div>

  {/* Right Section */}
  <div className="right-section">
    <div className="form-card">
      <button className="back-button">Back to website →</button>
      <h1 className="form-header">Log In</h1>
      <p className="form-subheader">
            Don't have an account? 
            <button
              onClick={handleSignUpRedirect}
              className="signup-link"
              style={{
                background: 'none',
                border: 'none',
                color: '#6f42c1',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Sign up
            </button>
          </p>

      <form className="login-form">
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>

        <div className="form-group password-group">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '👁️' : '🙈'}
          </span>
        </div>

        <button type="submit" className="login-button">Log In</button>

        <div className="divider">Or log in with</div>

        <div className="social-buttons">
          <button className="google-button">Google</button>
          <button className="apple-button">Apple</button>
        </div>

        <div className="forgot-password">
          <a href="/forgot-password">Forgot your password?</a>
        </div>
      </form>
    </div>
  </div>
</div>

  );
}

export default page