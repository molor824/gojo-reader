import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const NAVBAR_ITEMS = [
  { title: "Home", link: "/" },
  { title: "Read", link: "/read" },
  { title: "Review", link: "/review" },
  { title: "About Us", link: "/about" },
];

export const Header = () => {
  const location = useLocation();
  const [extend, setExtend] = useState(false);
  return (
    <header className="sticky w-full top-0 z-50 px-6 py-4 bg-black/50 backdrop-blur-sm">
      <nav className="flex justify-between items-center container mx-auto">
        <Link to="/" className="text-3xl font-bold">
          Gojo-Reader
        </Link>

        <div className="hidden md:flex items-stretch">
          {NAVBAR_ITEMS.map(({ title, link }, index) => (
            <Link
              key={index}
              to={link}
              className={`${
                location.pathname === link ? "font-bold" : ""
              } text-gray-200 text-2xl hover:bg-white/20 p-2 px-4`}
            >
              {title}
            </Link>
          ))}

          <SignedOut>
            <SignInButton>
              <button className=" border text-2xl rounded-2xl p-2 text-gray-200 hover:bg-white/20  px-4">
                Нэвтрэх
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              showName
              appearance={{
                elements: {
                  userButtonAvatarBox: "border-2 border-white",
                  userButtonTrigger: "text-white hover:opacity-75",
                },
              }}
            />
          </SignedIn>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setExtend((e) => !e)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
      {extend && (
        <>
          <div
            className="fixed top-0 left-0 w-screen h-screen"
            onClick={() => setExtend(false)}
          ></div>
          <div className="absolute top-full right-4 bg-black/50 backdrop-blur-sm text-right min-w-[100px] flex flex-col items-stretch">
            {NAVBAR_ITEMS.map(({ title, link }, index) => (
              <Link
                key={index}
                to={link}
                className={`hover:bg-white/20 p-2 ${
                  location.pathname === link ? "font-bold" : ""
                }`}
              >
                {title}
              </Link>
            ))}
            <SignedOut>
              <div className="m-1">
                <SignInButton>
                  <button className="hover:bg-white/20 w-full p-1 rounded-lg border-white border-[1px]">
                    Нэвтрэх
                  </button>
                </SignInButton>
              </div>
            </SignedOut>
            <SignedIn>
              <div className="hover:bg-white/20">
                <UserButton
                  showName
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "border-[2px] border-white",
                      userButtonTrigger: "text-white hover:opacity-75",
                      userButtonBox: "p-2",
                    },
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </>
      )}
    </header>
  );
};
