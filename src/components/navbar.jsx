import React, { useState } from "react";
import {
  ShoppingBagIcon,
  CursorArrowRaysIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="shadow-md w-full sticky top-0 z-50">
      <div className="bg-white md:px-10 py-4 px-7 md:flex justify-between">
        <div className="flex gap-2 items-center cursor-pointer text-xl">
          <ShoppingBagIcon className="w-7 h-7 text-slate-600" />
          <span className="font-bold text-slate-600">Awesome-Store</span>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1]
        left-0  w-full pl-9 md:w-auto transition-all bg-white duration-500 ease-in 


        text-slate-600 ${isOpen ? "top-12" : "top-[-490px]"}`}
        >
          <li className="my-7 md:my-0 md:ml-8">
            <a href="/cart">
              <ShoppingCartIcon className="w-7 h-7 text-slate-600" />
            </a>
          </li>
          <li className="font-semibold my-7 md:my-0 md:ml-8">
            <a href="/contact">Contact</a>
          </li>
          <li className="font-semibold my-7 md:my-0 md:ml-8">
            <a href="/about">About</a>
          </li>
          <li className="my-7 md:my-0 md:ml-8">
            <a href="/profile">
              <UserIcon className="w-7 h-7 text-slate-600" />
            </a>
          </li>
          <button className="btn bg-blue-600  text-white py-1 px-3 md:ml-8 rounded-xl md:static">
            login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
