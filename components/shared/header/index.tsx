import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/wipeout-logo.png"
              alt={`${APP_NAME} Logo`}
              height={400}
              width={770}
              priority={true}
              className="w-20 md:w-30"
            />
          </Link>
        </div>

        <Menu />
      </div>
    </header>
  );
}
