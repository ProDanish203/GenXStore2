import Product from "@../../../lib/models/Product";
import {connectDb} from "@../../../lib/config/db";

export const GET = async (req) => {
    try{
        connectDb();

        const product = await Product.find({cat: "men's watch"});

        if(!product) return new Response(`Failed to fetch products`, {status: 500});
        else return new Response(JSON.stringify(product), {status: 201});
    }catch(error){
        return new Response(`Failed to fetch the resource: ${error.message}`, {status: 500});
    }
}   