"use client";
import WhyUS from "@/components/WhyUS";

import Link from "next/link";

export default async function Financing() {
  return (
    <>
      {/* This is the hero with an image */}
      <div className="hero mt-20 min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://images.unsplash.com/photo-1572742241872-40dabdcd31c7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">FINANCING MADE EASY</h1>
            <p className="py-6">
              Get pre-qualified in 2 minutes and see real terms and actual
              monthly payments with no impact to your credit score.
            </p>
            <button className="btn-primary btn">GET YOUR TERMS</button>
          </div>
        </div>
      </div>

      {/* divider*/}

      <div className="flex w-full flex-col">
        <div className=" divider-error divider"></div>
      </div>

      {/* carousel using shadcn*/}

      <div>
        <WhyUS />
        <Link href="/buy">
          <div className="flex justify-center">
            <button className="btn-primary btn-wide btn mt-10">
              Shop vehicles{" "}
            </button>
          </div>
        </Link>
      </div>

      {/* divider*/}
      <div className="flex w-full flex-col">
        <div className=" divider-error divider"></div>
      </div>
      {/* accordion FAQ*/}
      <div className="mb-6 mt-10 text-center text-5xl font-bold">FAQ</div>
      <div className="collapse-plus collapse bg-base-200">
        <input type="radio" name="my-accordion-3" checked={true} />
        <div className="collapse-title text-xl font-medium">
          If I have bad credit, can I still get financing? 
        </div>
        <div className="collapse-content">
          <p>Yes!! as long as you a pulse we will finance you.</p>
        </div>
      </div>
      <div className="collapse-plus collapse bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          When is my downpayment due?
        </div>
        <div className="collapse-content">
          <p>You will have to pay the down payment prior the delivery of your vehicle</p>
        </div>
      </div>
      <div className="collapse-plus collapse bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I split my down payment into multiple payments?
        </div>
        <div className="collapse-content">
          <p>No!!!!</p>
        </div>
      </div>
      <div className="collapse-plus collapse bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          When is my downpayment due?
        </div>
        <div className="collapse-content">
          <p>You will have to pay the down payment prior the delivery of your vehicle</p>
        </div>
      </div>
      <div className="collapse-plus collapse bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Does Veete offer financing for vehicles purchased from private sellers?
        </div>
        <div className="collapse-content">
          <p>No!!!</p>
        </div>
      </div>

      <div className="mb-20 collapse-plus collapse bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          If I get prequalified, am I obligated to finance with Veete?
        </div>
        <div className="collapse-content">
          <p>No. When you prequilify with Veete, you see, real, personalized terms</p>
        </div>
      </div>




    </>
  );
}
