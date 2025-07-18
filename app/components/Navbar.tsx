import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-neutral-800 text-green-500">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Wipeout Logo */}
            <h2 className="font-extrabold">Wipeout</h2>
            {/* Wipeout Logo - mobile */}
          </div>
        </Link>
        <ul className="flex items-center gap-3">
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/tv">TV</Link>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/t-shirts">T-shirts</Link>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/hoodies">Hoodies</Link>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Mobile Hamburger Nav */}
    </header>
  );
}
