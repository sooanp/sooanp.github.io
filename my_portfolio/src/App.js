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
            <a href="https://github.com/sooanp/Cluster_Analysis">Cluster Analysis</a>: End-to-End software engineering team project from univesity course. Mainly worked
            as a front-end developer as part of the team. Using the preprocessed geo data, we create a web application
            that re-districts Florida, Illinois, and Lousiana states based on different filters such as population density, race, etc.
            Also, the application provides cluster analysis of different state districtions.
          </li>
          <li>
            <a href="https://github.com/sooanp/Unsupervised_Continual_Learning_Spiking_Neural_Network">Unsupervised Continual Learning with Spiking Neural Network</a>: Main experimental project
            I performed in Brain-inspired Computing Lab. In order to mitigate catastrophic forgetting of continual learning while maintaining unsupervised learning ability,
            I have implemented a dynamic network architectural spiking neural network. SNN was chosen inspired by its' bio-plausibility. Even though neural networks were
            originally inspired by human brains, they still suffered from catastrophic forgetting unlike humans. This thought lead me to use Spiking neural network, a third-generational neural network
            to handle this task. After multiple experiments and extensive research, I was able to achieve average of 92% accuracy on split MNIST task in unsupervised learning environment, comparable to
            other similar studies.
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
        <p>Email: <a href="mailto:sooanpark@example.com">sooan.park@stonybrook.edu</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/sooanpark">https://www.linkedin.com/in/sooan-park-77197b18b/</a></p>
      </section>

      <footer>
        <p>© 2025 Soo-An Park</p>
      </footer>
    </div>
  );
}

export default App;
