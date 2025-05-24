import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyPlantCard = ({ plants,setPlants,plantss }) => {
  const handleDelete = (id) => {
    console.log(_id);
   

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        // fetch
          // start deleting the coffee
    fetch(`https://assignment-server-side-sage.vercel.app/plants/${id}`,{
        method:'DELETE'
    })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
        })
 // remove the plants from the state
    const reminingPlants = plantss.filter(pl=> pl._id !==id)
    setPlants(reminingPlants)

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
      
    });
   
  };

  const { photo, plantname, _id } = plants;
return (
  <div className=" mx-auto p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 mb-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      {/* Photo */}
      <div className="flex justify-center">
        <img
          className=" h-48 object-cover rounded-xl border border-green-300 shadow-md"
          src={photo}
          alt={plantname}
        />
      </div>

      {/* Info */}
      <div className="md:col-span-2 flex flex-col justify-between h-full">
        <h2 className="text-3xl font-semibold text-green-900">{plantname}</h2>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link to={`/viewDetails/${_id}`}>
            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow">
              <FaEye />
              <span>Details</span>
            </button>
          </Link>

          <Link to={`/updateplants/${_id}`}>
            <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow">
              <MdEdit />
              <span>Edit</span>
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
          >
            <MdDelete />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

};

export default MyPlantCard;
