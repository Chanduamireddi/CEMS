import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Brand Logo */}
          <Link href="/" className="navbar-brand fw-bold fs-3">🎭 CEMS</Link>

          {/* Toggle Button for Mobile View */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Centered Navigation Links */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link href="/dashboard/events" className="nav-link">Events</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>

            {/* Auth Links (Aligned Right) */}
            <div className="d-flex">
              <Link href="/login" className="btn btn-outline-light me-2">Login</Link>
              <Link href="/register" className="btn btn-primary">Register</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-3 fw-bold">Welcome to SocialSync</h1>
          <p className="lead">Your one-stop solution for organizing and participating in community events.</p>
          <Link href="/register" className="btn btn-light btn-lg fw-bold">Get Started</Link>
        </div>
      </header>

      {/* Ongoing Events Section */}
      <section className="container text-center my-5">
        <h2 className="mb-4">🎉 Ongoing Events</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Live Music Concert</h3>
                <p className="card-text">Experience an electrifying night of live performances.</p>
                <button className="btn btn-success">Join Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Art & Cultural Festival</h3>
                <p className="card-text">Immerse yourself in a celebration of arts and traditions.</p>
                <button className="btn btn-success">Join Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Hackathon Challenge</h3>
                <p className="card-text">Show your coding skills and win amazing prizes.</p>
                <button className="btn btn-success">Join Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="container text-center my-5">
        <h2 className="mb-4">🚀 Upcoming Events</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Music Fest</h3>
                <p className="card-text">Join us for an amazing night of music and fun!</p>
                <button className="btn btn-success">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Community Meet</h3>
                <p className="card-text">Engage with fellow members and discuss ideas.</p>
                <button className="btn btn-success">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Charity Run</h3>
                <p className="card-text">Participate in a 5K run for a noble cause.</p>
                <button className="btn btn-success">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="m-0">© {new Date().getFullYear()} CEMS. All rights reserved.</p>
      </footer>
    </div>
  );
}
