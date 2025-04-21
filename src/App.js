import './App.css';

function App() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">{'X'}</div>
        <ul className="nav-links">
          <li>What we do</li>
          <li>What we think</li>
          <li>Who we are</li>
          <li>Careers</li>
        </ul>
      </nav>

      <div className="hero">
        <div className="left-section">
          <h1>
            TOGETHER WE{' '}
            <span className="highlight">
              E<span className="symbol">X</span>PAND
            </span>
          </h1>
          <button className="cta-button">See what we do</button>
        </div>

        <div className="right-section">
          <div className="line"></div>
          <p>
            We develop, design, and deliver digital solutions that transform businesses.
            With our passion for code, we help you grow, scale, and lead in a fast-moving world.
          </p>
          <p className="see-more">
            <strong>See what we do</strong> <span className="arrow">➤</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
