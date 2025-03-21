import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Soo-An Park</h1>
        <p>Computer Science Master's Student | AI & Data Science Enthusiast</p>
      </header>
      
      <section id="about">
        <h2>About Me</h2>
        <p>I am currently pursuing my Master's in Computer Science at the State University of New York, Stony Brook. I specialize in Machine Learning, Data Science, and AI.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://github.com/username/project1">Project 1</a>: Description of your first project.
          </li>
          <li>
            <a href="https://github.com/username/project2">Project 2</a>: Description of your second project.
          </li>
          {/* Add more projects */}
        </ul>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Python</li>
          <li>Machine Learning</li>
          <li>Data Science</li>
          <li>Neural Networks</li>
          <li>React</li>
          <li>Git</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:sooanpark@example.com">sooanpark@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/sooanpark">linkedin.com/in/sooanpark</a></p>
      </section>

      <footer>
        <p>© 2025 Soo-An Park</p>
      </footer>
    </div>
  );
}

export default App;
