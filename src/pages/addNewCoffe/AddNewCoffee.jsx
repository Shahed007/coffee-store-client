
import addNewCoffeeBanner from "../../assets/images/more/11.png";
import Swal from 'sweetalert2';
import BackToHome from "../../componets/backToHome/BackToHome";

const AddNewCoffee = () => {
  const handleAddNewCoffee = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const coffeeName = form.get('coffeeName');
    const supplier = form.get('supplier');
    const category = form.get('category');
    const chef = form.get('chef');
    const taste = form.get('taste');
    const details = form.get('details');
    const photo = form.get('photo');
    const coffee = {coffeeName, supplier, category, chef, taste, details, photo};
    console.log(coffee);

    fetch('http://localhost:5000/coffees', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(coffee),
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          title: 'Success',
          text: 'Product added successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        e.target.reset();
      }
    })
  }
  return (
    <section className="mb-12 " style={{backgroundImage: `url(${addNewCoffeeBanner})`, backgroundSize:'cover'}}>
      <div className="max-w-7xl mx-auto px-3 pt-12">
        <BackToHome></BackToHome>
        <div className="bg-[#F4F3F0] py-16 px-3 md:px-24 rounded">
          <h2 className="text-4xl font-roncho text-center text-[#374151] text-shadow">Add New Coffee</h2>
          <p className="my-8 text-gray-600 text-base md:text-lg text-justify md:text-center w-full md:w-2/3 md:mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

          <form autoComplete="off" onSubmit={handleAddNewCoffee} className="w-full ">
            <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="space-y-6 w-full">
                <div className="w-full flex flex-col">
                <label  className="mb-4 inline-block text-[#374151] text-xl font-semibold">Name</label>
                <input id="coffeeName" className="px-2 py-3 rounded shadow text-gray-600 text-base" type="text" name="coffeeName" placeholder="Enter coffee name" />
                </div>
                <div className="w-full flex flex-col">
                <label  className="mb-4 inline-block text-[#374151] text-xl font-semibold">Supplier</label>
                <input id="supplier" className="px-2 py-3 rounded shadow text-gray-600 text-base" type="text" name="supplier" placeholder="Enter coffee supplier" />
                </div>
                <div className="w-full flex flex-col">
                <label  className="mb-4 inline-block text-[#374151] text-xl font-semibold">Category</label>
                <input id="category" className="px-2 py-3 rounded shadow text-gray-600 text-base" type="text" name="category" placeholder="Enter coffee category" />
                </div>
                </div>

                <div className="space-y-6 w-full">
                <div className="w-full flex flex-col">
                <label  className="mb-4 inline-block text-[#374151] text-xl font-semibold">Chef</label>
                <input id="chef" className="px-2 py-3 rounded shadow text-gray-600 text-base" type="text" name="chef" placeholder="Enter coffee chef" />
                </div>
                <div className="w-full flex flex-col">
                <label  className="mb-4 inline-block text-[#374151] text-xl font-semibold">Taste</label>
                <input id="taste" className="px-2 py-3 rounded shadow text-gray-600 text-base" type="text" name="taste" placeholder="Enter coffee taste" />
                </div>
                <div className="w-full flex flex-col">
                <label  className="mb-4 inline-block text-[#374151] text-xl font-semibold">Details</label>
                <input id="details" className="px-2 py-3 rounded shadow text-gray-600 text-base" type="text" name="details" placeholder="Enter coffee details" />
                </div>
                </div>
            </div>
            <div className="w-full mt-4 flex flex-col">
            <label  className="mb-4 inline-block text-[#374151] text-xl font-semibold">Photo URL</label>
            <input id="photo" className="px-2 py-3 rounded shadow text-gray-600 text-base" type="text" name="photo" placeholder="Enter photo url" />
          </div>

          <input className="w-full active:scale-95 bg-[#D2B48C] py-2 mt-6 rounded border-[1px] border-[#331A15] font-roncho text-2xl text-[#331A15]" type="submit" value="Add Coffee" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddNewCoffee