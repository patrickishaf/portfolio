/* eslint-disable react/prop-types */
import { UniqueKey } from '../../utils';
import OutlinedButton from '../OutlinedButton/OutlinedButton';
import './SmallProjectCard.css';

export default function SmallProjectCard({ name, desc, skills, github, figma, live }) {
  function openProjectLink(link) {
    window.open(link, '_blank');
  }

  return (
    <div className="small-project-card">
      <div className="skills">
        {
          skills.map((skill) => (
            <p key={UniqueKey()} className="skill">{skill}</p>
          ))
        }
      </div>
      <div className="details">
        <h2 className="name">{name}</h2>
        <p className="desc">{desc}</p>
        <div className="btns">
          { github && <OutlinedButton text={"Github <~>"} onClick={() => openProjectLink(github)} /> }
          { figma && <OutlinedButton text={"Figma <~>"} onClick={() => openProjectLink(figma)} /> }
          { live && <OutlinedButton text={"Live <~>"} onClick={() => openProjectLink(live)} /> }
        </div>
      </div>
    </div>
  );
}