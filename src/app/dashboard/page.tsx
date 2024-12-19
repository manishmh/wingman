'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/home');
  }, [router]); 

  return <div>Loading...</div>;
}

export default Dashboard 