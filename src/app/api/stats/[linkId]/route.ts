import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { linkId: string } }
) {
  try {
    const stats = await db.stat.aggregate({
      where: {
        linkId: params.linkId,
      },
      _count: {
        _all: true,
      },
    });

    return NextResponse.json({
      clicks: stats._count._all,
    });
  } catch (error) {
    console.error("[LINK_STATS]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 