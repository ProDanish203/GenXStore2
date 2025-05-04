import Product from "@/lib/models/Product";
import { connectDb } from "@/lib/config/db";
import { NextRequest } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const {
      title,
      desc,
      cat,
      sarPrice,
      sarOldPrice,
      aedPrice,
      aedOldPrice,
      omrPrice,
      omrOldPrice,
    } = await req.json();

    connectDb();
    const priceArray = [
      {
        ct: "🇸🇦",
        rate: sarPrice,
        oldRate: sarOldPrice,
      },
      {
        ct: "🇦🇪",
        rate: aedPrice,
        oldRate: aedOldPrice,
      },
      {
        ct: "🇴🇲",
        rate: omrPrice,
        oldRate: omrOldPrice,
      },
    ];

    const product = await Product.findOneAndUpdate(
      { _id: id },
      {
        title,
        desc,
        cat,
        price: priceArray,
      }
    );

    if (!product)
      return new Response(`Failed to fetch product`, { status: 500 });
    else return new Response(JSON.stringify(product), { status: 201 });
  } catch (error: any) {
    return new Response(`Failed to fetch the resource: ${error.message}`, {
      status: 500,
    });
  }
};
