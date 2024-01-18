import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-9xl">404</h1>
      <h2 className="text-xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="btn bg-blue-400 rounded p-4 mt-5">
        Return Home
      </Link>
    </div>
  );
}
