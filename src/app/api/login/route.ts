// app/api/login/route.ts
import { NextResponse } from 'next/server'
import { users } from '@/lib/fakeDB'
import jwt from 'jsonwebtoken'

const SECRET = 'your_jwt_secret_key' // در .env واقعی ذخیره کن

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = users.find((u) => u.email === email && u.password === password)

  if (!user) {
    return NextResponse.json({ message: 'ایمیل یا رمز عبور اشتباه است' }, { status: 401 })
  }

  const token = jwt.sign({ email }, SECRET, { expiresIn: '2h' })

  return NextResponse.json({ token })
}
