"use client";
import { cn } from "@/lib/utils";
import type React from "react";
import { ChevronDown, Home, Menu, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

type DropdownItem = {
  title: string;
  href: string;
};

type NavItem = {
  title: string;
  href: string;
  icon?: React.ReactNode;
  dropdown?: DropdownItem[];
};

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const navItems: NavItem[] = [
    {
      title: "Home",
      href: "/",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "Services",
      href: "#",
      icon: <ShoppingBag className="h-5 w-5" />,
      dropdown: [
        {
          title: "Facebook Monetization",
          href: "/#fb-monetization",
        },
        {
          title: "YouTube Monetization",
          href: "/#yt-monetization",
        },
        { title: "Netflix", href: "/#netflix" },
        { title: "IPTV", href: "/#iptv" },
      ],
    },
    {
      title: "Leather Goods",
      href: "#",
      icon: <ShoppingBag className="h-5 w-5" />,
      dropdown: [
        { title: "Leather Jackets", href: "/shop/jackets" },
        { title: "Leather Gloves", href: "/shop/gloves" },
      ],
    },
    {
      title: "Watches",
      href: "/shop/watch",
      icon: <ShoppingBag className="h-5 w-5" />,
    },
  ];

  const checkScroll = () => {
    window.scrollY >= 200 ? setScrolled(true) : setScrolled(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (activeDropdown) {
      const dropdownRef = dropdownRefs.current[activeDropdown];
      if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", checkScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown, hoveredItem]);

  const handleMouseEnter = (title: string) => {
    if (window.innerWidth >= 768) {
      setHoveredItem(title);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setHoveredItem(null);
    }
  };

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header
      className={cn(
        "bg-white z-40 fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-10 py-1 transition-all duration-300",
        scrolled ? "shadow-md" : "shadow-sm"
      )}
    >
      <Link href="/" className="relative flex gap-2 items-center">
        <Image
          src="/images/header-logo.png"
          alt="logo"
          width={80}
          height={40}
          className="object-cover"
        />
        <span className="text-primary text-xl max-sm:hidden font-extrabold">
          GEN X STORE 2
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="max-md:hidden flex items-center justify-center gap-6">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            // @ts-ignore
            ref={(el) => (dropdownRefs.current[item.title] = el)}
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
          >
            {item.dropdown ? (
              <>
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className={cn(
                    "text-gray-700 hover:text-primary text-md font-semibold flex items-center gap-2 justify-center transition-colors",
                    (activeDropdown === item.title ||
                      hoveredItem === item.title) &&
                      "text-primary"
                  )}
                >
                  {item.icon}
                  <p>{item.title}</p>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      (activeDropdown === item.title ||
                        hoveredItem === item.title) &&
                        "rotate-180"
                    )}
                  />
                </button>
                {(activeDropdown === item.title ||
                  hoveredItem === item.title) && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                    {item.dropdown.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                        onClick={() => {
                          setActiveDropdown(null);
                          setHoveredItem(null);
                        }}
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className="text-gray-700 hover:text-primary text-md font-semibold flex items-center gap-2 justify-center transition-colors"
              >
                {item.icon}
                <p>{item.title}</p>
              </Link>
            )}
          </div>
        ))}
      </nav>

      <button
        className="md:hidden flex items-center justify-center"
        onClick={() => setMobileNav((prev) => !prev)}
        aria-label={mobileNav ? "Close menu" : "Open menu"}
      >
        {mobileNav ? (
          <X className="h-6 w-6 text-gray-700" />
        ) : (
          <Menu className="h-6 w-6 text-gray-700" />
        )}
      </button>

      {mobileNav && (
        <nav className="md:hidden max-w-[280px] w-full flex flex-col gap-1 absolute z-50 top-[100%] right-0 justify-center bg-white text-gray-700 px-4 py-3 rounded-b-md shadow-lg border-t border-gray-100">
          {navItems.map((item, index) => (
            <div key={index} className="w-full">
              {item.dropdown ? (
                <div className="w-full">
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className={cn(
                      "w-full text-left py-2.5 px-3 rounded-md flex items-center justify-between hover:bg-gray-50 transition-colors",
                      activeDropdown === item.title && "bg-gray-50"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        activeDropdown === item.title && "rotate-180"
                      )}
                    />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="ml-8 mt-1 mb-2 border-l-2 border-gray-200 pl-2">
                      {item.dropdown.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          href={dropdownItem.href}
                          className="block py-2 px-3 text-sm hover:text-primary"
                          onClick={() => setMobileNav(false)}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="w-full block py-2.5 px-3 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileNav(false)}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};
