import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../assests/menu-icon.png";

export default function PageHeader() {
  const [isactive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isactive);
  };
  return (
    <>
      <header className="container mx-auto shadow-md md:shadow-none flex justify-between px-5 py-3 border-b md:block md:text-center md:border-0 md:mt-5">
        <NavLink to="/home">
          <h1 title="Logo" className="font-mont font-bold text-xl md:text-2xl lg:text-4xl">
            <span className="inline-block font-opensans text-xs -rotate-90 pl-1 md:text-xl md:pl-3">
              The
            </span>
            Siren
          </h1>
        </NavLink>
        <img
          title="Menu"
          onClick={toggleClass}
          className="cursor-pointer md:hidden"
          src={menu}
          alt="menu"
          width={"25px"}
        />
      </header>
      {isactive && (
        <nav className="container bg-white mx-auto md:mt-5 md:hidden">
          <ul className="text-center font-mont font-medium divide-y md:divide-y-0 md:border-b md:pb-2 md:text-lg md:flex md:justify-between">
            <li className="py-2">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="py-2">
              <NavLink to="category/technology">Technology</NavLink>
            </li>
            <li className="py-2">
              <NavLink to="category/hollywood">Hollywood</NavLink>
            </li>
            <li className="py-2">
              <NavLink to="category/fitness">Fitness</NavLink>
            </li>
            <li className="py-2">
              <NavLink to="category/food">Food</NavLink>
            </li>
            <li className="py-2">
              <NavLink to="category/sandalwood">Sandalwood</NavLink>
            </li>
          </ul>
        </nav>
      )}
      <nav className="hidden md:block container mx-auto md:mt-5">
        <ul className="text-center font-mont font-medium divide-y md:divide-y-0 md:border-b md:pb-2 md:text-lg md:flex md:justify-around">
          <li className="py-2">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="category/sdfasd/technology">Technology</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="category/sdfasd/technology">Technology</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="category/hollywood">Hollywood</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="category/fitness">Fitness</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="category/food">Food</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="category/sandalwood">Sandalwood</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="category/sandalwood">Sandalwood</NavLink>
          </li>
          <li className="py-2">
            <NavLink to="category/sandalwood">Sandalwood</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
