import { Button } from "@material-tailwind/react";
import heroBanner from "../../../assets/images/more/3.png";

const HeroBanner = () => {
  return (
    <section className=" py-6 sm:h-screen flex items-center" style={{backgroundImage: `url(${heroBanner})`, backgroundSize:'cover', backgroundPosition: 'center center'}}>
     <div className="container mx-auto px-3 grid grid-cols-1 md:grid-cols-2 ">
      <div></div>
      <div>
        <h1 className="text-white text-5xl font-roncho">
        Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="text-white/60 text-base mt-4">
         It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
        </p>
        <Button className="bg-[#E3B577] rounded-none text-xl font-roncho text-gray-900 mt-8">Learn More</Button>
      </div>
     </div>
    </section>
  )
}

export default HeroBanner