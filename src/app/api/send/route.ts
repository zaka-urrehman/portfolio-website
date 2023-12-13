import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';



export async function POST(request:NextRequest, response:NextResponse) {
  const {email,subject,body} = await request.json()
  console.log(email,subject,body)

  // if (res.ok) {
  //   const data = await res.json();
  //   return NextResponse.json(data);
  // }
}