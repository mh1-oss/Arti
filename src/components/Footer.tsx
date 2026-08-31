"use client";

import React from "react";
import Link from "next/link";
import { MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import styles from "./Footer.module.css";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logoLink}>
            <Logo size="md" />
          </Link>
          <p className={styles.description}>
            نحن نبني حلولاً برمجية ذكية تساعد الشركات والمتاجر على التطور والنمو في العصر الرقمي. خبرتنا تشمل أنظمة ERP السحابية، تطبيقات الويب، وتطبيقات الجوال.
          </p>
          <div className={styles.trustBadge}>
            <Sparkles size={15} /> حلول برمجية وطنية بمعايير هندسية عالمية
          </div>
        </div>

        <div className={styles.links}>
          <h3>الشركة</h3>
          <ul>
            <li><Link href="/about">عن آرتي</Link></li>
            <li><Link href="/services">خدماتنا</Link></li>
            <li><Link href="/erp">نظام آرتي ERP</Link></li>
            <li><Link href="/contact">اتصل بنا</Link></li>
          </ul>
        </div>

        <div className={styles.links}>
          <h3>الدعم والمساعدة</h3>
          <ul>
            <li><Link href="/faq">الأسئلة الشائعة</Link></li>
            <li><Link href="/contact">طلب عرض تجريبي</Link></li>
            <li><Link href="/privacy">سياسة الخصوصية</Link></li>
            <li><Link href="/terms">الشروط والأحكام</Link></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h3>المقر والتواصل</h3>
          <ul>

            <li>
              <Phone size={18} className="text-gradient" />
              <a href="tel:+9647801814088" dir="ltr">+964 780 181 4088</a>
            </li>
            <li>
              <MessageCircle size={18} className="text-gradient" />
              <a href="https://wa.me/9647801814088" target="_blank" rel="noopener noreferrer" className={styles.waFooterLink}>
                تواصل مباشر عبر واتساب
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© 2026 آرتي للخدمات البرمجية. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
