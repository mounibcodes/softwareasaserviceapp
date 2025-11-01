'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navitems() {
  const pathname = usePathname();
  const items = [
    { label: 'home', href: '/' },
    { label: 'companions', href: '/companions' },
    { label: 'my journey', href: '/my-journey' },
  ];

  return (
    <nav className="flex items-center gap-6">
      {items.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={cn(
            "text-gray-700 hover:text-primary transition",
            pathname === href && "text-primary font-semibold"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
