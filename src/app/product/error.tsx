'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something Error</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
