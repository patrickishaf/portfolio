/* eslint-disable react/prop-types */
import { UniqueKey } from '../../utils';
import './SkillBox.css';

export default function SkillBox({ type, items }) {
  return (
    <div className="skillbox">
      <div className="type-box">
        <p className="type">{type}</p>
      </div>
      <div className="items">
        {
          items.map((item) => (
            <p key={UniqueKey()} className="item">{item}</p>
          ))
        }
      </div>
    </div>
  );
}