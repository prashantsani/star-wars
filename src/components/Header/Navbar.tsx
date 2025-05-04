import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navLinks from './navLinks';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full p-4">
      <ul className="flex justify-center items-center space-x-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`text-grey hover:text-white transition-colors ${
                  isActive ? 'font-bold text-white active underline' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
