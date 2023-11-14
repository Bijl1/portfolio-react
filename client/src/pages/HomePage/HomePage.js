
import './HomePage.css';
import apiNetwork from '../../components/images/apinetwork.jpg';

function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Hello! I'm Jonathan Bijl</h1>
      </header>

      <section className="skills">
    <h3>Programming Languages</h3>
    <ul>
        <li><i class="fa fa-code"></i> JavaScript</li>
        <li><i class="fa fa-python"></i>Python</li>
        <li>TypeScript</li>
        <li>C (Programming Language)</li>
    </ul>

    <h3>Front-End Development</h3>
    <ul>
        <li>React</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Hooks</li>
        <li>Vue.js</li>
        <li>Angular</li>
        <li>Bootstrap</li>
        <li>SASS/SCSS</li>
        <li>Tailwind CSS</li>
        <li>Web Design</li>
    </ul>

    <h3>Back-End Development</h3>
    <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Flask</li>
        <li>REST APIs</li>
    </ul>

    <h3>Database Technologies</h3>
    <ul>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
    </ul>

    <h3>Development Tools and Frameworks</h3>
    <ul>
        <li>Postman</li>
        <li>Git</li>
        <li>GitHub/GitLab</li>
        <li>Docker</li>
        <li>Kubernetes</li>
    </ul>

    <h3>Testing and Optimization</h3>
    <ul>
        <li>Jest</li>
        <li>Mocha</li>
        <li>Selenium</li>
        <li>Webpack</li>
    </ul>

    <h3>Cloud Services and Deployment</h3>
    <ul>
        <li>AWS (Amazon Web Services)</li>
        <li>Azure</li>
        <li>Google Cloud Platform</li>
    </ul>

    <h3>Mobile App Development</h3>
    <ul>
        <li>React Native</li>
    </ul>

    <h3>UI/UX Design Principles</h3>
    <ul>
        <li>Understanding of UX Design</li>
        <li>Familiarity with Adobe XD, Sketch, Figma</li>
    </ul>

    <h3>Project Management and Collaboration Tools</h3>
    <ul>
        <li>JIRA</li>
        <li>Trello</li>
        <li>Asana</li>
    </ul>

    <h3>Continuous Integration/Continuous Deployment</h3>
    <ul>
        <li>Jenkins</li>
        <li>Travis CI</li>
        <li>GitLab CI</li>
    </ul>

    <h3>Concepts and Methodologies</h3>
    <ul>
        <li>Algorithms</li>
        <li>Computer Science</li>
        <li>Web Applications</li>
        <li>Front-End Developer</li>
        <li>Back-End Developer</li>
        <li>Full-Stack Developer</li>
    </ul>


</section>


      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project Name</h3>
          <p>Kayak Game</p>
          <p>Food recipes</p>
          <p>Food recipes</p>
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
