"use client";
import Logo from "@/assets/logo";
import Link from "next/link";
import { links } from "@/utils/links";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname, "pathName");
  return (
    <aside className="py-12 px-8">
      <div className="flex items-center justify-center mb-5 gap-4">
        <Logo width="2rem" />
        <h2 className="text-2xl font-medium">Base</h2>
      </div>
      <div className="flex flex-col gap-6">
        {links.map((link) => (
          <div className="flex items-center gap-4" key={link.href}>
            {link.icon}
            <Link
              className={`hover:text-blue-600 ${
                link.href === pathname ? "text-blue-600" : ""
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
