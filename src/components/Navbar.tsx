// Navbar Component
"use client";

import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";

export default function Navbar() {
  return (
    <nav className="relative z-10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-md rounded-2xl mx-6 my-4 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-full dark:invert" />
        <span className="text-xl font-bold text-gray-800 dark:text-white">University Portal</span>
      </div>
      <div className="flex items-center gap-6">
        <ModeToggle />
      </div>
    </nav>
  );
}
