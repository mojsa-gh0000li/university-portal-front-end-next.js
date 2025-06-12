'use client';

import { useEffect, useState } from 'react';
import { getToken } from '@/lib/auth';
import { useRouter } from 'next/navigation';

interface Reservation {
  id: number;
  date: string;
  meal: string;
}

export default function FoodReservationPage() {
  const router = useRouter();
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ date: '', meal: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const token = getToken();

  useEffect(() => {
    if (!token) return router.push('/login');

    const fetchReservations = async () => {
      try {
        const res = await fetch('http://localhost:3000/food-reservation', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setReservations(data);
        }
      } catch (err) {
        console.error('خطا در بارگذاری رزروها:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [router, token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      const res = await fetch('http://localhost:3000/food-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('خطا در ارسال رزرو');

      setSuccessMessage('رزرو با موفقیت ثبت شد');
      setForm({ date: '', meal: '' });

      // به‌روزرسانی لیست رزروها
      const updated = await res.json();
      setReservations((prev) => [...prev, updated]);
    } catch (err) {
      setError('خطا در ثبت رزرو');
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-green-700">رزرو غذا</h1>

      <div className="bg-white shadow rounded-lg p-4 space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">لیست رزروهای شما</h2>
        {reservations.length === 0 ? (
          <p className="text-gray-500">رزروی ثبت نشده است.</p>
        ) : (
          <ul className="space-y-2">
            {reservations.map((r, i) => (
              <li key={i} className="border p-3 rounded text-sm bg-gray-50">
                <span className="font-semibold text-gray-700">{r.meal}</span> در تاریخ <span>{r.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">رزرو جدید</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
          />
          <select
            name="meal"
            value={form.meal}
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
          >
            <option value="">انتخاب وعده</option>
            <option value="ناهار">ناهار</option>
            <option value="شام">شام</option>
          </select>

          {successMessage && <p className="text-green-600">{successMessage}</p>}
          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded"
          >
            ثبت رزرو
          </button>
        </form>
      </div>
    </div>
  );
}
