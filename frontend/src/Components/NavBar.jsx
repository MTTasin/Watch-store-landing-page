import { Button, Navbar } from "flowbite-react";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";



export default function NavBar() {
  return (
    <Navbar fluid rounded className="bg-[#98683b]">
      <Navbar.Brand href="#">
        <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-white font-mono uppercase">Brionzz</span>
      </Navbar.Brand>
      <div className="flex md:order-2 justify-between items-center text-white gap-3 ">
        <span className="text-xl"><FaRegUser /></span>
        <span className="text-2xl"><IoIosSearch /></span>
        <span className="hambutton"><Navbar.Toggle /></span>
      </div>
      <Navbar.Collapse className="uppercase">
        <Navbar.Link href="#" className="text-gray-200 md:text-gray-300">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">Shop</Navbar.Link>
        <Navbar.Link href="#" className="text-white">Pages</Navbar.Link>
        <Navbar.Link href="#" className="text-white">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
