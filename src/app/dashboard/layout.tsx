import Link from 'next/link'
import { ReactNode } from 'react'

const menuItems = [
  { name: 'رزرو غذا', path: '/dashboard/food' },
  { name: 'درخواست‌ها', path: '/dashboard/requests' },
  { name: 'لیست دروس نیمسال', path: '/dashboard/courses' },
  { name: 'پرداخت‌ها و امور مالی', path: '/dashboard/payments' },
  { name: 'پیام‌ها و اطلاعیه‌ها', path: '/dashboard/messages' },
  { name: 'پروفایل شخصی', path: '/dashboard/profile' },
]

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* منوی کناری */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6 text-center">داشرود</h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="hover:text-yellow-300 block">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* محتوای اصلی */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  )
}
