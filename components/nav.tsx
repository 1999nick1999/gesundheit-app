'use client';
 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Home, ShoppingBag, LayoutList, Mails, User, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button";
 
const links = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Shop', href: '/shop', icon: ShoppingBag },
    { name: 'About us', href: '/About', icon: LayoutList },
    { name: 'Contact', href: '/Contact', icon: Mails },
    { name: 'Account', href: '/Account', icon: User },
    { name: 'Cart', href: '/Cart', icon: ShoppingCart },
  ];
 
export default function NavLinks() {
  const pathname = usePathname();
 
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
          >
            <Button className={clsx(
              'w-60 justify-start bg-gray-200 text-gray-700 hover:bg-fuchsia-200 hover:text-fuchsia-700',
              {
                'bg-fuchsia-200 text-fuchsia-700': pathname === link.href,
              },
            )}>
							<LinkIcon className="w-4" />
							<p className="hidden md:block ml-2">{link.name}</p>
            </Button>
          </Link>
        );
      })}
    </>
  );
}