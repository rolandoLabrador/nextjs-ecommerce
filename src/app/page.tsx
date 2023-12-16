import HeroImage from "@/assets/jeep-home--920c968.webp";
import PaginationBar from "@/components/PaginationBar";
import ProductCard from "@/components/ProductCard";
import ValueComponents from "@/components/ValueComponents";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface HomeProps {
  searchParams: { page: string };
}

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);

  const pageSize = 4;
  const heroItemCount = 1;

  const totalItemCount = await prisma.product.count();

  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });

  return (
    <main className="flex flex-col items-center mt-20">
      {/* hero section  */}
      <div className="flex  lg:flex-row items-center justify-center flex-col-reverse my-1 py-2 lg:py-8">
        <div className="w-[80%] lg:w-[60%] flex flex-col gap-y-4">
          <h2 className="font-bold text-4xl md:text-6xl ">
            Buy your next ride entirely online
          </h2>
          <p>
            Shop, buy, and get it delivered right to your doorstep.
            <Link href={"/"} className="ml-2 text-red-400 hover:underline">
              Learn More
            </Link>
          </p>
          {/* search div start  */}
          <div>
            <form action={searchProducts}>
              <div className="flex w-full ">
                <input
                  name="searchQuery"
                  type="search"
                  placeholder="Search you can add anything"
                  className="outline-none border-2 border-gray-300 p-3 border-r-0 w-[60%] rounded-l-lg "
                />
                <button
                  type="submit"
                  className="p-3 border-2 w-[20%] border-red-500 outline-none bg-red-500 text-white rounded-r-lg"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          {/* search div end  */}
          <p>Browse thousands of low-mileage cars and trucks</p>
        </div>
        <div className="w-[100%] lg:w-[60%] flex items-center justify-center">
          <Image
            width={350}
            height={350}
            priority
            src={HeroImage}
            alt="heroimage"
            className="object-fit"
          />
        </div>
      </div>
      {/* end hero section */}
      {currentPage === 1 && (
        <div className="hero rounded-xl bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src={products[0].imageUrl}
              alt={products[0].name}
              width={400}
              height={800}
              className="w-full max-w-sm rounded-lg shadow-2xl"
              priority
            />
            <div>
              <h1 className="text-5xl font-bold">{products[0].name}</h1>
              <p className="py-6">{products[0].description}</p>
              <Link
                href={"/products/" + products[0].id}
                className="btn-primary btn"
              >
                Check it out
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* value section start  */}
      <div className=" my-6 px-4 py-7">
        <div className="my-10 p-9">
          <h2 className="text-5xl font-bold mb-6">vroom values</h2>
          <p>
            We believe buying a car should be fun, easy, and affordable. Here’s
            how Vroom is leading the revolution
          </p>
        </div>
        <ValueComponents />
      </div>
      {/* value section end */}

      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {(currentPage === 1 ? products.slice(1) : products).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </main>
  );
}
