export const initOTPLess = (callback) => {
  if (window.otpless) return;

  window.otpless = callback;
  const isScriptLoaded = document.getElementById("otpless-sdk");
  if (isScriptLoaded) return;
  const otplessSDK = document.createElement("script");
  otplessSDK.id = "otpless-sdk";
  otplessSDK.type = "text/javascript";
  otplessSDK.src = "https://otpless.com/v2/auth.js";
  otplessSDK.setAttribute("data-appid", "RXF5HPDIPQNCY9Z9O9RJ");

  document.head.appendChild(otplessSDK);
  otplessSDK.onload = () => {
    console.log("OTPLess SDK loaded successfully");
  };

  otplessSDK.onerror = (error) => {
    console.error("Failed to load OTPLESS SDK", error);
  };
};
