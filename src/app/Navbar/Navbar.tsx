import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import AboutPage from "../aboutUs/page";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const cart = await getCart();

  return (
    <div className="fixed z-50 w-full bg-white py-3 drop-shadow-md ">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between px-4 md:px-0 ">
          <div>
            {/* logo */}
            <div>
              <Link href="/" className=" text-4xl font-bold md:text-5xl">
                VEETE
              </Link>
            </div>
          </div>

          {/* Navmenu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-5  ">
              <li>
                <Link
                  href={"/buy"}
                  className="pb-1 transition  duration-100 hover:border-b-2 hover:border-red-500"
                >
                  BUY
                </Link>
              </li>
              <li>
                <Link
                  href={"/sell"}
                  className="pb-1 transition  duration-100 hover:border-b-2 hover:border-red-500"
                >
                  SELL
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="pb-1 transition  duration-100 hover:border-b-2 hover:border-red-500"
                >
                  FINANCE
                </Link>
              </li>
              <li>
                <Link
                  href={"/aboutUs"}
                  className="pb-1 transition  duration-100 hover:border-b-2 hover:border-red-500"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href={"/help"}
                  className="pb-1 transition  duration-100 hover:border-b-2 hover:border-red-500"
                >
                  HELP
                </Link>
              </li>
            </ul>
          </div>

          {/* cart section  */}
          <div className="flex-none gap-2">
            <ShoppingCartButton cart={cart} />
            <UserMenuButton session={session} />

            <div className="dropdown-bottom dropdown-end dropdown md:hidden">
              <div tabIndex={0} role="button" className="btn m-1 text-xl">
                <CiMenuBurger />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box z-[1] mt-5 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <Link href={"/buy"}>Buy</Link>
                </li>
                <li>
                  <Link href={"/sell"}>SELL/TRADE</Link>
                </li>
                <li>
                  <Link href={"/"}>FINANCE</Link>
                </li>
                <li>
                  <Link href={"/aboutUs"}>ABOUT</Link>
                </li>
                <li>
                  <Link href={"/help"}>HELP</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
