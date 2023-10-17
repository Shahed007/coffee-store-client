import { Link, NavLink} from "react-router-dom";
import navBanner from "../../assets/images/more/24.jpg";
import "./Navbar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";


const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext);
  const [dashboardToggle, setDashboardToggle] = useState(false);
  const [mobileNavToggle, setMobileNavToggle] = useState(false);

  const handleSignOut = () => {
    signOutUser()
    .then(()=> {
      Swal.fire({
        title: 'Success',
        text: 'SignOut Successful',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    })
  }

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

      <ul className="hidden items-center gap-6 text-white text-lg main-nav sm:flex">
        {links}
      </ul>
      
      <div className="sm:hidden block" >
        <button onClick={()=> setMobileNavToggle(!mobileNavToggle)} className="h-10 w-10 active:scale-95 border-s-2 border-4 border-[#362626s] bg-white rounded-full flex justify-center items-center shadow-sm shadow-white">
        {
          mobileNavToggle ? 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        }
        </button>
      </div>

      <ul  className={`sm:hidden flex flex-col gap-4 absolute  left-0 top-44 bg-[#362626] w-full p-4 main-nav text-white z-30 duration-500 ${mobileNavToggle ? 'translate-x-0 scale-100':'-translate-x-full scale-0'}`}>
        {links}
      </ul>

      <div>
        {
          user ? 
          <div >
          <button onClick={()=>setDashboardToggle(!dashboardToggle)}  className="h-16 w-32 active:scale-95  shadow shadow-gray-400 duration-200 hover:shadow-gray-500 hover:shadow-md flex items-center justify-between  rounded-full">
          <div className="h-14 w-14 rounded-full  border-4 border-white duration-200 border-s-2 shadow-sm">
          <img className="h-14 rounded-full w-14 object-cover" src={user.photoURL} alt={`photo of ${user.displayName}`} />
          </div>
          <span className="white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 text-white duration-200 ${dashboardToggle ? 'rotate-90':'rotate-0'}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

          </span>
          </button>
          <ul style={{borderBottomLeftRadius: '4px', backfaceVisibility: 'hidden'}} className={`absolute bg-[#362626] right-0 top-44 w-full md:w-1/5 text-white p-4  space-y-4  duration-500  ${dashboardToggle ? 'translate-x-0 scale-100':'translate-x-full scale-0'}`}>
            <li><h4 className="text-xl font-semibold">{user.displayName}</h4></li>
            <li><Link>Update Profile</Link></li>
            <li><h4></h4></li>
            <li><Button onClick={handleSignOut}>SignOut</Button></li>
          </ul>
          </div>
          :
          <Button>
          <Link className="text-lg text-white" to="/signUp">
            Sign Up
          </Link>
          </Button>
        }
      </div>
    </div>
    </nav>
  )
}

export default Navbar