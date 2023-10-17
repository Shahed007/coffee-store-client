import { Link, Outlet } from "react-router-dom"
import headerBanner from "../assets/images/more/15.jpg";
import logo from "../assets/images/more/logo1.png";
import Footer from "../componets/footer/Footer";
import Navbar from "../componets/navbar/Navbar";


const MainLayout = () => {
  return (
    <div className="font-raleway relative overflow-x-hidden">
    <header className="w-full">
     <Link to="/">
     <div className="py-4 h-20 flex items-center justify-center gap-1" style={{backgroundImage: `url(${headerBanner})`, backgroundSize: 'cover', backgroundPosition:'center cener'}}>
      <img className="h-16" src={logo} alt="Coffee Logo" />
      <h1 className="font-roncho text-2xl md:text-6xl text-white">Espresso Emporium</h1>
     </div>
     </Link>
     <Navbar></Navbar>
    </header>
      <main><Outlet></Outlet></main>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout