import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/db/prisma";
import ValueComponents from "@/components/ValueComponents";
import { redirect } from "next/navigation";

export default function AboutPage() {
  return (
    <main className="mt-20 flex flex-col items-center">
      {/* Hero section */}

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6">
              {" "}
              We are a team of passionate individuals dedicated to providing the
              best shopping experience for our customers. Our mission is to make
              buying cars online fun, easy, and affordable.
            </p>
            <button className="btn-primary btn">Get Started</button>
          </div>
        </div>
      </div>

      {/* Value section */}
      <div className="my-6 px-4 py-7">
        <div className="my-10 p-9 text-center">
          <h2 className="mb-6 text-5xl font-bold">Our Values</h2>
          <p>We believe in the following values that guide our business:</p>
        </div>
        <ValueComponents />
      </div>

      {/* Team section */}
      <div className="my-6 px-4 py-7">
        <div className="my-10 p-9">
          <h2 className="mb-6 text-5xl font-bold">Our Team</h2>
          <p>Meet the talented individuals behind our success:</p>
          {/* Add team member cards here */}
        </div>
      </div>
    </main>
  );
}
