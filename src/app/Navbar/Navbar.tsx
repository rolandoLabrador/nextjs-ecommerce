import Image from "next/image";
import Link from "next/link";
import logo from "./logo.png";


export default function Navbar() {
  return (
    <div className="bg-base-100">
      <div className="max-w-7x navbar m-auto flex-col gap-2 sm:flex-row"></div>
            <div className="flex-1">
                <link href="/">
                    <Image src={logo} height={40} width={40} alt="Flowmazon logo" />

                </link>
            </div>
    </div>
  );
}
