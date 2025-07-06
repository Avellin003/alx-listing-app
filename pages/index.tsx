import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Topping from "../interfaces/topping";
import Logospace from "../interfaces/logo-space";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export default function Home() {
  return (
    <div>
      <Topping />
      {/* <Logospace /> */}
    </div>
  );
}
