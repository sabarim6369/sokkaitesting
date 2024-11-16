'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './signup.css';
const signup = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleloginRedirect = () => {
    router.push('/frontend/login');
  };
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
          <h2>Join Us Today!</h2>
          <p>Create an account to enjoy exclusive benefits and seamless access.</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="form-card">
          <button className="back-button">Back to website →</button>
          <h1 className="form-header">Create an account</h1>
          <p className="form-subheader">
            Already have an account?  <button
              onClick={handleloginRedirect}
              className="signup-link"
              style={{
                background: 'none',
                border: 'none',
                color: '#6f42c1',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Login
            </button>
          </p>

          <form className="signup-form">
            <div className="form-group form-row">
              <input type="text" id="first-name" name="first-name" placeholder="First Name" required />
              <input type="text" id="last-name" name="last-name" placeholder="Last Name" required />
            </div>

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

            <button type="submit" className="signup-button">Create account</button>

            <div className="divider">Or register with</div>

            <div className="social-buttons">
              <button className="google-button">Google</button>
              <button className="apple-button">Apple</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default signup