
import './HomePage.css';
import apiNetwork from '../../components/images/apinetwork.jpg';
import kayakScreen from '../../components/images/kayakscreenshot.png';

function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Hello! I'm Jonathan Bijl</h1>
      </header>

      <section className="skills">
        <div className="skill-category">
    <h3>Programming Languages</h3>
    <ul>
        <li><i class="fa-brands fa-js"></i> JavaScript</li>
        <li><i class="fa-brands fa-python"></i> Python</li>
        <li>TypeScript</li>
        <li>C (Programming Language)</li> 
    </ul>
    </div> 

    <div className="skill-category">
    <h3>Front-End Development</h3> 
    <ul>
        <li><i class="fa-brands fa-react"></i> React</li>
        <li><i class="fa-brands fa-html5"></i> HTML5</li>
        <li><i class="fa-brands fa-css3"></i> CSS3</li>
        <li>Hooks</li>
        <li><i class="fa-brands fa-vuejs"></i>Vue.js</li>
        <li><i class="fa-brands fa-angular"></i>Angular</li>
        <li><i class="fa-brands fa-bootstrap"></i>Bootstrap</li>
    </ul>
    </div>

    <div className="skill-category">
    <h3>Back-End Development</h3>
    <ul>
        <li><i class="fa-brands fa-node-js"></i>Node.js</li>
        <li>Express.js</li>
        <li><i class="fa-solid fa-flask"></i>Flask</li>
        <li>REST APIs</li>
    </ul>
    </div>

    <div className="skill-category">  
    <h3>Database Technologies</h3>
    <ul>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
    </ul>
    </div>

    <div className="skill-category">
    <h3>Development Tools and Frameworks</h3>
    <ul>
        <li>Postman</li>
        <li><i class="fa-brands fa-git"></i>Git</li>
        <li><i class="fa-brands fa-github"></i>GitHub</li>
        <li><i class="fa-brands fa-gitlab"></i>GitLab</li>
        <li><i class="fa-brands fa-docker"></i>Docker</li>
    </ul>
    </div>

    <div className="skill-category">
    <h3>Cloud Services and Deployment</h3>
    <ul>
        <li><i class="fa-brands fa-aws"></i>AWS (Amazon Web Services)</li>
        <li>Azure</li>
        <li><i class="fa-brands fa-google"></i>Google Cloud Platform</li>
    </ul>
    </div>

    <div className="skill-category">
    <h3>Mobile App Development</h3>
    <ul>
        <li><i class="fa-brands fa-react"></i>React Native</li>
    </ul>
    </div>

    <div className="skill-category">
    <h3>UI/UX Design Principles</h3>
    <ul>
        <li>Understanding of UX Design</li> 
        <li>Familiarity with Adobe XD, Sketch, Figma</li>
    </ul>
    </div>

    <div className="skill-category">
    <h3>Project Management and Collaboration Tools</h3>
    <ul>
        <li><i class="fa-brands fa-jira"></i>JIRA</li>
        <li><i class="fa-brands fa-trello"></i>Trello</li>
        <li>Asana</li>
    </ul>
    </div>

    <div className="skill-category">
    <h3>Continuous Integration/Continuous Deployment</h3>
    <ul>
        <li><i class="fa-brands fa-jenkins"></i>Jenkins</li>
        <li>Render</li>
        <li>Travis CI</li>
        <li><i class="fa-brands fa-gitlab"></i>GitLab CI</li>
        <li>Fly.io</li>
    </ul>
    </div>

    <div className="skill-category">
    <h3>Concepts and Methodologies</h3>
    <ul>
        <li>Algorithms</li>
        <li><i class="fa-solid fa-robot"></i> Computer Science</li>
        <li><i class="fa-brands fa-app-store-ios"></i> Web Applications</li>
        <li><i class="fa-solid fa-code"></i> Front-End Developer</li>
        <li><i class="fa-solid fa-code"></i> Back-End Developer</li>
        <li><i class="fa-solid fa-code"></i> Full-Stack Developer</li>
    </ul>
    </div>


</section>  


      <section className="projects">
        <div className="project">
          <h5>Kayak Game</h5>
          <img src={kayakScreen} alt="Kayak Game Screenshot" className="project-image"/>
          <p>A dyanmic, interactive game where players navigate a kayak through various challenges.</p>
          <a href="https://github.com/Bijl1/kayak-game" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          <br/>
          <a href="https://bijl1.github.io/kayak-game/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
          <div className="project">
          <h5>Food recipes</h5>
          <img src={kayakScreen} alt="Kayak Game Screenshot" className="project-image"/>
          <p>Cook your way with our app: Customize recipes or create new ones easily.</p>
          <a href="https://github.com/Bijl1/food-recipes" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          <br/>
          <a href="link" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
          <div className="project">
          <h5>Fishing App</h5>
          <img src={kayakScreen} alt="Kayak Game Screenshot" className="project-image"/>
          <p>Master fishing gear choices with our app, catering to anglers at all levels.</p>
          <a href="https://github.com/Bijl1/fishing-app-client" target="_blank" rel="noopener noreferrer">Client GitHub Repository</a>
          <a href="https://github.com/Bijl1/fishing-app-server" target="_blank" rel="noopener noreferrer">Server GitHub Repository</a>
          <br/>
          <a href="link" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
      </section>

      <footer className="contact-info">
        <h2>Contact Me</h2>
        <a href="mailto:Jonathanabijl@gmail.com">
          <i class="fa fa-envelope"></i> Email
        </a> 

        <a href="https://linkedin.com/in/jonathanbijl" target="_blank">
          <i class="fa-brands fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/Bijl1" target="_blank">
          <i class="fa-brands fa-github"></i> GitHub
        </a>

        <a href="https://www.codewars.com/users/J.Bijl" target="_blank">
          <i class="fa-brands fa-codepen"></i> Codewars
        </a>
        <a href="path_to_your_resume.pdf" download>
          <i class="fa fa-download"></i> Download Resume
        </a>
      </footer>

    </div>
  ); 
}

export default HomePage;  
