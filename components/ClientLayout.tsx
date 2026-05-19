"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastProvider } from "./ToastContext";
import ToastStack from "./ToastStack";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      {/* Navbar globale */}
      <Navbar />

      {/* Contenu de la page */}
      {children}

      {/* Footer global */}
      <Footer />

      {/* Toast notifications */}
      <ToastStack />
    </ToastProvider>
  );
}
