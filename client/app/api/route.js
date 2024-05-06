import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ msg: "Hello, world!" });
}
export async function POST(req) {
  const data = await req.json();
  return NextResponse.json(data);
}
