export default function About() {
  return (
    <>
      <section id="about" className="about-section">

        <h2 className="about-heading">
          About Me
        </h2>

        <div className="about-container">

          {/* Left */}
          <div className="about-left">
            <img
              src="/image.png"
              alt="Profile"
              className="about-avatar"
            />

            <h3 className="about-name">
              Nikhil Chauhan
            </h3>

            <p className="about-role">
              Full Stack Web Developer | React | Node.js | MongoDB
            </p>

            <div className="about-contact">
              <p>Email: <span>nc388782@gmail.com</span></p>
              <p>Phone: <span>+919569324843</span></p>
              <p>Location: <span>Lucknow, India</span></p>
            </div>
          </div>

          {/* Right */}
          <div className="about-right">
            <p>
              Hi! I'm <span className="highlight">Nikhil Chauhan</span>, a passionate 
              <span className="yellow"> Full Stack Web Developer</span> 
              from Lucknow, India.
            </p>

            <p>
              I specialize in building <span className="pink">modern</span> and 
              <span className="highlight"> responsive web applications</span>. My tech stack includes 
              <span className="highlight"> React</span>, 
              <span className="highlight"> Node.js</span>, 
              <span className="highlight"> Express</span>, 
              <span className="highlight"> MongoDB</span>.
            </p>

            <p>
              I enjoy turning ideas into functional websites, writing 
              <span className="pink"> clean code</span>, 
              and learning new technologies to create impactful projects.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="about-skills">

          <div className="skill-card border-cyber">
            <h4>Frontend Development</h4>
            <p>Building responsive and dynamic user interfaces with React and CSS.</p>
          </div>

          <div className="skill-card border-pink">
            <h4>Backend Development</h4>
            <p>Creating robust APIs using Node.js, Express, and MongoDB.</p>
          </div>

          <div className="skill-card border-yellow">
            <h4>Database Management</h4>
            <p>Designing and managing efficient NoSQL databases.</p>
          </div>

          <div className="skill-card border-purple">
            <h4>Version Control</h4>
            <p>Using Git and GitHub for collaboration and deployment.</p>
          </div>

        </div>
      </section>

      {/* CSS Inside Same File */}
      <style>{`
        .about-section {
          padding: 100px 60px;
          background: #111827;
          color: white;
          font-family: Arial, sans-serif;
        }

        .about-heading {
          font-size: 36px;
          font-weight: bold;
          color: #00ffff;
          border-bottom: 2px solid #00ffff;
          display: inline-block;
          padding-bottom: 5px;
          margin-bottom: 40px;
        }

        .about-container {
          display: flex;
          gap: 50px;
          flex-wrap: wrap;
        }

        .about-left {
          display: flex;
          flex-direction: column;
          gap: 15px;
          min-width: 250px;
        }

        .about-avatar {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          border: 4px solid #00ffff;
        }

        .about-name {
          font-size: 20px;
          font-weight: bold;
        }

        .about-role {
          color: #9ca3af;
          font-size: 14px;
        }

        .about-contact span {
          color: #00ffff;
        }

        .about-right {
          flex: 1;
          font-size: 18px;
          line-height: 1.6;
        }

        .highlight {
          color: #00ffff;
          font-weight: bold;
        }

        .yellow {
          color: #facc15;
          font-weight: bold;
        }

        .pink {
          color: #ec4899;
        }

        .about-skills {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 60px;
        }

        .skill-card {
          background: #1f2937;
          padding: 20px;
          border-radius: 10px;
          transition: 0.3s ease;
        }

        .skill-card:hover {
          transform: scale(1.05);
        }

        .border-cyber {
          border-left: 5px solid #00ffff;
        }

        .border-pink {
          border-left: 5px solid #ec4899;
        }

        .border-yellow {
          border-left: 5px solid #facc15;
        }

        .border-purple {
          border-left: 5px solid #a855f7;
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 60px 20px;
          }

          .about-container {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
