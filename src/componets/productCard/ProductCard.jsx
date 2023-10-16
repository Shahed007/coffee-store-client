import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import PropTypes from 'prop-types';
import {LiaEyeSolid} from "react-icons/lia";
import {BsPencilFill, BsTrash} from "react-icons/bs";
import { Link } from "react-router-dom";


const ProductCard = ({coffee, handleDelete}) => {
  const {_id, coffeeName, chef, photo} = coffee;

  

  return (
    <Card className="w-full flex-col md:flex-row items-center ">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full  md:w-2/5 shrink-0 rounded-r-none flex justify-center "
      >
    
        <img
          src={photo}
          alt={`photo of the ${coffeeName}`}
          className="h-full w-full object-cover"
        />
    
      </CardHeader>
      <CardBody className="flex items-center justify-between flex-row md:flex-col-reverse  lg:flex-row  w-full md:gap-6 lg:gap-0">
        <div>
        <Typography variant="h3"  className="mb-4 text-xl">
          <span className="text-[#1B1A1A] uppercase">Name:</span> <span className="text-[#5C5B5B]">{coffeeName}</span>
        </Typography>
        <Typography variant="h3" color="blue-gray" className="mb-2 text-xl">
        <span className="text-[#1B1A1A] uppercase">Chef:</span> <span className="text-[#5C5B5B]">{chef}</span>
        </Typography>
        <Typography variant="h3" color="blue-gray" className="mb-2 text-xl">
        <span className="text-[#1B1A1A] uppercase">Price:</span> <span className="text-[#5C5B5B] font-roncho">890 TK</span>
        </Typography>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col gap-6 text-lg justify-center">
          <button className="bg-[#D2B48C] p-2 rounded flex justify-center items-center text-white active:scale-95 shadow-md"><Link to={`/productDetails/${_id}`}><LiaEyeSolid/></Link></button>
          <button className="bg-[#3C393B] p-2 rounded flex justify-center items-center text-white active:scale-95 shadow-md"><Link to={`/updateCoffee/${_id}`}><BsPencilFill/></Link></button>
          <button className="bg-red-400 p-2 rounded flex justify-center items-center text-white active:scale-95 shadow-md" onClick={()=>handleDelete(_id)}><BsTrash/></button>
        </div>
      </CardBody>
    </Card>
  )
}

ProductCard.propTypes = {
  coffee: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default ProductCard