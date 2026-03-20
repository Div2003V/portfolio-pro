export default function Experience() {
    return (
      <div className="section">
        <h2>Experience</h2>
  
        <div className="card">
          <video className="video-bg" autoPlay loop muted>
            <source src="/videos/ai.mp4" />
          </video>
  
          <h3>Revino</h3>
          <p>AI Automation / DevOps / Full Stack Intern</p>
        </div>
  
        <div className="card">
          <h3>CodeC Technologies</h3>
          <p>Full Stack Development Intern</p>
        </div>
  
        <div className="card">
          <h3>Arc of Code</h3>
          <p>Freelance DSA Content Writer</p>
        </div>
      </div>
    );
  }