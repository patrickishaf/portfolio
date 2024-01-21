/* eslint-disable react/prop-types */
import { UniqueKey } from '../../utils';
import OutlinedButton from '../OutlinedButton/OutlinedButton';
import './ProjectCard.css';

export default function ProjectCard({ desc, live, cached, github, name, skills, img }) {
  return (
    <div key={UniqueKey()} className="project-card">
      <img src={img} alt="name" className="project-img" />
      <div className="skills">
        {
          skills.map((skill) => (
            <p key={UniqueKey()} className="skill">{skill}</p>
          ))
        }
      </div>
      <div className="project-details">
        <h3 className="name">{name}</h3>
        <p className="desc">{desc}</p>
        <div className="btns">
          {live && <OutlinedButton text="Live <~>" />}
          {cached && <OutlinedButton text="Cached >=" grey />}
          {github && <OutlinedButton text="Github <~>" />}
        </div>
      </div>
    </div>
  );
}