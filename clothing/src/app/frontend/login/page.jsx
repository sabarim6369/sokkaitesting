'use client';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initOTPless } from '@/app/utils/initOtpless';
import Modal from 'react-modal';

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/Auth/login', formData);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      if(response.status===401){
        toast.warning("Email not exists.Sign in to contiue..");
        return;
      }
      toast.success("Login succesfull")
      setTimeout(() => {
        // router.back();
        // window.location.reload();
        router.push("/")
      }, 2000);
    } catch (err) {
      console.error('Login error:', err);
      const errorMessage = err.response ? err.response.data.error : err.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    try {
      initOTPless(callback); // Reinitialize OTPless here
    } catch (error) {
      console.error('Error initializing OTPless:', error);
      toast.error('Error initializing OTPless.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const callback = async (otplessUser) => {
    if (!otplessUser) {
      toast.error("OTPless authentication failed.");
      return;
    }
  
    try {
      const { identities } = otplessUser;
      const email = identities[0]?.identityValue;
  
      const response = await axios.post("/api/Auth/login", { email });
  
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        toast.success("Login successful!");
        router.push("/");
      } else if (response.status === 401) {
        const errorMessage = response.data.error || "Email not exists. Please signup to continue";
        toast.error("email not exists"); // Show the message from backend
      } else {
        toast.error("Unexpected response from login API.");
      }
    } catch (error) {
     toast.error("Email not exists.signup to continue")
     setTimeout(()=>{
      router.push("/frontend/signup")
     },3000)
   
    }
  };
  


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
          <button className="back-button" onClick={() => router.push('/')}>
            Back to website →
          </button>
          <h1 className="form-header">Log In</h1>
          <p className="form-subheader">
            Don't have an account?{' '}
            <button
              onClick={() => router.push('/frontend/signup')}
              className="signup-link"
            >
              Sign up
            </button>
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group password-group">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '🙈'}
              </span>
            </div>

            <button type="submit" className="login-button">
              {loading ? 'Loading...' : 'Log In'}
            </button>

            <div className="divider">Or log in with</div>

            <div className="social-buttons">
              <button className="google-button" onClick={(e) => openModal(e)}>
                Google
              </button>
              <button className="apple-button">Apple</button>
            </div>

            <div className="forgot-password">
              <a href="/forgot-password">Forgot your password?</a>
            </div>
          </form>
        </div>
      </div>

      {/* Modal for OTPless */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="OTPless Login"
        className="otpless-modal"
        overlayClassName="otpless-overlay"
      >
        <div className="otpless-container">
          <div id="otpless-login-page"></div>
        </div>
        <button onClick={closeModal} className="close-modal-button">
          Close
        </button>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default Login;
