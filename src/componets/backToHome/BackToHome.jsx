import {IoIosArrowBack} from "react-icons/io";
import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <Link to="/" className="flex text-3xl mb-12 items-center gap-4 font-roncho text-[#374151] text-shadow"><span><IoIosArrowBack/></span> Back to Home</Link>
  )
}



export default BackToHome