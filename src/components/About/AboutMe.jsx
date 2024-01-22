import './AboutMe.css';
import aboutData from '../../data/about.json';
import Line from '../Line/Line';
import maze from '../../assets/maze.svg';
import dots from '../../assets/dots5x5.svg';
import dots4x5 from '../../assets/dots4x5.svg';
import hoodie2 from '../../assets/hoodie2.png';
import SkillBox from '../SkillBox/SkillBox';

export default function AboutMe() {
  return (
    <div className="aboutme">
      <section className="page-intro">
        <h1 className="page-name">
          <span className="accent">/</span>about-me
        </h1>
        <p className="page-desc">Who am I?</p>
      </section>
      <section className="about-info">
        <div className="about-info-left">
          <article>
            <p>{aboutData.about1}</p>
            <p>{aboutData.about2}</p>
            <p>{aboutData.about3}</p>
          </article>
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
      </section>
      <section className="page-section skills">
        <h1 className="pg-section-title">
          <span className="accent">#</span>skills
        </h1>
        <div className="aboutme-skills-main">
          <SkillBox
            type="Languages"
            items={["Typescript", "Lua", "Javascript", "Python"]}
          />
          <SkillBox
            type="Databases"
            items={["SQLite", "PostreSQL", "MongoDB", "Firebase"]}
          />
          <SkillBox
            type="Other"
            items={["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"]}
          />
          <SkillBox
            type="Tools"
            items={["VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font awesome"]}
          />
          <SkillBox
            type="Frameworks"
            items={["React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"]}
          />
        </div>
      </section>
      <section className="page-section fun-facts">
        <h1 className="pg-section-title">
          <span className="accent">#</span>my-fun-facts
        </h1>
          <div className="fun-facts-main">
            <div className="fun-facts-left">
              <div className="fun-facts-row">
                <div className="fun-fact">
                  <p className="fun-fact-text">I like winter more than summer</p>
                </div>
                <div className="fun-fact">
                  <p className="fun-fact-text">I often bike with my friends</p>
                </div>
              </div>
              <div className="fun-facts-row">
                <div className="fun-fact">
                  <p className="fun-fact-text">I like pizza and pasta</p>
                </div>
                <div className="fun-fact">
                  <p className="fun-fact-text">I was in <strong>Egypt, Poland</strong> and <strong>Turkey</strong></p>
                </div>
              </div>
              <div className="fun-facts-row">
                <div className="fun-fact">
                  <p className="fun-fact-text">My favorite movie is <strong>The Green Mile</strong></p>
                </div>
                <div className="fun-fact">
                  <p className="fun-fact-text">I am still in school</p>
                </div>
              </div>
              <div className="fun-facts-row">
                <div className="fun-fact">
                  <p className="fun-fact-text">I don't have any siblings</p>
                </div>
              </div>
            </div>
            <div className="fun-facts-right">
              <img src={dots} alt="" className="funfactsdots" />
              <img src={maze} alt="" className="funfactsmaze" />
            </div>
        </div>
      </section>
    </div>
  )
}