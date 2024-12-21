'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000); 
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-dark-green">404</h1>
      <p className="text-2xl text-gray-600 mt-4">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <p className="text-gray-600 mt-2">Redirecting to home in 3 seconds...</p>
    </div>
  );
};

export default Custom404;
