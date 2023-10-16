import productsBanner from "../../../assets/images/more/1.png";
import {BsCup} from "react-icons/bs";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import ProductCard from "../../../componets/productCard/ProductCard";

const Products = ({loadCoffees,handleDelete}) => {
  
  return (
    <section className="py-[130px]" style={{backgroundImage: `url(${productsBanner})`, backgroundSize: 'cover'}}>
      <div className="max-w-7xl mx-auto px-3">
        <div className="text-center mb-14">
          <h4 className="text-[#1B1A1A] text-xl mb-2">--- Sip & Savor ---</h4>
          <h2 className="text-5xl text-[#331A15] text-shadow mb-4 font-roncho">Our Popular Products</h2>
          <Link to="/addNewCoffee">
            <button className="bg-[#E3B577] active:scale-95 rounded border-2 border-[#331A15] text-2xl mx-auto p-7 py-2 flex gap-2 items-center"><span className="text-white font-roncho">Add Coffee</span> <span><BsCup/></span></button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {
            loadCoffees?.map(coffee => <ProductCard key={coffee._id} coffee={coffee} handleDelete={handleDelete}></ProductCard>)
          }
        </div>
      </div>
    </section>
  )
}

Products.propTypes = {
  loadCoffees: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default Products