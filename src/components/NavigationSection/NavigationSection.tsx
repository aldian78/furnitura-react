import { HeartIcon, SearchIcon, ShoppingBagIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { InputSearch } from "../ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";

// Navigation data for mapping
const mainNavItems = [
  { label: "HOME", path: "/home", hasDropdown: false },
  { label: "SHOP", path: "/product", hasDropdown: false },
  { label: "BLOG", path: "/blog", hasDropdown: false },
  { label: "ABOUT US", path: "/about-us", hasDropdown: false },
];

const rightNavItems = [
  { label: "LOVE", icon: <HeartIcon className="w-5 h-5" /> },
  { label: "CART", icon: <ShoppingBagIcon className="w-5 h-5" /> },
];

export const NavigationSection = (): JSX.Element => {
  return (

    <header className="flex flex-wrap justify-center gap-8 pt-8 pl-20 pr-20 pb-8 lg:px-24">
      <img className="w-[200px] h-[42px]" alt="Logo" src="/logo.svg" />

      <div className="flex items-center gap-3 px-0 py-3 border-b border-neutral-300">
        <SearchIcon className="w-5 h-5" />
        <InputSearch
          className="border-none p-0 h-auto font-h3-16-medium text-black-3 placeholder:text-black-3 focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Search"
        />
      </div>

      <NavigationMenu className="flex-1">
        <NavigationMenuList className="flex items-center gap-9">
          {mainNavItems.map((item, index) => (
            <NavigationMenuItem
              key={index}
              className="inline-flex items-start gap-0.3"
            >
              {item.hasDropdown ? (
                <NavigationMenuTrigger className="p-0 bg-transparent hover:bg-transparent focus:bg-transparent">
                    <NavigationMenuLink asChild>
                      <a href={item.path} className="font-h3-16-bold text-black-1">
                        {item.label}
                      </a>
                    </NavigationMenuLink>
                </NavigationMenuTrigger>
              ) : (
                    <NavigationMenuLink asChild>
                      <a href={item.path} className="font-h3-16-bold text-black-1">
                        {item.label}
                      </a>
                    </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center justify-end gap-11 flex-1">
        {rightNavItems.map((item, index) => (
          <div key={index} className="inline-flex items-start gap-1">
            {item.icon}
            <span className="font-h3-16-bold text-black-1">{item.label}</span>
          </div>
        ))}
      </div>
    </header>
  );
};
