import {Navbar, NavbarBrand, NavbarContent} from "@nextui-org/react";
import Image from "next/image";
import neko from './neko.svg'
import {ThemeSwitch} from "@/components/ThemeSwitch";

export default function UserNav() {
  return (
    <Navbar isBordered={true} maxWidth="xl">
      <NavbarContent>
        <NavbarBrand>
          <a href='/' className='flex items-center gap-2'>
            <Image src={neko} alt="Neko Ball" height={40} />
            <h1 className='text-lg font-bold'>
              Neko Ball
            </h1>
          </a>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent></NavbarContent>

      <NavbarContent className='justify-end' justify="end">
        <ThemeSwitch />
      </NavbarContent>
    </Navbar>
  )
}