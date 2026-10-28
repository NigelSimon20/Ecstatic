import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Ecstatic Engineering | Mechanical, Fabrication, Construction & Maintenance",
  description:
    "Ecstatic Engineering delivers end-to-end engineering solutions in Harare, Zimbabwe: welding & fabrication, industrial maintenance, construction, industrial painting and mechanical services.",
  icons: { icon: "/images/logo.jpg" },
  openGraph: {
    title: "Ecstatic Engineering",
    description: "Engineering solutions built on quality, powered with excellence.",
    images: ["/images/flyer.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>{children}</body>
    </html>
  );
}
