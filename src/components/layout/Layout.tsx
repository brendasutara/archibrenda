import type { ReactNode } from "react";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className="app-shell bg-[#FDFBFF] text-slate-900"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}
