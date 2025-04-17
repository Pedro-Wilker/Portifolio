import { ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import "./globals.css"; // Ajustado de "../globals.css" para "./globals.css"

export const metadata = {
  title: "Meu Portfólio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}