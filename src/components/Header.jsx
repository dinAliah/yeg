'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar.jsx";
import Sidebar from "@/components/homepage/items/Sidebar.jsx";

export default function Header() {
  const pathname = usePathname();

  const hiddenRoutes = ['/lp/career/aviation','/'];
  const shouldHideNav = hiddenRoutes.includes(pathname);

  return (
    <>
      {!shouldHideNav && (
        <>
          <nav className="hidden lg:block"><Navbar /></nav>
          <nav className="lg:hidden"><Sidebar /></nav>
        </>
      )}
    </>
  );
}
