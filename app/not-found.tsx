import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <main className="h-screen grid place-content-center gap-4">
      <FaceFrownIcon className="w-10 text-gray-400 justify-self-center" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <Link
        href="/"
        className="mt-4 rounded-md bg-info-main px-4 py-2 text-sm text-info-surface text-center transition-colors hover:bg-info-hover"
      >
        Go Back
      </Link>
    </main>
  );
}
