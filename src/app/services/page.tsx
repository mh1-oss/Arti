"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Database,
  CheckCircle2, 
  ArrowLeft,
  MessageCircle
} from "lucide-react";
import styles from "./Services.module.css";
import Button from "@/components/Button";

const ServicesPage = () => {
  const services = [
    {
      title: "نظام آرتي ERP",
      tag: "الأكثر طلباً",
      icon: <Database size={30} className="text-gradient" />,
      desc: "إدارة شاملة وسريعة للمبيعات، المخازن، الفواتير، والحسابات بنظام سحابي مرن يدعم العمل أوفلاين.",
      features: [
        "نقاط البيع والفواتير السريعة POS",
        "تتبع المخزون اللحظي والباركود",
        "تقارير الأرباح وكشوف الحسابات"
      ],
      link: "/erp",
      linkText: "استكشف نظام ERP"
    },
    {
      title: "تطوير مواقع الويب",
      tag: "Next.js & React",
      icon: <Code2 size={30} className="text-gradient" />,
      desc: "مواقع وتطبيقات ويب حديثة وفائقة السرعة مصممة لرفع مبيعاتك وتعزيز ثقة عملائك بعلامتك التجارية.",
      features: [
        "متاجر إلكترونية متكاملة وبوابات دفع",
        "لوحات تحكم ذكية وسهلة لإدارة المحتوى",
        "سرعة فائقة وتوافق تام مع محركات البحث"
      ],
      link: "/contact",
      linkText: "طلب موقع ويب"
    },
    {
      title: "تطبيقات الهواتف الذكية",
      tag: "iOS & Android",
      icon: <Smartphone size={30} className="text-gradient" />,
      desc: "تطبيقات جوال سلسة وسريعة بتصاميم عصرية تعمل بأعلى كفاءة على هواتف الآيفون والأندرويد.",
      features: [
        "تطبيق موحد لنظامي iOS و Android",
        "إشعارات تفاعلية فورية وتتبع GPS",
        "نشر وتجهيز التطبيق على المتاجر الرسمية"
      ],
      link: "/contact",
      linkText: "طلب تطبيق جوال"
    },
    {
      title: "الحلول السحابية والربط",
      tag: "APIs & Cloud",
      icon: <Cloud size={30} className="text-gradient" />,
      desc: "بنية تحتية سحابية آمنة وموثوقة تحمي بياناتك وتضمن تشغيل أنظمتك 24/7 دون أي توقف.",
      features: [
        "قواعد بيانات PostgreSQL سريعة ومحمية",
        "نسخ احتياطي سحابي ومشفر يومياً",
        "ربط الفروع والأنظمة ببعضها (APIs)"
      ],
      link: "/contact",
      linkText: "طلب حلول سحابية"
    }
  ];

  return (
    <div className={styles.servicesPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={styles.heroContent}
          >
            <h1>خدماتنا <span className="text-gradient">البرمجية</span></h1>
            <p>حلول برمجية متكاملة مصممة خصيصاً لتطوير أعمالك وزيادة كفاءتك التشغيلية.</p>
          </motion.div>
        </div>
      </section>

      {/* Simplified Services Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`card-glass ${styles.serviceCard}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>{service.icon}</div>
                  <span className={styles.tag}>{service.tag}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <ul className={styles.featureList}>
                  {service.features.map((f) => (
                    <li key={f}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.cardFooter}>
                  <Link href={service.link} className={styles.serviceLink}>
                    {service.linkText} <ArrowLeft size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Clean CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>هل ترغب في استشارة مجانية لمشروعك؟</h2>
            <p>تحدث مباشرة مع فريق التطوير لمناقشة فكرتك والبدء في تنفيذها.</p>
            <div className={styles.ctaButtons}>
              <a href="https://wa.me/9647801814088" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className={styles.waBtn}>
                  <MessageCircle size={18} /> تواصل عبر واتساب
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="glass" size="lg">معلومات الاتصال والوكيل</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
