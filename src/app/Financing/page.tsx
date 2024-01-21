"use client";
import BasicRating from "@/components/basicRating";
import CarouselD from "@/components/carousel";
import { Carousel } from "@/components/ui/carousel";




export default async function Financing() {


    return (
        <>
        
        
         {/* This is the hero with an image */}
        <div className="mt-20 hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.unsplash.com/photo-1572742241872-40dabdcd31c7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">FINANCING MADE EASY</h1>
      <p className="py-6">Get pre-qualified in 2 minutes and see real terms and actual monthly payments with no impact to your credit score.</p>
      <button className="btn btn-primary">GET YOUR TERMS</button>
      
    </div>
  </div>
</div>

{/* divider*/}

<div className="flex flex-col w-full">

  <div className=" divider divider-error"></div>
  
</div>

{/* carousel using shadcn*/}


<CarouselD/>




</>
        );
}