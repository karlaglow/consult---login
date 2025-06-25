import React, { useState } from "react";
import "./style.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { username, password });
    // Here you would typically make an API call to authenticate
  };

  return (
    <div className="login" data-model-id="6052:794">
      <form onSubmit={handleLogin} className="frame">
        <div className="text-wrapper">Login</div>

        <div className="inputs">
          <div className="label-wrapper">
            <div className="label">Username</div>
          </div>

          <div className="input">
            <div className="default">
              <div className="field">
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-field"
                  placeholder="Enter your username"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="inputs">
          <div className="label-wrapper">
            <div className="label">Password</div>
          </div>

          <div className="input">
            <div className="default">
              <div className="field">
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  placeholder="Enter your password"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-password"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="button">
          <span className="div">Login</span>
        </button>

        <a 
          href="https://live.payleadr.com/forgotPassword/identify" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-wrapper-2"
        >
          Forgot password?
        </a>
      </form>

      <div className="frame-2">
        <a 
          href="https://www.getaglow.co/aus/privacy-cookie-policy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-wrapper-3"
        >
          Privacy policy
        </a>

        <p className="p">@2025 aglow. All rights reserved</p>
      </div>

      <a href="https://getaglow.co" target="_blank" rel="noopener noreferrer">
        <img
          className="group"
          alt="Aglow Logo"
          src="https://c.animaapp.com/NlHuy6Mg/img/group-2664.png"
        />
      </a>
    </div>
  );
};
