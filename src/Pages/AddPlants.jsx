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
    <div className="w-screen ">
      <h1 className="text-3xl font-bold text-center py-8">Add your plant</h1>
      <form onSubmit={handleAddPlant}>
        <div className="grid w-8/12 mx-auto grid-cols-1 md:grid-cols-2 gap-8">
          <fieldset className="fieldset  rounded-box ">
            <label className="label">name</label>
            <input
            value={user.displayName}
            required
              name="name"
              type="text"
              className="input w-full"
              placeholder="Enter your name"
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Email</label>
            <input
            value={user.email}
            required
              name="email"
              type="email"
              className="input w-full"
              placeholder="Enter your email"
            />
          </fieldset>
          {/* select */}

          <fieldset className="fieldset  rounded-box ">
            <label className="label">choose your category</label>
            <select
            name="category"
              defaultValue="Pick a text editor"
              className="select select-primary w-full"
            >
              <option disabled={true}>Select your category</option>
              <option> Succulent </option>
              <option> Fern </option>
              <option> Flowering </option>
            </select>
          </fieldset>
          {/* select two */}
             <fieldset className="fieldset  rounded-box ">
            <label className="label">Care Level </label>
            <select
            name="plant-info"
              defaultValue="Pick a text editor"
              className="select select-primary w-full"
            >
              <option disabled={true}>care level</option>
              <option>Easy</option>
              <option>Moderate </option>
              <option>Difficult </option>
            </select>
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Watering Frequency </label>
            <input
            required
            name="freequency"
              type="text"
              className="input w-full"
              placeholder="Watering Frequency "
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Last Watered Date -</label>
            <input
            required
            name="water-date"
              type="date"
              className="input w-full"
              placeholder="My awesome page"
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Next Watering Date </label>
            <input
            required
            name="nex-water-date"
              type="date"
              className="input w-full"
              placeholder="Next Watering Date "
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Health Status,</label>
            <input
            required
            name="helthstatus"
              type="text"
              className="input w-full"
              placeholder="Health Status,"
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Plant name</label>
            <input
            required
            name="plantname"
              type="text"
              className="input w-full"
              placeholder="Plantname"
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">image</label>
            <input
            required
            name="photo"
              type="text"
              className="input w-full"
              placeholder="Enter  your plant photo"
            />
          </fieldset>
        
        </div>
        <div className="w-8/12 mx-auto mt-5">
         {/* <textarea name="textarea" type="text" placeholder="Description" className="textarea textarea-primary w-full"></textarea> */}
         <input name="text-area" type="text" className="textarea w-full"  placeholder="Description" />
        </div>
        <div className="w-8/12 mx-auto text-center py-8">
          <input type="submit" className="btn btn-wide bg-[#016630] mt-8" value="Add Plant" />
        </div>
      </form>
    </div>
  );
};

export default AddPlants;
