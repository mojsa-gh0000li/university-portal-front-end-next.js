"use client";

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-100 via-white to-rose-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 relative overflow-hidden font-yekan">

      {/* 🌀 Aurora Background Effects */}
      <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-rose-300 via-rose-400 to-rose-500 dark:from-purple-800 dark:via-blue-900 dark:to-cyan-900 opacity-30 rounded-full blur-[140px] animate-pulse z-0" />
      <div className="absolute -bottom-32 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-pink-300 via-rose-400 to-rose-500 dark:from-pink-800 dark:via-red-800 dark:to-orange-800 opacity-30 rounded-full blur-[160px] animate-pulse z-0" />

      {/* 🌐 Navbar */}
      <nav className="relative z-10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-md rounded-2xl mx-6 my-4 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-full dark:invert" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">University Portal</span>
        </div>
        <div className="flex items-center gap-6">
           <ModeToggle />
        </div>
      </nav>

      {/* 📦 Main Card */}
      <div className="z-10 w-full max-w-3xl mx-auto mt-10 p-10 sm:p-16 bg-white/60 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-3xl shadow-2xl text-center">
        <Image
          src="/logo.png"
          alt="App Logo"
          width={150}
          height={120}
          className="mx-auto mb-6 dark:invert drop-shadow-md"
        />
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
          به سامانه مدیریت دانشگاه تبریز خوش آمدید
        </h1>
        <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 mb-8">
          .برای استفاده از امکانات سامانه، لطفاً ابتدا وارد شوید یا ثبت‌نام کنید 
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="relative group overflow-hidden text-white bg-rose-600 px-8 py-3 rounded-full shadow transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 bg-rose-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full"></span>
            <span className="relative z-10">ورود</span>
          </Link>
          <Link
            href="/register"
            className="relative group overflow-hidden text-rose-600 border border-rose-600 dark:text-white dark:border-white bg-white dark:bg-transparent px-8 py-3 rounded-full shadow transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 bg-rose-100 dark:bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-full"></span>
            <span className="relative z-10">ثبت‌نام</span>
          </Link>
        </div>

        <footer className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          طراحی شده با ❤️ توسط ثنا قلی نواز
        </footer>
      </div>
    </div>
  );
}
