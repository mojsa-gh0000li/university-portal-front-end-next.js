// app/api/register/route.ts
import { NextResponse } from 'next/server'
import { users } from '@/lib/fakeDB'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  // بررسی وجود کاربر
  const existing = users.find((u) => u.email === email)
  if (existing) {
    return NextResponse.json({ message: 'کاربر قبلاً ثبت‌نام کرده' }, { status: 400 })
  }

  // ذخیره کاربر (فقط برای تست)
  users.push({ email, password })

  // ✅ اینجا در حالت واقعی باید در دیتابیس ذخیره بشه

  return NextResponse.json({ message: 'ثبت‌نام با موفقیت انجام شد' }, { status: 201 })
}
