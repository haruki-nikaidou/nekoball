import {Navbar, NavbarBrand} from "@nextui-org/react";
import Image from "next/image";
import neko from './neko.svg'

export default function UserNav() {
  return (
    <Navbar isBordered={true}>
      <NavbarBrand>
        <Image src={neko} alt="Neko Ball" height={40} />
        <h1 className='text-lg ml-3 font-bold'>
          Neko Ball
        </h1>
      </NavbarBrand>
    </Navbar>
  )
}