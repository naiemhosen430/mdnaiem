import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MD Naiem",
  description: "I am a web developer and programmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen overflow-x-hidden">
          <Menu />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
