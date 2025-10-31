'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navitems() {
    const pathname = usePathname();
    const items = [
        { label: 'home ', href: '/' },
        { label: 'companions ', href: '/companions' },
        { label: 'my journey ', href: '/my-journey' }];
    return (
        <nav className="flex items-center gap-4">
            {items.map(({ label, href }) => (
                <Link className={ cn(pathname === href && ' text-primary , font-semibold')} key={label} href={href}> {label}</Link>

            ))}
        </nav>
    )
}
