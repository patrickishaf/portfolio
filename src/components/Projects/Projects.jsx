import './Projects.css';
import projects from '../../data/projects';
import smallProjects from '../../data/small-projects.json';
import ProjectCard from '../ProjectCard/ProjectCard';
import { UniqueKey } from '../../utils';
import SmallProjectCard from '../SmallProjectCard/SmallProjectCard';

export default function Projects() {
  return (
    <div className="projects-page">
      <section className="page-intro">
        <h1 className="page-name">
          <span className="accent">/</span>projects
        </h1>
        <p className="page-desc">List of my projects</p>
      </section>
      <section className="page-section">
        <h1 className="pg-section-title">
          <span className="accent">#</span>apps
        </h1>
        <main className="pg-section-main projects-grid">
          {
            projects.map(({ desc, live, cached, github, name, skills, img }) => (
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
        </main>
      </section>
      <section className="page-section last-section">
        <h1 className="pg-section-title">
          <span className="accent">#</span>small-projects
        </h1>
        <main className="pg-section-main small-projects-grid">
          {
            smallProjects.map(({ name, desc, skills, github, figma, live }) => (
              <SmallProjectCard
                key={UniqueKey()}
                name={name}
                desc={desc}
                skills={skills}
                github={github}
                figma={figma}
                live={live}
              />
            ))
          }
        </main>
      </section>
    </div>
  );
}