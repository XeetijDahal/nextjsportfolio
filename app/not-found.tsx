"use client";
export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-red-500">404</h1>
      <p className="mt-4 text-xl text-gray-700">This page could not be found.</p>
      <a
        href="/"
        className="mt-6 inline-block px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go home
      </a>
    </main>
  );
}