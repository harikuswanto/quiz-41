import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Get a project quote",
  description:
    "Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${dmSans.className} mx-auto max-w-q2`}>{children}</body>
    </html>
  );
}
