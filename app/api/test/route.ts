import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("Backend is connected!", { status: 200 });
}
