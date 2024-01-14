"use client";
import React, { useState } from "react";

const SubNavbar=()=> {
    {/*  hook it will hold all the item*/}
    const [searchValue,setsearchValue] = useState(""); 
    const [productArray,setProductArray] = useState([]); 




  return (
    <>  
    <div className="navbar mt-20 bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
      
      </div>
    </div>
    <br></br>
    {/*  grid  */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">


    {/*  cards */}
    <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <h6>$20.00</h6>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>










{/*  end of the grid  */}
</div>

</>

  );
}


export default SubNavbar;