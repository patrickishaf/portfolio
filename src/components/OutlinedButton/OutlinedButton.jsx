/* eslint-disable react/prop-types */
import './OutlinedButton.css';

export default function OutlinedButton({text, children, className="", grey=false}) {
  return (
    <button className={`outlined-btn ${grey && 'grey'} ${className}`}>
      {children ? children : <p className="btn-text">{text}</p>}
    </button>
  )
}