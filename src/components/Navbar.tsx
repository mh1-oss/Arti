"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowLeft, Sparkles } from "lucide-react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

const links = [
  { name: "الرئيسية", href: "/" },
  { name: "نظام ERP", href: "/erp" },
  { name: "خدماتنا", href: "/services" },
  { name: "عن آرتي", href: "/about" },
  { name: "اتصل بنا", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50 && !scrolled) {
      setScrolled(true);
    } else if (latest <= 50 && scrolled) {
      setScrolled(false);
    }
  });

  useEffect(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Desktop nav variants replaced by CSS classes for better RTL support

  const currentVariant = isOpen ? "expanded" : scrolled ? "island" : "full";

  const navContent = (
    <>
      <div className={styles.navInnerRow}>
        {/* Logo */}
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoMotion}>
            <Logo size="sm" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className={styles.desktopNav} onMouseLeave={() => setHoveredPath(null)}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            const isHovered = hoveredPath === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
                onMouseEnter={() => setHoveredPath(link.href)}
              >
                {isHovered && (
                  <motion.span
                    layoutId="island-hover-pill"
                    className={styles.hoverPill}
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className={styles.linkText}>{link.name}</span>
                {isActive && <span className={styles.activeDot} />}
              </Link>
            );
          })}
        </div>

        {/* Right Action / CTA */}
        <div className={styles.navActions}>
          <Link href="/contact" className={styles.ctaButton}>
            <span>ابدأ مشروعك</span>
            <motion.span
              className={styles.ctaIcon}
              initial={{ x: 0 }}
              whileHover={{ x: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <ArrowLeft size={16} />
            </motion.span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className={styles.mobileToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Expanded Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={styles.mobileMenuContent}
          >
            <div className={styles.mobileDivider} />
            <div className={styles.mobileLinksList}>
              {links.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`${styles.mobileNavLink} ${isActive ? styles.mobileActiveLink : ""}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className={styles.activePillTag}>الحالي</span>}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={styles.mobileCtaWrapper}
            >
              <Link
                href="/contact"
                className={styles.mobileCtaFull}
                onClick={() => setIsOpen(false)}
              >
                ابدأ مشروعك الآن <Sparkles size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  return (
    <header className={styles.headerWrapper}>
      {isMobile ? (
        /* On mobile: plain nav element, no Framer Motion to avoid RTL positioning bugs */
        <nav
          className={`${styles.navContainer} ${styles.navMobile} ${
            scrolled ? styles.navMobileScrolled : ""
          } ${isOpen ? styles.navMobileOpen : ""}`}
        >
          {navContent}
        </nav>
      ) : (
        /* On desktop: standard CSS classes for reliable RTL */
        <nav
          className={`${styles.navContainer} ${
            scrolled ? styles.navDesktopScrolled : styles.navDesktopFull
          }`}
        >
          {navContent}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
