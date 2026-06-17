"use client";
import "../styles/login.scss";
import onboardingImage from "../assets/images/onboarding.jpg";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/overview");
  };

  return (
    <div className="login-page">
      <div className="login-panel">
        <div className="login-card">
          <img src="/modifi_logo.png" alt="MODIFI" className="login-logo" />

          <h2 className="login-title">Hello Peter</h2>

          <p className="login-subtitle">Please enter a password</p>

          <label className="login-label">Password</label>

          <input
            type="password"
            value="password123"
            readOnly
            className="login-input"
          />

          <button className="login-button" onClick={handleLogin}>
            Enter Demo
          </button>

          <a href="#" className="privacy-link">
            Privacy Statement for Customers
          </a>
        </div>
      </div>

      <div className="login-image">
         <img src={onboardingImage.src} alt="Port" />
      </div>
    </div>
  );
}
