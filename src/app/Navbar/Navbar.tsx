import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { redirect } from "next/navigation";

async function searchProduct(formData: FormData) {
    "use server";

    const searchQuery = formData.get("searchQuery")?.toString();

    if(searchQuery) {
        redirect ("/search?query="+searchQuery);

    }
}

export default function Navbar() {
    return (
      <div className="bg-base-100">
        <div className="max-w-7x navbar m-auto flex-col gap-2 sm:flex-row">
          <div className="flex-1">
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            <Image src={logo} height={40} width={40} alt="Flowmazon logo" />
            Flowmazon
          </Link>
          </div>
          <div className="flex-none gap-2">
            <form action={searchProduct}>
                <div className="form-control">
                    <input
                        name="searchQuery"
                        placeholder="Search"
                        className="input input-bordered w-full min-w-[1000px]"
                        />
                    </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
