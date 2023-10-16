import {Link, NavLink} from "react-router-dom";
import navBanner from "../../assets/images/more/24.jpg";
import "./Navbar.css";


const Navbar = () => {
  const links = (
    <>
      <li className="">
      <NavLink className="relative px-6 py-2  rounded  group main-nav-item block" to="/"><span className="relative z-20">Home</span>
      <img src={navBanner} alt="nav banner image" className="h-full w-full z-10 rounded absolute top-0 left-0 duration-300 scale-0 group-hover:scale-100" />
      </NavLink>
      </li>
      <li className="">
      <NavLink className="relative px-6 py-2  rounded  group main-nav-item block" to="/users"><span className="relative z-20">Users</span>
      <img src={navBanner} alt="nav banner image" className="h-full w-full z-10 rounded absolute top-0 left-0 duration-300 scale-0 group-hover:scale-100" />
      </NavLink>
      </li>
      <li className="">
      <NavLink className="relative px-6 py-2  rounded  group main-nav-item block" to="/signIn"><span className="relative z-20">Sign In</span>
      <img src={navBanner} alt="nav banner image" className="h-full w-full z-10 rounded absolute top-0 left-0 duration-300 scale-0 group-hover:scale-100" />
      </NavLink>
      </li>
    </>
  )
  return (
    <nav className="bg-[#362626]">
    <div className="max-w-7xl mx-auto px-3 py-4 flex justify-between items-center">
      <Link to="/" className="text-3xl text-white font-roncho">Coffee Store</Link>

      <ul className="flex items-center gap-6 text-white text-lg main-nav">
        {links}
      </ul>

      <div></div>
    </div>
    </nav>
  )
}

export default Navbar