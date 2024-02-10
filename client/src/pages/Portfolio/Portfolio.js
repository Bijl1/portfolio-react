import React from 'react'; // Ensure React is imported if using JSX
import "./Portfolio.css";
import kayakScreen from '../../components/images/kayakscreenshot.png';
import foodScreen from '../../components/images/foodscreenshot.png';

function Portfolio() {
  return (
    <div>
      <h1>Portfolio page</h1>
      <section className="projects">
        <div className="project">
          <h5>Kayak Game</h5>
          <img src={kayakScreen} alt="Kayak Game Screenshot" className="project-image"/>
          <p>A dynamic, interactive game where players navigate a kayak through various challenges.</p>
          <a href="https://github.com/Bijl1/kayak-game" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          <br/>
          <a href="https://bijl1.github.io/kayak-game/" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
        <div className="project">
          <h5>Food Recipes</h5>
          <img src={foodScreen} alt="Food Recipes Screenshot" className="project-image"/>
          <p>Cook your way with our app: Customize recipes or create new ones easily.</p>
          <a href="https://github.com/Bijl1/food-recipes" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          <br/>
          <a href="link" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
        <div className="project">
          <h5>Fishing App</h5>
          <img src={kayakScreen} alt="Fishing App Screenshot" className="project-image"/> {/* Consider updating the image source and alt text if this is incorrect */}
          <p>Master fishing gear choices with our app, catering to anglers at all levels.</p>
          <a href="https://github.com/Bijl1/fishing-app-client" target="_blank" rel="noopener noreferrer">Client GitHub Repository</a>
          <a href="https://github.com/Bijl1/fishing-app-server" target="_blank" rel="noopener noreferrer">Server GitHub Repository</a>
          <br/>
          <a href="link" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
