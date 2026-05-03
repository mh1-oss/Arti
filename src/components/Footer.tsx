"use client";

import React from "react";
import Link from "next/link";
import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span>آرتي</span>
          </div>
          <p className={styles.description}>
            نحن نبني حلولاً برمجية ذكية تساعد الشركات على التطور والنمو في العصر الرقمي. خبرتنا تشمل أنظمة ERP، الويب، وتطبيقات الجوال.
          </p>
          {/*<div className={styles.socials}>
            <a href="#"><Globe size={20} /></a>
            <a href="#"><Mail size={20} /></a>
          </div>*/}
        </div>

        <div className={styles.links}>
          <h3>الشركة</h3>
          <ul>
            <li><Link href="/about">عن آرتي</Link></li>
            <li><Link href="/services">خدماتنا</Link></li>
            <li><Link href="/erp">نظام ERP</Link></li>
            <li><Link href="/contact">اتصل بنا</Link></li>
          </ul>
        </div>

        <div className={styles.links}>
          <h3>الدعم</h3>
          <ul>
            <li><Link href="/faq">الأسئلة الشائعة</Link></li>
            <li><Link href="/contact">مركز المساعدة</Link></li>
            <li><Link href="/privacy">سياسة الخصوصية</Link></li>
            <li><Link href="/terms">الشروط والأحكام</Link></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h3>معلومات الاتصال</h3>
          <ul>
            <li><MapPin size={18} className="text-gradient" /> بغداد، العراق</li>
            <li><Phone size={18} className="text-gradient" /> +964 780 181 4088</li>
           {/* <li><Mail size={18} className="text-gradient" /> [EMAIL_ADDRESS]</li>*/}
            <li><MessageCircle size={18} className="text-gradient" /> <a href="https://wa.me/9647801814088" target="_blank" rel="noopener noreferrer">تواصل عبر واتساب</a></li>
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
