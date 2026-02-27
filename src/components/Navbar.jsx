export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Nikhil.</h1>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="hire-btn">
            Hire Me
          </a>
        </div>
      </nav>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

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
      `}</style>
    </>
  );
}