import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function proxy(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  //TODO: изменить подход. сейчас запрос происходит несколько раз.
  try {
    await axios.get(`${process.env.NEXT_API_URL}/auth/me`, {
      headers: {
        Cookie: `token=${token}`,
      },
    });
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: '/tasks/:path*',
};
