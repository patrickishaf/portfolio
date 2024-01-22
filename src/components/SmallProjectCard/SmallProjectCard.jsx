/* eslint-disable react/prop-types */
import { UniqueKey } from '../../utils';
import OutlinedButton from '../OutlinedButton/OutlinedButton';
import './SmallProjectCard.css';

export default function SmallProjectCard({ name, desc, skills, github, figma, live }) {
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
          { github && <OutlinedButton text={"Github <~>"} /> }
          { figma && <OutlinedButton text={"Figma <~>"} /> }
          { live && <OutlinedButton text={"Live <~>"} /> }
        </div>
      </div>
    </div>
  );
}