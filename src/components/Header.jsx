'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar.jsx";
import Sidebar from "@/components/Sidebar.jsx";

export default function Header() {
  const pathname = usePathname();

  // Define routes where Navbar/Sidebar should be hidden
  const hiddenRoutes = ['/lp/career/aviation']; // Add your routes here
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
