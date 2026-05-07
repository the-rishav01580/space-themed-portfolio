import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-start justify-around flex-wrap gap-y-8 py-6">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center"
            >
              <h3 className="font-bold text-[16px] mb-2">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target={link.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.startsWith("mailto:") ? undefined : "noreferrer noopener"}
                  aria-label={name}
                  className="flex flex-row items-center gap-2 my-[10px] hover:text-purple-400 transition-colors duration-200"
                >
                  {Icon && <Icon className="h-4 w-4 shrink-0" />}
                  <span className="text-[15px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 w-full pt-5 mb-5 text-[14px] text-center text-gray-400">
          &copy; {new Date().getFullYear()} · Rishav Kumar Garg. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
