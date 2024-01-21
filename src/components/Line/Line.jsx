/* eslint-disable react/prop-types */
import './Line.css';

export default function Line({ width="200px", className="" }) {
  return <div className={`line ${className}`} style={{ width, height: '1px' }} />;
}