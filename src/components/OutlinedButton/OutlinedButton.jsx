/* eslint-disable react/prop-types */
import './OutlinedButton.css';

export default function OutlinedButton({onClick, text, children, className="", grey=false}) {

  function handleClick() {
    onClick();
  }

  return (
    <button onClick={handleClick} className={`outlined-btn ${grey && 'grey'} ${className}`}>
      {children ? children : <p className="btn-text">{text}</p>}
    </button>
  )
}