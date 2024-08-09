import {
  HouseLine,
  ListDashes,
  Note,
  User,
  UserList,
} from "@phosphor-icons/react";
import React from "react";

function Nav() {
  return (
    <nav className=" fixed top-[30%] right-0 m-10">
      <ul className=" h-[25vh] w-[13vw] border-2 px-1 py-4 border-lime-400 rounded-3xl bg-transparent shadow-[-11px_-10px_20px_10px_#00000024] xl:w-[3vw] xl:h-[32vh] xl:px-[.0rem]">
        <li className="">
          <HouseLine className="text-lime-400 size-[2.5rem] p-[.3rem] duration-500 hover:p-[.1rem] hover:text-white"/>
        </li>
        <li>
          <User className="text-lime-400 size-[2.5rem] p-[.3rem] duration-500 hover:p-[.1rem] hover:text-white"/>
        </li>
        <li>
          <Note className="text-lime-400 size-[2.5rem] p-[.3rem] duration-500 hover:p-[.1rem] hover:text-white"/>
        </li>
        <li>
          <UserList className="text-lime-400 size-[2.5rem] p-[.3rem] duration-500 hover:p-[.1rem] hover:text-white"/>
        </li>
        <li>
          <ListDashes className="text-lime-400 size-[2.5rem] p-[.3rem] duration-500 hover:p-[.1rem] hover:text-white"/>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
