import footerBanner1 from "../../assets/images/more/13.jpg";
import footerBanner2 from "../../assets/images/more/24.jpg";
import logo from "../../assets/images/more/logo1.png";
import {FaFacebook} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import {AiFillTwitterCircle, AiOutlineInstagram, AiFillLinkedin,AiTwotoneMail} from "react-icons/ai";
import {BsTelephoneFill} from "react-icons/bs";
import "./Footer.css";
import {
  Card,
  Input,
  Button,
  Textarea,
} from "@material-tailwind/react";


const Footer = () => {
  return (
    <footer>
    <div className="py-32 pb-24" style={{backgroundImage: `url(${footerBanner1})`, backgroundSize: 'cover', }}>
      <div className="max-w-7xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="">
          <img className="h-16 mb-6" src={logo} alt="footer logo" />
          <h2 className="text-4xl text-[#331A15] font-roncho text-shadow">Espresso Emporium</h2>
          <p className="my-8 text-xl  text-[#1B1A1A]">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
          <ul className="text-[#331A15] text-3xl flex gap-4 items-center">
            <li><FaFacebook/></li>
            <li><AiFillTwitterCircle/></li>
            <li><AiOutlineInstagram/></li>
            <li><AiFillLinkedin/></li>
          </ul>
          <h2 className="my-8 text-4xl font-roncho text-shadow text-[#331A15]">Get in Touch</h2>
          <ul className="flex flex-col gap-3">
            <li className="text-xl flex items-center gap-2 text-[#1B1A1A]"><span><BsTelephoneFill className="text-2xl text-[#331A15]"/></span> <span>+88 01533 333 333</span></li>
            <li className="text-xl flex items-center gap-2 text-[#1B1A1A]"><span><AiTwotoneMail className="text-2xl text-[#331A15]"/></span> <span>info@gmail.com</span></li>
            <li className="text-xl flex items-center gap-2 text-[#1B1A1A]"><span><FaLocationDot className="text-2xl text-[#331A15]"/></span> <span>72, Wall street, King Road, Dhaka</span></li>
          </ul>
        </div>
        <div>
        <Card color="transparent" shadow={false}>
   
      <h2 className="text-4xl font-roncho text-[#331A15] text-shadow">Connect with Us</h2>

      <form className="mt-8 mb-2 w-full max-w-screen-lg ">
        <div className="mb-4 flex flex-col gap-6">
          <Input className="bg-white" size="lg" label="Name" />
          <Input className="bg-white" size="lg" label="Email" />
          <Textarea className="bg-white" size="lg" label="Text"></Textarea>
        </div>
        
        <Button className="mt-6 bg-transparent text-[#331A15] text-base font-roncho rounded-3xl border-2 border-[#331A15]"  >
        Send Message
        </Button>
      </form>
    </Card>
        </div>
      </div>
    </div>
     <div style={{backgroundImage: `url(${footerBanner2})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
     <h1 className="py-3 px-3 text-white text-xl sm:text-2xl font-roncho text-center">Copyright Espresso Emporium ! All Rights Reserved</h1>
     </div>
    </footer>
  )
}

export default Footer