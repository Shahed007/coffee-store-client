import cup1 from "../../../assets/images/cups/Rectangle-9.png";
import cup2 from "../../../assets/images/cups/Rectangle-10.png";
import cup3 from "../../../assets/images/cups/Rectangle-11.png";
import cup4 from "../../../assets/images/cups/Rectangle-12.png";
import cup5 from "../../../assets/images/cups/Rectangle-13.png";
import cup6 from "../../../assets/images/cups/Rectangle-14.png";
import cup7 from "../../../assets/images/cups/Rectangle-15.png";
import cup8 from "../../../assets/images/cups/Rectangle-16.png";

const cups = [cup1, cup2, cup3, cup4, cup5, cup6, cup7, cup8]

const FollowUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-3 mb-[120px]">
      <div className="text-center mb-12">
        <h4 className="text-xl mb-2 text-[#1B1A1A]">Follow Us Now</h4>
        <h2 className="text-5xl font-roncho text-[#331A15] text-shadow">Follow on Instagram</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {
          cups.map((cup, idx) => <div className="rounded-lg w-full h-full overflow-hidden" key={idx}><img className="w-full h-full duration-300 hover:scale-105" src={cup} alt={`follow us image ${idx}`}/></div>)
        }
      </div>
    </section>
  )
}

export default FollowUs