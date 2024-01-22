/* eslint-disable react/prop-types */
import './TextButton.css';

export default function TextButton({ text, onClick }) {
  return (
    <button className="text-btn" onClick={onClick}>{text}</button>
  );
}