import qualityIcon1 from "../../../assets/images/icons/1.png";
import qualityIcon2 from "../../../assets/images/icons/2.png";
import qualityIcon3 from "../../../assets/images/icons/3.png";
import qualityIcon4 from "../../../assets/images/icons/4.png";

const QualitySection = () => {
  return (
    <section className="bg-[#ECEAE3] py-12 flex justify-center items-center">
    <div className="max-w-6xl mx-auto px-3 w-full">
    <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  ">
        <div className=" w-full flex flex-col items-center sm:items-start">
          <img className="h-16 w-16" src={qualityIcon1} alt="quality image 1" />
          <h3 className="text-[#331A15] font-roncho text-3xl mt-4">Awesome Aroma</h3>
          <p className="mt-2 text-[#1B1A1A] text-base">
          You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className=" w-full flex flex-col items-center sm:items-start">
        <img className="h-16 w-16" src={qualityIcon2} alt="quality image 2" />
        <h3 className="text-[#331A15] font-roncho text-3xl mt-4">High Quality</h3>
          <p className="mt-2 text-[#1B1A1A] text-base">
          We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className=" w-full flex  flex-col items-center sm:items-start">
        <img className="h-16 w-16" src={qualityIcon3} alt="quality image 3" />
        <h3 className="text-[#331A15] font-roncho text-3xl mt-4">Pure Grades</h3>
          <p className="mt-2 text-[#1B1A1A] text-base">
          The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className=" w-full flex flex-col items-center sm:items-start">
        <img className="h-16 w-16" src={qualityIcon4} alt="quality image 4" />
        <h3 className="text-[#331A15] font-roncho text-3xl mt-4">Proper Roasting</h3>
          <p className="mt-2 text-[#1B1A1A] text-base">
          Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default QualitySection