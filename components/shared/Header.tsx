"use client";
import { cn } from "@/lib/utils";
import { Home, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const checkScroll = () => {
    window.scrollY >= 200 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  return (
    <header
      className={cn(
        "bg-bg z-40 fixed top-0 left-0 w-full  flex items-center justify-between px-10 gap-3",
        scrolled ? "shadow-md" : "shadow-sm"
      )}
    >
      <Link
        href="/"
        className="relative flex gap-2 items-center "
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1200"
      >
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
      <nav className="max-md:hidden flex items-center justify-center gap-5 ">
        <Link
          href="/"
          className="text-text hover:text-primary text-md font-semibold flex items-center gap-2 justify-center"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          <Home className="h-5 w-5" />
          <p>Home</p>
        </Link>

        <Link
          href="/shop/watch"
          className="text-text hover:text-primary text-md font-semibold flex items-center gap-2 justify-center"
          data-aos="fade-left"
          data-aos-delay="350"
          data-aos-duration="1200"
        >
          <ShoppingBag className="h-5 w-5" />
          <p>Watches</p>
        </Link>

        <Link
          href="/shop/jackets"
          className="text-text hover:text-primary text-md font-semibold flex items-center gap-2 justify-center"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1200"
        >
          <ShoppingBag className="h-5 w-5" />
          <p>Leather Jackets</p>
        </Link>
      </nav>

      <div
        className="md:hidden relative"
        onClick={() => setMobileNav((prev) => !prev)}
      >
        <i
          className={`fas ${
            mobileNav ? "fa-times" : "fa-bars"
          } text-text text-2xl cursor-pointer`}
        ></i>
      </div>

      {/* Mobile Nav */}
      {mobileNav && (
        <nav
          className="md:hidden max-w-[250px] w-full flex flex-col gap-4 absolute z-50 top-[80%] right-5 justify-center bg-neutral-100 text-black px-3 py-2 rounded-md shadow-sm"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="400"
        >
          <Link
            href="/"
            className="text-text flex items-center gap-2"
            onClick={() => setMobileNav(false)}
          >
            <Home className="w-5 h-5" />
            <p>Home</p>
          </Link>
          <Link
            href="/shop/watch"
            className="text-text flex items-center gap-2"
            onClick={() => setMobileNav(false)}
          >
            <ShoppingBag className="h-5 w-5" />
            <p>Watches</p>
          </Link>
          <Link
            href="/shop/jackets"
            className="text-text flex items-center gap-2"
            onClick={() => setMobileNav(false)}
          >
            <ShoppingBag className="h-5 w-5" />
            <p>Leather Jackets</p>
          </Link>
        </nav>
      )}
    </header>
  );
};
