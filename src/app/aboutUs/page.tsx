import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/db/prisma";
import ValueComponents from "@/components/ValueComponents";
import { redirect } from "next/navigation";





export default function AboutPage() {
    return (
      <main className="flex flex-col items-center mt-20">
        {/* Hero section */}
        <div className="hero rounded-xl bg-base-200">
          <div className="hero-content">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p>
              We are a team of passionate individuals dedicated to providing the best shopping experience for our customers. Our mission is to make buying products online fun, easy, and affordable.
            </p>
          </div>
        </div>
  
        {/* Value section */}
        <div className="my-6 px-4 py-7">
          <div className="my-10 p-9">
            <h2 className="text-5xl font-bold mb-6">Our Values</h2>
            <p>
              We believe in the following values that guide our business:
            </p>
          </div>
          <ValueComponents />
        </div>
  
        {/* Team section */}
        <div className="my-6 px-4 py-7">
          <div className="my-10 p-9">
            <h2 className="text-5xl font-bold mb-6">Our Team</h2>
            <p>
              Meet the talented individuals behind our success:
            </p>
            {/* Add team member cards here */}
          </div>
        </div>
      </main>
    );
  }
  
