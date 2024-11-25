"use client";
// import styles from "./page.module.css";

import { useEffect } from "react";
import { initOTPless } from "./utils/initOtpless";
import HomePage from "../../components/Homepage/Homepage";
import "./globals.css"
export default function Home() {
  useEffect(() => initOTPless(callback), []);

  const callback = (otplessUser) => {
    console.log(otplessUser);
    alert(JSON.stringify(otplessUser));
  };

  return (
    <div>
      <main>
        <HomePage />
        <div id="otpless-login-page"></div>
      </main>
    </div>
  );
}
