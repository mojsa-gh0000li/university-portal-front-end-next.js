'use client';

import { useState } from 'react';
import { api } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { setToken } from '@/lib/auth';
import { Eye, EyeOff, User } from 'lucide-react';
import Image from 'next/image';
import { ModeToggle } from '@/components/ModeToggle';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.login({ username: form.username, password: form.password });
      setToken(res.access_token);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'خطایی رخ داده است.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-white to-rose-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 flex flex-col items-center justify-center px-4 font-yekan relative">
      
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-8 p-8 bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-3xl shadow-2xl mt-5 mb-5"
        dir="rtl"
      >
        <div className="flex justify-center mb-4">
          <Image src="/logo.png" alt="لوگو" width={150} height={150} className="dark:invert" />
        </div>

        <h2 className="text-center text-lg font-bold">خوش برگشتید</h2>

        <div className="relative">
          <input
            type="text"
            name="username"
            placeholder="نام کاربری"
            value={form.username}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full pl-10"
          />
          <User className="absolute left-3 top-3 text-gray-400" />
        </div>

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="رمز عبور"
            value={form.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3 w-full pl-10"
          />
          {showPassword ? (
            <EyeOff className="absolute left-3 top-3 text-gray-400 cursor-pointer" onClick={() => setShowPassword(false)} />
          ) : (
            <Eye className="absolute left-3 top-3 text-gray-400 cursor-pointer" onClick={() => setShowPassword(true)} />
          )}
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="flex justify-center mt-6">
          <Image src="/map.png" alt="تصویر فرم" width={120} height={120} className="dark:invert" />
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white w-full py-3 rounded-lg text-lg hover:bg-red-600 transition-colors"
        >
          ورود
        </button>

        <p className="text-center text-sm">
          حساب ندارید؟{' '}
          <a href="/register" className="text-red-500 font-semibold hover:underline">
            ثبت‌نام کنید
          </a>
        </p>
      </form>
    </div>
  );
}
