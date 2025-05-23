import React from 'react';

const UpdatePlants = () => {



    return (
        <>
          <h1>Add your plant</h1>
      <form >
        <div className="grid w-8/12 mx-auto grid-cols-1 md:grid-cols-2 gap-8">
          <fieldset className="fieldset  rounded-box ">
            <label className="label">name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Enter your name"
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Email</label>
            <input
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
              <option>VScode</option>
              <option>VScode fork</option>
              <option>Another VScode fork</option>
            </select>
          </fieldset>
          {/* select two */}
             <fieldset className="fieldset  rounded-box ">
            <label className="label">Add Plant Info</label>
            <select
            name="plant-info"
              defaultValue="Pick a text editor"
              className="select select-primary w-full"
            >
              <option disabled={true}>Add Plant Info</option>
              <option>Every 3 days</option>
              <option>Weekly</option>
              <option>Twice a week</option>
            </select>
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">atering Frequency</label>
            <input
            name="freequency"
              type="text"
              className="input w-full"
              placeholder="atering Frequency"
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Last Watered Date -</label>
            <input
            name="water-date"
              type="text"
              className="input w-full"
              placeholder="My awesome page"
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Next Watering Date </label>
            <input
            name="nex-water-date"
              type="text"
              className="input w-full"
              placeholder="Next Watering Date "
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Health Status,</label>
            <input
            name="helthstatus"
              type="text"
              className="input w-full"
              placeholder="Health Status,"
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">Plant name</label>
            <input
            name="plantname"
              type="text"
              className="input w-full"
              placeholder="enter your email"
            />
          </fieldset>
          <fieldset className="fieldset  rounded-box ">
            <label className="label">image</label>
            <input
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
        <div className="w-8/12 mx-auto text-center">
          <input type="submit" className="btn btn-wide btn-primary mt-8" value="Add Plant" />
        </div>
      </form>
            
        </>
    );
};

export default UpdatePlants;