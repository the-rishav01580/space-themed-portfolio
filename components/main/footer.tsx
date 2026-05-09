import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="border-t border-white/10 w-full pt-5 mb-5 text-[14px] text-center text-gray-400">
          &copy; {new Date().getFullYear()} · Rishav Kumar Garg. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
