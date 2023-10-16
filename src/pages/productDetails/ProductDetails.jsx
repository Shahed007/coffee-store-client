import { useLoaderData, useNavigation} from "react-router-dom"
import ProductDetailsCard from "../../componets/productDetailsCard/ProductDetailsCard";
import { Spinner } from "@material-tailwind/react";
import BackToHome from "../../componets/backToHome/BackToHome";
import banner from "../../assets/images/more/11.png";


const ProductDetails = () => {
  const loaderCoffee = useLoaderData();
  const navigation = useNavigation();

  console.log(loaderCoffee);
  return (
    <>
     {
      navigation.state === 'loading' ? 
      <div className="h-screen w-full flex justify-center items-center">
      <Spinner className="h-12 w-12" />
      </div>
      :
      <section  style={{backgroundImage: `url(${banner})`, backgroundSize: 'cover'}}>
      <div className="max-w-7xl mx-auto px-3">
      <div className="py-12">
        <BackToHome></BackToHome>
      </div>
      <div className="mb-[120px]">
      {
         <ProductDetailsCard  coffee={loaderCoffee}></ProductDetailsCard>
      }
      </div>
      </div>
     </section>
     }
      
    </>
  )
}

export default ProductDetails