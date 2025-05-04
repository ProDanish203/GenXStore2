import Product from "@/lib/models/Product";
import { connectDb } from "@/lib/config/db";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    connectDb();
    const { formData, img } = await req.json();
    const {
      title,
      desc,
      cat,
      usPrice,
      usOldPrice,
      gbpPrice,
      gbpOldPrice,
      cadPrice,
      cadOldPrice,
      euPrice,
      euOldPrice,
    } = formData;

    const product = await Product.create({
      title,
      desc,
      cat,
      images: img,
      price: [
        {
          // ct: '🇸🇦',
          ct: "🇺🇸",
          rate: usPrice,
          oldRate: usOldPrice,
        },
        {
          // ct: '🇦🇪',
          ct: "🇬🇧",
          rate: gbpPrice,
          oldRate: gbpOldPrice,
        },
        {
          // ct: '🇴🇲',
          ct: "🇨🇦",
          rate: cadPrice,
          oldRate: cadOldPrice,
        },
        {
          // ct: '🇴🇲',
          ct: "🇩🇪",
          rate: euPrice,
          oldRate: euOldPrice,
        },
      ],
    });

    if (!product)
      return new Response(`Failed to add new product`, { status: 500 });
    else return new Response(JSON.stringify(product), { status: 201 });
  } catch (error: any) {
    return new Response(`Failed to fetch the resource: ${error.message}`, {
      status: 500,
    });
  }
};
