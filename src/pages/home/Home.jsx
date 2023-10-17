import { useLoaderData, useLocation, useNavigation } from "react-router-dom";
import HeroBanner from "./heroBanner/HeroBanner";
import Products from "./products/Products";
import QualitySection from "./qualitySection/QualitySection";
import Swal from "sweetalert2";
import { useState } from "react";
import FollowUs from "./followUs/FollowUs";

const Home = () => {
  const loadCoffees = useLoaderData();
  const navigation = useNavigation();
  const [coffees, setCoffees] = useState(loadCoffees);


  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            const filterCoffee = coffees?.filter(coffee => coffee._id !== _id);
            setCoffees(filterCoffee);
            Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success'
           )
          }
        })

      }
    })
  }
  return (
    <>
    {
      navigation.state === 'loading' ? 
      <div className="h-screen w-full flex justify-center items-center"></div>
      :
      <>
      <HeroBanner></HeroBanner>
      <QualitySection></QualitySection>
      <Products loadCoffees={coffees} handleDelete={handleDelete}></Products>
      <FollowUs></FollowUs>
      </>
    }
    </>
  )
}

export default Home