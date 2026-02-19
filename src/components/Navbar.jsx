import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Nikhil.</h1>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact" className="hire-btn">
            Hire Me
          </Link>
        </div>
      </nav>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 80px;
          z-index: 1000;
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #00ffff;
        }

        .nav-links {
          display: flex;
          gap: 24px;
          font-size: 14px;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          transition: 0.3s;
        }

        .nav-links a:hover {
          color: #00ffff;
        }

        .hire-btn {
          padding: 8px 16px;
          background: #00ffff;
          color: black !important;
          border-radius: 8px;
          transition: 0.3s;
        }

        .hire-btn:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 16px 30px;
          }

          .nav-links {
            gap: 16px;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}
