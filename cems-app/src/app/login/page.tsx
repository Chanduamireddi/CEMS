'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';  // ✅ Import useRouter
import "../../styles/login.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const router = useRouter();  // ✅ Initialize router

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();

    if (res.ok) {
      alert(data.message);          // ✅ Show success message
      router.push('/dashboard');    // ✅ Redirect to Dashboard
    } else {
      alert(data.message);          // ❌ Show error message if login fails
    }
  };

  return (
    <div className="login-container">
      <div className="form-card">
        <h2 className="form-title">LOGIN !!!!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="User name"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <p className="forgot-password">
            <Link href="/forgotpassword">Forgot your password?</Link>
          </p>

          <button type="submit" className="login-btn">SUBMIT</button>
        </form>
        <p className="register-link">
          Need an account? <Link href="/register">Click here to Register ....</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
