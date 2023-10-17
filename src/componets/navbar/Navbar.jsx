import { Link, NavLink} from "react-router-dom";
import navBanner from "../../assets/images/more/24.jpg";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


const Navbar = () => {
  const {user} = useContext(AuthContext);
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

      <ul className="flex items-center gap-6 text-white text-lg main-nav">
        {links}
      </ul>

      <div>
        {
          user ? 
          <div>
          <button  className="h-16 w-32 group shadow shadow-gray-400 duration-200 hover:shadow-gray-500 hover:shadow-md flex items-center justify-between  rounded-full">
          <div className="h-14 w-14 rounded-full  border-4 border-white duration-200 border-s-2 shadow-sm">
          <img className="h-14 rounded-full w-14 object-cover" src={user.photoURL} alt={`photo of ${user.displayName}`} />
          </div>
          <span className="white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white duration-200 group-hover:rotate-90">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

          </span>
          </button>
          <div></div>
          </div>
          :
          <Link to="/signUp">
            Sign Up
          </Link>
        }
      </div>
    </div>
    </nav>
  )
}

export default Navbar