import Product from "@/lib/models/Product";
import { connectDb } from "@/lib/config/db";
import { NextRequest } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    connectDb();

    const product = await Product.findOne({ _id: id });

    if (!product)
      return new Response(`Failed to fetch product`, { status: 500 });
    else return new Response(JSON.stringify(product), { status: 201 });
  } catch (error: any) {
    return new Response(`Failed to fetch the resource: ${error.message}`, {
      status: 500,
    });
  }
};
