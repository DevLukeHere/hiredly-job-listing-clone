import { ReactNode } from "react";
import { Inter } from "next/font/google";
import DrawerAppBar from "./_components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hiredly | Jobs",
  description: "This is a Hiredly clone.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: "2rem 2rem 0 2rem" }}>
        <DrawerAppBar />
        {children}
      </body>
    </html>
  );
}
