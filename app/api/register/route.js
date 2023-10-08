import bcrypt from "bcrypt";
import User from "@../../../lib/models/User";
import {connectDb} from "@../../../lib/config/db";


export const POST = async (req) => {
    try{
        connectDb();
        const {email, password} = await req.json();
        console.log(email, password)
        const hashPass = await bcrypt.hash(password, 10)
        if(!hashPass) return new Response(`Failed to store password`, {status: 500});

        const user = await User.create({email, password: hashPass})

        if(!user) return new Response(`Failed to create user`, {status: 500});
        else return new Response(JSON.stringify(user), {status: 201});
    }catch(error){
        return new Response(`Failed to fetch the resource: ${error.message}`, {status: 500});
    }
}   