import logo from '@/img/Logo_page.png'
import './style.css'
const Header = () => {
  return (
    <nav className="header">
      <div className="header-wrapper">
        <img src={logo} className="header-logo" alt="Logo" />
        <span
          onClick={() => {
            console.log('signed up')
          }}
          className="header-signUp"
        >
          Sign Up
        </span>
      </div>
    </nav>
  )
}

export default Header
