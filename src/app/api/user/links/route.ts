import { NextResponse } from "next/server";
import { z } from "zod";

const linkSchema = z.object({
  id: z.string().optional(),
  label: z.string().min(1).max(50),
  url: z.string().url(),
  icon: z.string().optional(),
  order: z.number().min(0),
});

let links: any[] = [];

export async function GET() {
  try {
    return NextResponse.json(links);
  } catch (error) {
    console.error("[LINKS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = linkSchema.parse(body);

    const newLink = {
      id: validatedData.id || Math.random().toString(36).substr(2, 9),
      label: validatedData.label,
      url: validatedData.url,
      icon: validatedData.icon,
      order: validatedData.order,
    };

    if (validatedData.id) {
      links = links.map(link => link.id === validatedData.id ? newLink : link);
    } else {
      links.push(newLink);
    }

    return NextResponse.json(newLink);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse("Invalid request data", { status: 400 });
    }

    console.error("[LINKS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return new NextResponse("Missing link ID", { status: 400 });
    }

    links = links.filter(link => link.id !== id);

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[LINKS_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 