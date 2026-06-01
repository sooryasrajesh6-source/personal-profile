import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>Soorya S Rajesh</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <h1>Hi, I'm Soorya S Rajesh</h1>
        <h3>Frontend Developer | CSE Student</h3>
        <p>
          I create simple and responsive websites using HTML, CSS,
          JavaScript, React and TypeScript.
        </p>
        <a className="btn" href="#projects">
          View Projects
        </a>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Computer Science Engineering student interested in
          frontend and full stack development. I enjoy building clean,
          responsive and user-friendly web applications.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>GitHub</span>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects">
          <div className="card">
            <h3>QR Code Generator</h3>
            <p>
              A web app to generate QR codes using HTML, CSS and
              JavaScript.
            </p>
            <a
              href="https://sooryasrajesh6-source.github.io/QR-code-generator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>

          <div className="card">
            <h3>Random User Generator</h3>
            <p>
              A project that fetches and displays random user details.
            </p>
            <a
              href="https://sooryasrajesh6-source.github.io/random-user-generator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>

          <div className="card">
            <h3>Language Translator</h3>
            <p>
              A simple translator website using frontend technologies.
            </p>
            <a
              href="https://sooryasrajesh6-source.github.io/language-translator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>

          <div className="card">
            <h3>Dress Shop</h3>
            <p>
              A React dress shop project with product cards and clean UI.
            </p>
            <a
              href="https://sooryasrajesh6-source.github.io/dress-shop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Me</h2>
        <p>Email: sooryasrajesh6@gmail.com</p>
        <p>GitHub: sooryasrajesh6-source</p>
        <p>LinkedIn:soorya-s-rajesh</p>
      </section>

      <footer>
        <p>© 2026 Soorya S Rajesh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
