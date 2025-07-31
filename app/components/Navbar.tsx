import Link from 'next/link';
import Image from 'next/image';
import wipeoutLogo from '@/public/wipeout-logo.png';

export default function Navbar() {
  return (
    <header className="w-full bg-gray-50 text-green-500 top-0 left-0 right-0 fixed z-30 opacity-80 hover:opacity-95 duration-300 shadow-lg">
      <nav className="justify-between px-6 py-4 flex md:mx-8">
        <Link href="/" className="m-auto md:m-0">
          <div className="relative cursor-pointer">
            {/* Wipeout Logo */}
            <Image
              className="w-24 md:w-32 object-cover"
              src={wipeoutLogo}
              width={770}
              height={400}
              alt=""
            />
            {/* Wipeout Logo - mobile */}
          </div>
        </Link>
        <ul className="items-center gap-3 hidden md:flex">
          {/* <li className="text-sm uppercase cursor-pointer">
            <Link href="/tv">TV</Link>
          </li> */}
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/t-shirts">T-shirts</Link>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/hoodies">Hoodies</Link>
          </li>
          {/* <li className="text-sm uppercase cursor-pointer">
            <Link href="/about">About</Link>
          </li> */}
          {/* <li className="text-sm uppercase cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>
      {/* Mobile Hamburger Nav */}
    </header>
  );
}
