import { getSession } from "next-auth/react";
import User from "./models/User";
import { connectDb } from "./config/db";

const serverAuth = async (req: any) => {
  connectDb();
  const session = await getSession({ req });

  if (!session?.user?.email)
    return new Response(`Not logged in`, { status: 500 });

  const currentUser = await User.findOne({
    email: session?.user?.email,
  });

  if (!currentUser) return new Response(`Not logged in`, { status: 500 });

  return { currentUser };
};

export default serverAuth;
