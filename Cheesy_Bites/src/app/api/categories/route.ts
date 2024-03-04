import { NextResponse } from "next/server";

export const GET = () => {
  return new NextResponse("Hello", { status: 200 });
};
