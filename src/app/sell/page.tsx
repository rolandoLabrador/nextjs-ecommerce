"use client";



import { useState } from "react";

export default function BuyProduct() {
const [hasVin,setHasVin] = useState("false");
const [vinNumber,setVinNumber] = useState("");
const [mileage,setMileage] = useState("");

return (
<div 
  className="mt-20 hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1615589658982-a8203e127a52?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}
>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">See what your car is worth</h1>
      <p className="mb-5">
        Get instant appraisal in as little as 30 seconds and we will pick up your car for free.
      </p>
      
      <input
        type="text"
        placeholder="Enter your VIN"
        className="input-bordered input w-full max-w-xs"
        value={vinNumber}
        onChange={(event) => setVinNumber(event.target.value)}
      />

      <button className="mt-5  btn-primary btn">Get Started</button>
    </div>
  </div>
</div>

);
}