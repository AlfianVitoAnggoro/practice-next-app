import Link from '../../node_modules/next/link';
import { usePathname } from '../../node_modules/next/navigation';
import { signIn, useSession, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status }: { data: any; status: string } = useSession();
  return (
    <nav className="flex bg-gray-900 py-2 px-5 justify-between">
      <div className="flex">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-5">
          <li
            className={`mr-3 cursor-pointer ${
              pathname === '/' ? 'text-blue-600' : 'text-white'
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`mr-3 cursor-pointer  ${
              pathname === '/about' ? 'text-blue-600' : 'text-white'
            }`}
          >
            {' '}
            <Link href="/about">About</Link>
          </li>
          <li
            className={`mr-3 cursor-pointer ${
              pathname === '/about/profile' ? 'text-blue-600' : 'text-white'
            }`}
          >
            {' '}
            <Link href="/about/profile">Profile</Link>
          </li>
        </ul>
      </div>
      <div>
        {status === 'unauthenticated' ? (
          <div>
            <button
              className="bg-white text-black rounded px-3 cursor-pointer"
              onClick={() => signIn()}
            >
              Login
            </button>
          </div>
        ) : (
          <div className="flex">
            <Image
              src="/images/profile.png"
              width={25}
              height={25}
              alt="profile"
              className="w-6 h-6 rounded-full mr-3"
            />
            <h4 className="text-white mr-3">{session?.user?.fullname}</h4>
            <button
              className="bg-white text-black rounded px-3 cursor-pointer"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
