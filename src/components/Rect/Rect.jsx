/* eslint-disable react/prop-types */
import './Rect.css';

export default function Rect({ size, className }) {
  return (
    <div style={{ width: size, height: size }} className={`rect ${className}`} />
  );
}