/* eslint-disable react/prop-types */
import './TextButton.css';

export default function TextButton({ text }) {
  return (
    <button className="text-btn">{text}</button>
  );
}