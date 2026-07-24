'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';
import { EMPLOYEE } from '../lib/data';

const NAV_ITEMS = [
  { href: '/profile', label: 'โปรไฟล์' },
  { href: '/growth', label: 'AI Growth Analyst' },
  { href: '/courses', label: 'คอร์สเรียน' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/profile" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true" />
          PathFinder
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const active = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${active ? styles.navLinkActive : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.rightGroup}>
          <Link href="/profile" className={styles.avatar} aria-label="ไปที่โปรไฟล์ของฉัน">
            {EMPLOYEE.avatarInitials}
          </Link>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label={menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpenTop : ''}`} />
            <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpenMid : ''}`} />
            <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpenBottom : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => {
            const active = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileNavLink} ${active ? styles.mobileNavLinkActive : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
