"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return toast.error("Email is required");
    if (!password) return toast.error("Password is required");

    try {
      setLoading(true);

      signIn("credentials", {
        email,
        password,
        redirect: false,
      }).then(({ ok, error }: any) => {
        if (ok) {
          router.push("/admin");
        } else {
          console.log(error);
          toast.error("Invalid Credentials");
        }
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <main className=" px-[9%] max-lg:px-[4%] py-5 pt-24 mt-10">
      <section className="max-w-[450px] w-full mx-auto">
        <h3 className="text-5xl max-md:text-3xl font-extrabold text-center mb-10 text-rose-600">
          Login
        </h3>

        <form
          onSubmit={handleLogin}
          className="bg-gray-100 rounded-md flex flex-col justify-center gap-5 px-3 py-5"
        >
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-text">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Email Address"
              required
              id="email"
              autoComplete="off"
              className="px-3 py-2 rounded-md w-full  outline-none"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="password" className="text-text">
              Password
            </label>

            <input
              type="password"
              placeholder="Password"
              required
              id="password"
              autoComplete="off"
              className="px-3 py-2 rounded-md w-full outline-none"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>

          <div className="w-full">
            <button
              type="submit"
              disabled={loading}
              className="bg-accent hover:bg-primary text-white py-2.5 rounded-md w-full mt-2"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
