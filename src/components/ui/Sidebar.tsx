"use client";
import socialLinks from "@/data/socialLinks";
import Link from "next/link";
import { Tooltip } from "react-tooltip"; // Correct named import

const Sidebar = () => {
  return (
    <div className='mt-40 w-16 z-20 fixed bottom-0 left-0 hidden sm:block'>
      <ul className='flex flex-col items-center space-y-4'>
        {socialLinks().map(({ id, href, textColor, text, icon: Icon }) => (
          <li key={id} className='transition duration-300'>
            <Link href={href} target='_blank' rel='noopener noreferrer'>
              {Icon && (
                <Icon
                  data-tooltip-id='tooltip-id'
                  data-tooltip-content={text}
                  className={`${
                    text === "GitHub" ? "dark:text-slate-400" : ""
                  } text-${textColor}-${
                    textColor === "red" ? "500" : "700"
                  } transition hover:scale-125 duration-300 ease-in-out`}
                  size={25}
                  style={{
                    color: textColor === "whatsapp" ? "green" : undefined,
                  }}
                />
              )}
              <Tooltip id='tooltip-id' style={{ zIndex: 200 }} />
            </Link>
          </li>
        ))}
      </ul>
      <p className='h-40 text-blue-600 w-[1px] mt-2 mx-auto bg-blue-500'></p>
    </div>
  );
};

export default Sidebar;
