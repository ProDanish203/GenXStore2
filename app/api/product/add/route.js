import Product from "@../../../lib/models/Product";
import {connectDb} from "@../../../lib/config/db";

export const POST = async (req) => {
    try{
        connectDb();
        const {formData, img} = await req.json();
        const {title, desc, cat, sarPrice, sarOldPrice, aedPrice, aedOldPrice, omrPrice, omrOldPrice } = formData;

        const product = await Product.create({
            title, desc, cat, 
            images: img, 
            price: [
                {
                    ct: '🇸🇦',
                    rate: sarPrice,
                    oldRate: sarOldPrice
                },
                {
                    ct: '🇦🇪',
                    rate: aedPrice,
                    oldRate: aedOldPrice
                },
                {
                    ct: '🇴🇲',
                    rate: omrPrice,
                    oldRate: omrOldPrice
                },    
            ]
        })

        if(!product) return new Response(`Failed to add new product`, {status: 500});
        else return new Response(JSON.stringify(product), {status: 201});
    }catch(error){
        return new Response(`Failed to fetch the resource: ${error.message}`, {status: 500});
    }
}   