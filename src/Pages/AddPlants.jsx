import React, { use, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const AddPlants = () => {
  const { user } = useContext(AuthContext);
  console.log(user)

  const handleAddPlant = (e)=>{
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const newPlantData = Object.fromEntries(formData.entries())
    console.log(newPlantData)
    // send coffee data to the db
    fetch(`https://assignment-server-side-sage.vercel.app/plants`,{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(newPlantData)
    })
      .then(res=> res.json())
      .then(data=>{
       
        console.log('after adding plants',data)
        if(data.insertedId){
          Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Plant succesfully add",
  showConfirmButton: false,
  timer: 1500
});

        }
       

      })

  }




return (
  <div className="min-h-screen bg-base-200 py-10 px-4">
    <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
      🌿 Add Your Plant
    </h1>

    <form
      onSubmit={handleAddPlant}
      className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl p-8 space-y-8"
    >
      {/* Grid Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="label">Name</label>
          <input
            value={user?.displayName}
            required
            name="name"
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="label">Email</label>
          <input
            value={user?.email}
            required
            name="email"
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
          />
        </div>

        {/* Category */}
        <div>
          <label className="label">Choose your category</label>
          <select
            name="category"
            required
            className="select select-bordered w-full"
          >
            <option disabled selected>
              Select your category
            </option>
            <option>Succulent</option>
            <option>Fern</option>
            <option>Flowering</option>
          </select>
        </div>

        {/* Care Level */}
        <div>
          <label className="label">Care Level</label>
          <select
            name="plant-info"
            required
            className="select select-bordered w-full"
          >
            <option disabled selected>
              Care level
            </option>
            <option>Easy</option>
            <option>Moderate</option>
            <option>Difficult</option>
          </select>
        </div>

        {/* Watering Frequency */}
        <div>
          <label className="label">Watering Frequency</label>
          <input
            required
            name="freequency"
            type="text"
            className="input input-bordered w-full"
            placeholder="e.g., Twice a week"
          />
        </div>

        {/* Last Watered Date */}
        <div>
          <label className="label">Last Watered Date</label>
          <input
            required
            name="water-date"
            type="date"
            className="input input-bordered w-full"
          />
        </div>

        {/* Next Watering Date */}
        <div>
          <label className="label">Next Watering Date</label>
          <input
            required
            name="nex-water-date"
            type="date"
            className="input input-bordered w-full"
          />
        </div>

        {/* Health Status */}
        <div>
          <label className="label">Health Status</label>
          <input
            required
            name="helthstatus"
            type="text"
            className="input input-bordered w-full"
            placeholder="e.g., Healthy / Yellow Leaves"
          />
        </div>

        {/* Plant Name */}
        <div>
          <label className="label">Plant Name</label>
          <input
            required
            name="plantname"
            type="text"
            className="input input-bordered w-full"
            placeholder="e.g., Aloe Vera"
          />
        </div>

        {/* Image */}
        <div>
          <label className="label">Image URL</label>
          <input
            required
            name="photo"
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter plant image URL"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="label">Description</label>
        <textarea
          name="text-area"
          className="textarea textarea-bordered w-full"
          placeholder="Write a short description of your plant"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <input
          type="submit"
          className="btn btn-success btn-wide mt-6"
          value="🌱 Add Plant"
        />
      </div>
    </form>
  </div>
);

};

export default AddPlants;
