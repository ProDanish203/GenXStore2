import { Footer, Header } from "@/components/shared";
import { Poppins, Roboto } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";
import { AOS } from "@/components/helpers/AOS";
import { WhatsappBtn } from "@/components/helpers/WhatsappBtn";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "@/store/react-query-provider";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Gen X Store",
  description: "One place for all luxurious watches and social media services",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=1"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body
        className={cn(
          "antialiased overflow-x-clip bg-bg",
          poppins.className,
          roboto.variable
        )}
      >
        <ReactQueryProvider>
          <AOS />
          <Toaster richColors position="top-right" />
          <div>
            <Header />
          </div>

          <div className="min-h-[100vh]">
            <WhatsappBtn />
            {children}
          </div>

          <div>
            <Footer />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
