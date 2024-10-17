import './Navbar.css'
import navlogo from '../../assets/Logo.png'
import navProfile from '../../assets/Profile.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo-container">
        <img src={navlogo} alt="Logo" className="nav-logo"/>
        <p>Admin Panel</p>
      </div>
      <img src={navProfile} className='nav-profile' alt="Profile"  />
    </div>
  )
}

export default Navbar
