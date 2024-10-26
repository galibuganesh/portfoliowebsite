

// src/App.js
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Main Section */}
      <main className="main-content">
        {/* About Section */}
        <section id="about" className="section about">
          <ScrollAnimation animateIn="fadeIn">
            <h2>About Me</h2>
            <p>I’m ganeshgalibu and i am a passionate Java developer seeking exciting opportunities in software development.</p>
          </ScrollAnimation>
        </section>

        {/* Projects Section with Animation */}
        <section id="projects" className="section projects">
          <ScrollAnimation animateIn="fadeIn">
          
            <h2>My Projects</h2>
            <div className="project">
              <h3>Project 1</h3>
              <p>I have done a project on web development for animenton for decribing about charectors</p>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>I have done this project on Portfolio wesite which is reactive on tab,mobile and computers</p>
            </div>
          </ScrollAnimation>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact">
          <ScrollAnimation animateIn="fadeIn">
            <h2>Contact Me</h2>
            <p>Feel free to reach out via email at <a href="mailto: ganeshgalibu@gmail.com">ganeshgalibu@gmail.com</a></p>
            <p> contact number
            <a href="tel:+919876543221"> +91 9876543221</a>
            </p>
          </ScrollAnimation>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
