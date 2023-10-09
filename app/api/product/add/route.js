import Product from "@../../../lib/models/Product";
import {connectDb} from "@../../../lib/config/db";

export const POST = async (req) => {
    try{
        connectDb();
        const {title, desc, frontImg, cat, sarPrice, sarOldPrice, aedPrice, aedOldPrice, omrPrice, omrOldPrice} = await req.json();
        console.log(title, desc, cat, sarPrice, sarOldPrice, aedOldPrice, aedPrice, omrPrice, omrOldPrice);

        const product = await Product.create({
            title, desc, cat, frontImg, 
            price: [
                {
                    ct: '🇸🇦',
                    rate: sarPrice,
                    oldRate: sarOldPrice
                },
                {
                    ct: '🇦🇪',
                    rate: sarPrice,
                    oldRate: sarOldPrice
                },
                {
                    ct: '🇴🇲',
                    rate: sarPrice,
                    oldRate: sarOldPrice
                },
            ]
        })

        if(!product) return new Response(`Failed to add new product`, {status: 500});
        else return new Response(JSON.stringify(product), {status: 201});
    }catch(error){
        return new Response(`Failed to fetch the resource: ${error.message}`, {status: 500});
    }
}   