import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const prisma = new PrismaClient();

const requestSchema = z.object({
  songId: z.string(),
  songName: z.string(),
  artistName: z.string(),
  albumName: z.string(),
  requestedBy: z.string(),
});

const verifyToken = (token: string | null): boolean => {
  if (!token) return false;
  return token === process.env.DJ_TOKEN;
};

export const POST = async (req: Request) => {
  const body = await req.json();
  const data = requestSchema.parse(body);
  try {
    const newRequest = await prisma.songRequest.create({
      data,
    });
    return NextResponse.json(newRequest);
  } catch (err) {
    console.error("Error creating song request:", err);
    return NextResponse.json({ error: "Internal server error" });
  }
};

export const PATCH = async (req: NextRequest) => {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1] || null;

  if (!verifyToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, played } = body;
    if (typeof id !== "string" || typeof played !== "boolean") {
      return NextResponse.json({ error: "Invalid Data" }, { status: 400 });
    }

    const updatedRequest = await prisma.songRequest.update({
      where: { id },
      data: { played },
    });

    return NextResponse.json(updatedRequest, { status: 200 });
  } catch (error) {
    console.error("Unable to update song request:", error);
    return NextResponse.json(
      { error: "Failed to update song request" },
      { status: 500 }
    );
  }
};

export const GET = async (req: NextRequest) => {
  const authHeader = req.headers.get("Authorization");
  const token = authHeader?.split(" ")[1] || null;

  if (!verifyToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const requests = await prisma.songRequest.findMany({
      orderBy: { requestedAt: "desc" },
    });
    return NextResponse.json(requests);
  } catch (err) {
    console.error("Error fetching song requests:", err);
    return NextResponse.json({ error: "Internal server error" });
  }
};
