'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getToken, removeToken } from '@/lib/auth';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch('http://localhost:3000/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error();
        const data = await res.json();
        setUser(data);
      } catch (err) {
        removeToken();
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) return <p>در حال بارگذاری...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">داشبورد</h1>
      <p>خوش آمدید {user?.username} 👋</p>
      <button
        onClick={() => {
          removeToken();
          router.push('/login');
        }}
        className="bg-red-600 text-white px-4 py-2 mt-4 rounded"
      >
        خروج
      </button>

    </div>
    
  );
}
