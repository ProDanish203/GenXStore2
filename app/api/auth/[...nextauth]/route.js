import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDb } from "@../../../lib/config/db";
import User from "@../../../lib/models/User";



export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text'},
                password: { label: 'password', type: 'password'},
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                    throw new Error('Invalid Credentials');
                }

                connectDb();

                const user = await User.findOne({email: credentials.email}); 

                if(!user) throw new Error('Invalid Credentials');

                const checkPass = await bcrypt.compare(credentials.password, user.password)
                if(!checkPass) throw new Error('Invalid Credentials');

                return user;
            }
        })
    ],
    debug: process.env.NODE_ENV === "development",
    session:{
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET 
    },
    secret: process.env.NEXTAUTH_SECRET
})