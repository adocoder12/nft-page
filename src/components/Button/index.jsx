/* eslint-disable react/prop-types */
import './style.css'
const Button = (props) => {
  return (
    <div>
      <button className="btn">{props.text}</button>
    </div>
  )
}

export default Button
