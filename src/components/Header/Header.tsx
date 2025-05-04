"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';

function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  const logoImage = (
    <Image
      src="/star-wars-logo.png"
      alt="Star Wars Logo"
      width={184.56}
      height={80}
      priority
    />
  );

  return (
    <header className='bg-black w-full border-b border-grey pt-4 mb-3'>
      {isHomePage ? (
        // On the homepage, just render the logo directly, no links
        <h3 className='flex justify-center'><span className='sr-only'>Star Wars Charecters Database</span>{logoImage}</h3>
      ) : (
        // On any other page, wrap the logo in a Link to the homepage
        <h3 className='flex justify-center'><span className='sr-only'>Star Wars Charecters Database</span>
          <Link href="/" aria-label="Go to homepage">
            {logoImage}
          </Link>
        </h3>
      )}
      <Navbar />
    </header>
  );
}

export default Header;