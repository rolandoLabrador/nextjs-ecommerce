import Link from "next/link";
import React, { useState } from "react";

export default function Help() {
  return (
    <>
   

    { /* This is the hero with an image */}
      <div className="mt-20 hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Get the car without the salesman experience</h1>
      <p className="mb-5">At VEETE, we believe that your journey with us extends far beyond the moment you receive the keys to your new vehicle. Our commitment goes beyond the transaction, aiming to provide you with an unparalleled experience from the first click to the open road.</p>
      <Link href="/">
      <button className="btn btn-primary">Get Started</button>
      </Link>
    </div>
  </div>
</div>




      <div className= "mt-10 mb-6 text-5xl font-bold text-center">FAQ</div>

      { /* This is the accordion */}
      <div className="mt-10 collapse-arrow collapse bg-base-200">
        <input type="radio" name="my-accordion-2" checked={true} />
        <div className="collapse-title text-xl font-medium">
        How does the online buying process work?
        </div>
        <div className="collapse-content">
          <p>Our online buying process is designed to be simple and convenient. Browse our inventory, select your desired vehicle, customize your financing options, and complete your purchase all from the comfort of your home.</p>
        </div>
      </div>

      <div className="collapse-arrow collapse bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Can I trade in my current vehicle?
        </div>
        <div className="collapse-content">
          <p>Absolutely! We offer a seamless trade-in process. Simply provide details about your current vehicle during the purchasing process, and we will provide you with a fair and competitive offer.</p>
        </div>
      </div>


      <div className="collapse-arrow collapse bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        What types of vehicles do you sell?
        </div>
        <div className="collapse-content">
          <p>Our online dealership offers a diverse range of vehicles, including sedans, SUVs, trucks, and more. Explore our inventory to find the perfect match for your preferences and lifestyle.</p>
        </div>
      </div>

      <div className="collapse-arrow collapse bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
         What financing options do you offer?
        </div>
        <div className="collapse-content">
          <p>Transparency is key. Each of our listings includes detailed information about the vehicles condition, along with high-quality photos. Additionally, we provide comprehensive vehicle history reports for added peace of mind.</p>
        </div>
      </div>
      
      <div className="collapse-arrow collapse bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        How does the delivery process work?
        </div>
        <div className="collapse-content">
          <p>Once your purchase is complete, we will coordinate the delivery of your vehicle to your specified location. Enjoy the convenience of having your new car brought directly to your doorstep.</p>
        </div>
      </div>



      

    </>
  );
}
