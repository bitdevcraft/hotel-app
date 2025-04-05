import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "./ui/button";

const menus = [
  {
    label: "About Hotel",
    route: "/",
  },
  {
    label: "Contact Us",
    route: "/",
  },
  {
    label: "Dining",
    route: "/",
  },
  {
    label: "Special Offers",
    route: "/",
  },
  {
    label: "Services",
    route: "/",
  },
  {
    label: "Blogs",
    route: "/",
  },
  {
    label: "FAQs",
    route: "/",
  },
  {
    label: "Privacy Policy",
    route: "/",
  },
  {
    label: "Cookies Policy",
    route: "/",
  },
];

const menuCol = Array.from({ length: Math.ceil(menus.length / 5) }).map(() => {
  return menus.splice(0, 5);
});

export default function Footer() {
  return (
    <div className="max-w-5xl mx-auto font-montserrat">
      <hr />
      <div className="flex flex-col md:flex-row justify-between items-start py-16 gap-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 px-4 gap-x-16">
          {menuCol.map((arr, i) => (
            <ul key={i} className="flex flex-col gap-4">
              {arr.map((el, i) => (
                <li key={i}>{el.label}</li>
              ))}
            </ul>
          ))}
        </div>
        <div className="flex justify-end basis-1 mx-auto md:mx-0">
          <div className="mx-auto">
            <p className="font-eb-garamond mb-3">Let&lsquo;s Stay in Touch</p>
            <Button className="rounded-none text-sm font-light mb-3">
              NEWSLETTER SIGN-UP
            </Button>
            <div className="flex justify-between items-center mb-3">
              <Facebook size={16} />
              <Twitter size={16} />
              <Instagram size={16} />
              <Linkedin size={16} />
              <Youtube size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
