import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Poppins } from "next/font/google";
import { ShopProvider } from "./context/ShopContext";

// Load local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Import Poppins font
const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Jus Buy",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
      >
        <ShopProvider>
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 lg:px-0">{children}</div>
          <Footer />
        </ShopProvider>
      </body>
    </html>
  );
}
