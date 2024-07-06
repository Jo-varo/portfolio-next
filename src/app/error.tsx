'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="text-center py-6 md:py-10">
      <h2 className="text-center text-2xl">Something went wrong!</h2>
      <button
        className="group relative inline-flex justify-center items-center overflow-hidden rounded-md bg-neutral-950 px-6 py-2 font-medium text-neutral-200 mt-4"
        onClick={() => reset()}
      >
        <span>Try again</span>
        <div className="ml-1 transition duration-500 group-hover:rotate-[360deg]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </div>
      </button>
    </main>
  );
}
