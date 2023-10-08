import User from "@../../../lib/models/User";
import {connectDb} from "@../../../lib/config/db";
import serverAuth from "@../../../lib/serverAuth";


export const GET = async (req) => {
    try{
        connectDb();
        const {currentUser} = await serverAuth(req);

        if(!currentUser) return new Response(`Not signed in user`, {status: 500});
        else return new Response(JSON.stringify(currentUser), {status: 200});
    }catch(error){
        return new Response(`Failed to fetch the resource: ${error.message}`, {status: 500});
    }
}   