import { NextResponse } from "next/server";
import { menu } from "@/data/menu";
export async function GET(request) {
  return NextResponse.json({ menu }, { status: 200 });
}
