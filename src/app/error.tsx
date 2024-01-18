'use client';

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-9xl">500</h1>
      <h2 className="text-xl">Something went wrong</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}
