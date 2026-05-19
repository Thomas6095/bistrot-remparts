"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "./ToastContext";

interface ToastStackProps {
  className?: string;
}

export default function ToastStack({ className }: ToastStackProps) {
  const { toasts } = useToast();

  return (
    <div className={`flex flex-col gap-3 ${className || ""}`}>
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`px-5 py-3 rounded-lg text-white shadow-lg ${
              toast.type === "success" ? "bg-emerald-500" : "bg-red-500"
            }`}
          >
            {toast.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}


