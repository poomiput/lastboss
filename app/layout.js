import Navbar from "../components/Navbar";
import "./globals.scss";
import { Noto_Sans_Thai } from "next/font/google";

const noto = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // เลือกน้ำหนักที่ใช้
  variable: "--font-noto-sans-thai",
});

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={noto.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
