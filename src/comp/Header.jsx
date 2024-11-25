import { Link } from "react-router-dom";
import { useState } from "react";

import {
  SignIn,
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Header() {
  const { user } = useUser();

  const add = () => {
    const metadata = user?.unsafeMetadata;
    if (!metadata) return;
    if (!metadata.cart) metadata.cart = {};
    const cart = metadata.cart;
    return Object.keys(cart).length;
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between p-10 h-20 place-items-center border-b-4 border-dotted border-gray-300 md:flex md:items-center md:justify-between z-20 bg-white ">
      <div className="flex flex-1 justify-between items-center">
        <img src="https://react18-ecommerce.vercel.app/images/logo.png" />

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <img
            className="cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png"
            width={30}
            height={30}
          />
        </button>
      </div>

      <ul
        className={`md:flex md:justify-center md:static absolute border-2 border-gray-400 md:border-none bg-white w-48 right-0 
        md:w-auto transition-all duration-500 ease-in z-20
        ${
          isOpen
            ? "top-20 opacity-100 "
            : " top-[-200px] md:opacity-100 opacity-0"
        }`}
      >
        <Link to="/">
          <li className="mx-4 my-6 md:my-0 text-gray-400 font-bold cursor-pointer hover:text-black duration-500">
            Hүүр
          </li>
        </Link>
        <SignedIn>
          <Link to="/cart/">
            <li className="mx-4 my-6 md:my-0 text-gray-400 font-bold cursor-pointer hover:text-black duration-500">
              Сагс : {add()}
            </li>
          </Link>
        </SignedIn>
        <li className="mx-4 my-6 md:my-0 border-white hover:border-gray-200 border-4 rounded-xl duration-500">
          <SignedOut>
            <SignInButton className="bg-gray-300 rounded p-1 flex justify-center items-center">
              Нэвтрэх
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton showName></UserButton>
          </SignedIn>
        </li>
      </ul>
    </nav>
  );
}
