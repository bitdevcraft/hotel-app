import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const menus = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About Us",
    route: "/#about-us",
  },
  {
    label: "Services",
    route: "/#services",
  },
  {
    label: "Gallery",
    route: "/#gallery",
  },
  {
    label: "Book Now",
    route: "/",
  },
];

export default function Header() {
  return (
    <div className="max-w-5xl mx-auto flex justify-between items-start md:items-center py-3 px-4 font-eb-garamond absolute top-0 right-0 left-0 text-white z-999">
      <div>
        <p className="text-3xl md:text-4xl">Hotel</p>
      </div>
      <ul className="hidden md:flex justify-end items-center gap-8 font-montserrat">
        {menus.map((el, i) => (
          <li key={i}>
            <Link href={el.route}>{el.label}</Link>
          </li>
        ))}
      </ul>

      <div className="flex md:hidden font-montserrat">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="border rounded p-2">
              <Menu size={16} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mx-2 flex flex-col gap-2 text-sm p-4">
            {menus.map((el, i) => (
              <Link key={i} href={el.route}>
                {el.label}
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
