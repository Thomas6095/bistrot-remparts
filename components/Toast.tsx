"use client";

import { FC } from "react";

type ToastProps = {
  message: string;
  type: "success" | "error";
  onClose: () => void;
};

const Toast: FC<ToastProps> = ({ message, type, onClose }) => {
  const bgColor =
    type === "success" ? "bg-emerald-500" : "bg-red-500";

  return (
    <div
      className={`flex items-center justify-between px-4 py-2 rounded shadow-md text-white ${bgColor} animate-slide-in`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 font-bold">
        ✕
      </button>
    </div>
  );
};

export default Toast;


