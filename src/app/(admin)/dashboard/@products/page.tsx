'use client';

import { useState } from 'react';

export default function AdminProductPage() {
  const [status, setStatus] = useState('');
  const revalidate = async () => {
    const res = await fetch(
      `http://localhost:3000/api/revalidate?tag=products&secret=Vito120302`,
      {
        method: 'POST',
      },
    );

    if (!res.ok) {
      setStatus('Revalidate Failed');
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus('Revalidate Success');
      }
    }
  };
  return (
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] justify-center items-center flex mr-5">
      <div>
        <h1>Admin Product</h1>
        <h1>{status}</h1>
        <button
          className="bg-white text-black p-3 mx-auto"
          onClick={() => revalidate()}
        >
          Revlidate
        </button>
      </div>
    </div>
  );
}
