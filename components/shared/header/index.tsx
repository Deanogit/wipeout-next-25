import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/app/lib/constants';

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/wipeout-logo.png"
              alt="Wipeout Surf Logo"
              height={400}
              width={770}
              priority={true}
              className="w-20 md:w-30"
            />
          </Link>
        </div>
        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/sign-in">
              <ShoppingCart /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
