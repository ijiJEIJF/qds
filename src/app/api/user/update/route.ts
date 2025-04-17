import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const updateSchema = z.object({
  username: z.string().min(1).max(32),
  slug: z.string().min(1).max(32).regex(/^[a-z0-9-]+$/),
  bio: z.string().max(500).optional(),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const validatedData = updateSchema.parse(body);

    // Check if slug is already taken
    const existingUser = await prisma.user.findFirst({
      where: {
        slug: validatedData.slug,
        NOT: {
          id: session.user.id,
        },
      },
    });

    if (existingUser) {
      return new NextResponse("Slug already taken", { status: 400 });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        username: validatedData.username,
        slug: validatedData.slug,
        bio: validatedData.bio,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse("Invalid request data", { status: 400 });
    }

    console.error("[USER_UPDATE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 