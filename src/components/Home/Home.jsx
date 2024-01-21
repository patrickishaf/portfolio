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

export default function Home() {
  const projects = useMemo(() => data, []);
  return (
    <div className="home">
      <section className="hero">
        <div className="left">
          <h1 className="bio">Pete is a <span>full-stack web developer</span> and <br /><span>site-reliability engineer</span></h1>
          <p className="desc">He builds responsive websites and automates web-app deployments</p>
          <OutlinedButton text="Contact me !!" />
        </div>
        <div className="right">
          <img src={maze} alt="" className="maze" />
          <img src={hoodie} alt="" className="hoodie" />
          <img src={dots} alt="" className="dots" />
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
          <TextButton text="View all ~~>" />
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
              <img src={dots} alt="" className="top-dots" />
              <Rect size="8.6rem" className="top-rect" />
            </div>
            <div className="bottom-shapes">
              <img src={maze} alt="" className="bottom-maze" />
              <img src={dots} alt="" className="bottom-dots" />
              <Rect size="5.2rem" className="bottom-rect" />
            </div>
          </div>
          <div className="skills-right">
            <div className="col">
              <SkillBox
                type="Languages"
                items={["Typescript", "Lua", "Javascript", "Python"]}
              />
            </div>
            <div className="col">
              <SkillBox
                type="Databases"
                items={["SQLite", "PostreSQL", "MongoDB", "Firebase"]}
              />
              <SkillBox
                type="Other"
                items={["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"]}
              />
            </div>
            <div className="col">
              <SkillBox
                type="Tools"
                items={["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font awesome"]}
              />
              <SkillBox
                type="Frameworks"
                items={["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"]}
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
                <img src={hoodie2} alt="" />
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
          <p className="contacts-txt">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
          <div className="msg-box">
            <p className="msg-box-title">Message me here</p>
            <div className="msg-item">
              <img src={twitter} alt="" className="leading" />
              <span>@thecodeninjaeu</span>
            </div>
            <div className="msg-item">
              <img src={mail} alt="" className="leading" />
              <span>onumdev@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}