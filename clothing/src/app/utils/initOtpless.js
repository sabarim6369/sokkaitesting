export const initOTPless = (callback) => {
  Reflect.set(window, "otpless", callback);
  const isScriptLoaded = document.getElementById("otpless-sdk");
  if (isScriptLoaded) return;

  const otplessSDK = document.createElement("script");
  otplessSDK.id = "otpless-sdk";
  otplessSDK.type = "text/javascript";
  otplessSDK.src = "https://otpless.com/v2/auth.js";
  // TODO: Add your app id
  otplessSDK.setAttribute("data-appid", "2EB25C8X1GTY1S1N6H84");

  document.head.appendChild(otplessSDK);
};
