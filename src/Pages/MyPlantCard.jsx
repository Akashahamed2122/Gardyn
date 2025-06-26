import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router"; // ✅ ফিক্সড
import Swal from "sweetalert2";

const MyPlantCard = ({ plants, setPlants, plantss }) => {
  const { photo, plantname, _id } = plants;

  const handleDelete = (id) => {
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
        fetch(`https://assignment-server-side-sage.vercel.app/plants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = plantss.filter((pl) => pl._id !== id);
              setPlants(remaining);
              Swal.fire("Deleted!", "Your plant has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full mx-auto bg-white border border-green-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
      
      {/* Image Top with Overlay */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={photo}
          alt={plantname}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
          <h2 className="text-white text-xl font-bold">{plantname}</h2>
        </div>
      </div>

      {/* Button Section */}
      <div className="p-4 flex flex-wrap gap-3 justify-center">
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
  );
};

export default MyPlantCard;
