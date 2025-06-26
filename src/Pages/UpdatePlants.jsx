import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePlants = () => {
  const data = useLoaderData()
  // console.log(data)
  const {id}=useParams()
    const plants = data.find(plant => plant._id === id);
  console.log(plants)
  const {
    _id,
  name,
  email,
  category,
  ["plant-info"]: plantInfo, // হাইফেন থাকা key এর জন্য ব্র্যাকেট ব্যবহার করতে হয়
  ["freequency"]: frequency,
  ["water-date"]: waterDate,
  ["nex-water-date"]: nextWaterDate,
  ["helthstatus"]: healthStatus,
  plantname,
  photo,
  ["text-area"]: description,
} = plants;







  const handleUpdatePlants = (e)=>{
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form)
    const updateData = Object.fromEntries(formData.entries())
    console.log(updateData)
    // send server to the data
    fetch( `https://assignment-server-side-sage.vercel.app/plants/${_id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(updateData)
    })
    .then(res=> res.json())
    .then(data=>{
      if(data.modifiedCount){
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Succesfully updated",
  showConfirmButton: false,
  timer: 1500
});

      }
    })



  }



    return (
        <>
   <div className="w-screen ">
      <h1 className='text-center py-6 text-3xl'>Update your plant</h1>
      <form onSubmit={handleUpdatePlants}>
        <div className="grid w-8/12 mx-auto grid-cols-1 md:grid-cols-2 gap-8">
          <fieldset className="fieldset  rounded-box ">
            <label className="label">name</label>
            <input
            defaultValue={name}
              name="name"
              type="text"
              className="input w-full"
              placeholder="Enter your name"
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Email</label>
            <input
            defaultValue={email}
              name="email"
              type="email"
              className="input w-full"
              placeholder="Enter your email"
            />
          </fieldset>
          {/* select */}

          <fieldset className="fieldset  rounded-box ">
            <label className="label">select your category</label>
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
            <label className="label">care level</label>
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
            <label className="label">atering Frequency</label>
            <input
            defaultValue={frequency}
            name="freequency"
              type="text"
              className="input w-full"
              placeholder="atering Frequency"
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Last Watered Date -</label>
            <input
            defaultValue={waterDate}
            name="water-date"
              type="date"
              className="input w-full"
              placeholder="My awesome page"
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Next Watering Date </label>
            <input
            defaultValue={nextWaterDate}
            name="nex-water-date"
              type="date"
              className="input w-full"
              placeholder="Next Watering Date "
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Health Status,</label>
            <input
            defaultValue={healthStatus}
            name="helthstatus"
              type="text"
              className="input w-full"
              placeholder="Health Status,"
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Plant name</label>
            <input
            defaultValue={plantname}
            name="plantname"
              type="text"
              className="input w-full"
              placeholder="enter your email"
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">image</label>
            <input
            defaultValue={photo}
            name="photo"
              type="text"
              className="input w-full"
              placeholder="Enter  your plant photo"
            />
          </fieldset>
        
        </div>
        <div className="w-8/12 mx-auto mt-5">
         {/* <textarea name="textarea" type="text" placeholder="Description" className="textarea textarea-primary w-full"></textarea> */}
         <input defaultValue={description} name="text-area" type="text" className="textarea w-full"  placeholder="Description" />
        </div>
        <div className="w-8/12 mx-auto text-center">
          <input type="submit" className="btn btn-wide btn-primary mt-8" value="Update Plant" />
        </div>
      </form>
    </div>
            
        </>
    );
};

export default UpdatePlants;