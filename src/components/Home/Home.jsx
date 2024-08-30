import OutlinedButton from '../OutlinedButton/OutlinedButton';
import './Home.css';
import maze from '../../assets/maze.svg';
import dots from '../../assets/dots5x5.svg';
import dots4x5 from '../../assets/dots4x5.svg';
import hoodie from '../../assets/hoodie1.png';
import hoodie2 from '../../assets/hoodie2.png';
import quote from '../../assets/quote.svg';
import twitter from '../../assets/twitter.svg';
import mail from '../../assets/email.svg';
import TextButton from '../TextButton/TextButton';
import data from '../../data/projects';
import { useMemo } from 'react';
import { UniqueKey } from '../../utils';
import ProjectCard from '../ProjectCard/ProjectCard';
import Rect from '../Rect/Rect';
import SkillBox from '../SkillBox/SkillBox';
import aboutData from '../../data/about.json';
import Line from '../Line/Line';
import { useNavigate } from 'react-router-dom';
import routenames from '../../navigation/routnames';

export default function Home() {
  const contactText = "If you want to contact me, it's very easy! Just click on any social media icon anywhere on this site. I'll just add that I respond to messages on LinkedIn a bit faster so you might wanna use that option😉";
  const projects = useMemo(() => data, []);
  const openRoute = useNavigate();

  function goToContact() {
    openRoute(routenames.contact);
  }
  
  return (
    <div className="home">
      <section className="hero">
        <div className="left">
          <h1 className="bio">Pete is a <span>full-stack web developer</span> and <br /><span>site-reliability engineer</span></h1>
          <p className="desc">He builds responsive websites and automates web-app deployments</p>
          <OutlinedButton text="Contact me !!" className="home-contact-btn" onClick={goToContact} />
        </div>
        <div className="right">
          <img src={maze} alt="full-stack software developer" className="maze" />
          <img src={hoodie} alt="full-stack software developer" className="hoodie" />
          <img src={dots} alt="full-stack software developer" className="dots" />
          <div className="current-work">
            <div className="rect" />
            <p className="current-work-text">Currently working on <span>Hanzo</span></p>
          </div>
        </div>
      </section>
      <section className="funny">
        <section className="quote-sect">
          <div className="quote">
            <figure className="quote-wrap open">
              <img src={quote} alt="quote" />
            </figure>
            <h3 className="quote-text">With great power comes great electricity bills</h3>
            <figure className="quote-wrap close">
              <img src={quote} alt="quote" />
            </figure>
          </div>
          <div className="author">
            <h3 className="author-text">- Dr. Who</h3>
          </div>
        </section>
      </section>
      <section className="projects">
        <div className="project-section-top">
          <div className="details">
            <h2 className="section-title">
              <span>#</span>
              projects
            </h2>
            <Line width="51.1rem" />
          </div>
          <TextButton text="View all ~~>" onClick={() => openRoute(routenames.projects)}/>
        </div>
        <div className="projects-row">
          {
            projects.slice(0, 3).map(({ desc, live, cached, github, name, skills, img }) => (
              <ProjectCard
                key={UniqueKey()}
                desc={desc}
                live={live}
                cached={cached}
                github={github}
                name={name}
                skills={skills}
                img={img}
              />
            ))
          }
        </div>
      </section>
      <section className="skills">
        <div className="skills-section-top">
          <h2 className="section-title">
            <span>#</span>
            skills
          </h2>
          <Line width="21.3rem" />
        </div>
        <div className="skills-main">
          <div className="skills-left">
            <div className="top-shapes">
              <img src={dots} alt="full-stack software developer" className="top-dots" />
              <Rect size="8.6rem" className="top-rect" />
            </div>
            <div className="bottom-shapes">
              <img src={maze} alt="full-stack software developer" className="bottom-maze" />
              <img src={dots} alt="full-stack software developer" className="bottom-dots" />
              <Rect size="5.2rem" className="bottom-rect" />
            </div>
          </div>
          <div className="skills-right">
            <div className="col">
              <SkillBox
                type="Tools"
                items={["Git", "AWS", "GCP", "Docker", "Kubernetes", "Cloud Formation", "Azure", "Linux", "Gitlab", "Bitbucket"]}
              />
            </div>
            <div className="col">
              <SkillBox
                type="Languages"
                items={["Typescript", "Javascript", "Go", "Python", "Bash"]}
              />
              <SkillBox
                type="Frameworks"
                items={["React", "Nest.js", "Express", "Spring boot", "Flask", "Django", "Gin"]}
              />
            </div>
            <div className="col">
              <SkillBox
                type="Databases"
                items={["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Firebase"]}
              />
              <SkillBox
                type="Other"
                items={["Microservices", "gRPC", "Message-Driven Architecture", "REST API Design", "GraphQL"]}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-top">
          <h2 className="about-title">
            <span className="accent">#</span>
            about-me
          </h2>
          <Line width="32.6rem" />
        </div>
        <div className="about-main">
          <div className="about-left">
            <article>
              <p>{aboutData.about1}</p>
              <p>{aboutData.about2}</p>
              <p>{aboutData.about3}</p>
            </article>
            <OutlinedButton text="Read More ➝" />
          </div>
          <div className="about-right">
            <div className="about-right-content">
              <figure className="hoodieman">
                <img src={hoodie2} alt="full-stack software developer" />
              </figure>
              <img src={dots} alt="interesting" className="about-dots" />
              <img src={dots4x5} alt="interesting" className="about-dots-2" />
              <Line width="27.1rem" className="about-right-line" />
            </div>
          </div>
        </div>
      </section>
      <section className="contacts">
        <div className="about-top">
          <h2 className="about-title">
            <span className="accent">#</span>
            contacts
          </h2>
          <Line width="32.6rem" />
        </div>
        <div className="contacts-main">
          <p className="contacts-txt">{contactText}</p>
          <div className="msg-box">
            <p className="msg-box-title">Message me here</p>
            <div className="msg-item">
              <img src={twitter} alt="full-stack software developer" className="leading" />
              <span>
                <a href="https://x.com/thecodeninjaeu" target="_blank" rel="noreferrer">@thecodeninjaeu</a>
              </span>
            </div>
            <div className="msg-item">
              <img src={mail} alt="full-stack software developer" className="leading" />
              <span>
                <a href="mailto:onumdev@gmail.com">onumdev@gmail.com</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}