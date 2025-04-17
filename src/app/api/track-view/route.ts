import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  try {
    const { slug } = await req.json();
    const ip = req.headers.get("x-forwarded-for") || "unknown";

    const { success } = await rateLimit.limit(ip);
    if (!success) {
      return new NextResponse("Too many requests", { status: 429 });
    }

    // Get user by slug
    const user = await db.user.findUnique({
      where: { slug },
      select: { id: true }
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    await db.stat.create({
      data: {
        userId: user.id,
        type: "view",
        ip,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[TRACK_VIEW]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 