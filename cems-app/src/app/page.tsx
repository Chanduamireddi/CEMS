'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mt-5">
      <h1>Welcome to the Community Event Management System!</h1>
      <p>Manage events, connect with communities, and more.</p>

      <div className="mt-4">
        <Link href="/login" className="btn btn-primary me-2">Login</Link>
        <Link href="/register" className="btn btn-secondary">Register</Link>
        <Link href="/forgotpassword" className="link forgotpassword">ForgotPassword</Link>
        <Link href="/dashboard" className="link forgotpassword">Dashbord</Link>
      </div>
    </main>
  );
}
