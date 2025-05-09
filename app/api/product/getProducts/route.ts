import Product from "@/lib/models/Product";
import { connectDb } from "@/lib/config/db";
import { NextRequest } from "next/server";

export const revalidate = 1;
export const GET = async (req: NextRequest) => {
  connectDb();
  try {
    const { searchParams } = new URL(req.url);
    const cat = searchParams.get("cat") || null;
    const product = await Product.find({
      ...(cat && { cat: cat }),
    });

    if (!product)
      return new Response(`Failed to fetch products`, { status: 500 });
    else return new Response(JSON.stringify(product), { status: 201 });
  } catch (error: any) {
    return new Response(`Failed to fetch the resource: ${error.message}`, {
      status: 500,
    });
  }
};
