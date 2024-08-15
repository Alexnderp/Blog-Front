import {
  HouseLine,
  ListDashes,
  Note,
  User,
  UserList,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className=" fixed top-[30%] right-0 m-10">
      <ul className=" h-[25vh] w-[13vw] bg-gradient-to-r from-slate-900 to-slate-700 border-2 px-1 py-4 border-lime-400 rounded-3xl shadow-[-11px_-10px_20px_10px_#00000024] xl:w-[3vw] xl:h-[32vh] xl:px-[.0rem]">
        <li className="">
          <Link to={"/home"}>
            <HouseLine
              alt="Home"
              className="text-lime-400 size-[2.5rem] p-[.3rem] duration-500 hover:p-[.1rem] hover:text-white"
            />
          </Link>
        </li>
        <li>
          <User className="text-lime-400 size-[2.5rem] p-[.3rem] duration-500 hover:p-[.1rem] hover:text-white" />
        </li>
        <li>
          <Note className="text-lime-400 size-[2.5rem] p-[.3rem] duration-500 hover:p-[.1rem] hover:text-white" />
        </li>
        <li>
          <UserList className="text-lime-400 size-[2.5rem] p-[.3rem] duration-500 hover:p-[.1rem] hover:text-white" />
        </li>
        <li>
          <Link to={"/themes"}>
            <ListDashes
              alt="themes"
              className="text-lime-400 size-[2.5rem] p-[.3rem] duration-500 hover:p-[.1rem] hover:text-white"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
