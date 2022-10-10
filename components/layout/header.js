import Link from "next/link";
import { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav((prev) => !prev);

  let navclasses;
  if (nav) {
    navclasses =
      "md:hidden absolute left-0  text-xl bg-mainbg w-full h-[calc(100vh-80px)] flex justify-center flex-col align-middle px-8 py-10 ";
  } else {
    navclasses =
      "hidden md:hidden absolute left-0  text-xl bg-mainbg w-full h-[calc(100vh-80px)] flex justify-center flex-col align-middle px-8 py-10 ";
  }
  return (
    <header className=" h-[80px] z-10 text-white bg-mainbg  relative ">
      <div className="px-6 flex justify-between items-center w-full h-full md:px-11">
        <h1 className="text-2xl font-headingFont font-bold mr-4 sm:text-3xl">
          <Link href="/">Logo</Link>
        </h1>

        <nav className="hidden md:flex md:text-xl ">
          <ul className="hidden md:flex text-xl navbar-list">
            <li className="p-4">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4">
              <Link href="/blog">About</Link>
            </li>
            <li className="p-4">
              <Link href="/about">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="md:hidden cursor-pointer" onClick={handleClick}>
          {!nav ? <HiMenu className="" size={30} /> : <HiX size={30} />}
        </div>
      </div>

      {nav && (
        <ul className={navclasses}>
          <li className="text-center py-2" onClick={handleClick}>
            <Link href="/">Home</Link>
          </li>
          <li className="text-center py-2" onClick={handleClick}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className="text-center py-2" onClick={handleClick}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
