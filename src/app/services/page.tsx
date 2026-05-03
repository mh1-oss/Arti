"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Cloud, 
  CheckCircle2
} from "lucide-react";
import styles from "./Services.module.css";
import Button from "@/components/Button";

const ServicesPage = () => {
  const services = [
    {
      title: "تطوير المواقع",
      icon: <Code />,
      desc: "نبني تطبيقات ويب حديثة، متجاوبة، وعالية الأداء باستخدام أحدث التقنيات مثل React و Next.js و Node.js.",
      features: ["تطبيقات الويب التقدمية (PWA)", "حلول التجارة الإلكترونية", "أنظمة إدارة المحتوى المخصصة", "تكامل البرمجيات (APIs)"]
    },
    {
      title: "تطبيقات الجوال",
      icon: <Smartphone />,
      desc: "نصنع تجارب جوال سلسة لنظامي iOS و Android تجذب المستخدمين وتدفع نمو أعمالك.",
      features: ["تطبيقات iOS و Android أصلية", "تطبيقات هجينة (Flutter/React Native)", "تصميم واجهات المستخدم UI/UX", "تحسين متجر التطبيقات (ASO)"]
    },
    {
      title: "البنية التحتية السحابية",
      icon: <Cloud />,
      desc: "ارفع كفاءة عملك مع حلول سحابية قابلة للتوسع وآمنة وموثوقة مصممة خصيصاً لاحتياجاتك.",
      features: ["الهجرة إلى السحابة", "أتمتة DevOps", "هيكلية بدون خوادم (Serverless)", "مراقبة على مدار الساعة 24/7"]
    }
  ];

  return (
    <div className={styles.servicesPage}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>خدماتنا <span className="text-gradient">المتميزة</span></h1>
            <p>حلول برمجية شاملة لمساعدة عملك على الازدهار في العصر الرقمي.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.servicesList}>
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={styles.serviceItem}
              >
                <div className={styles.serviceIcon}>{service.icon}</div>
                <div className={styles.serviceText}>
                  <h2>{service.title}</h2>
                  <p>{service.desc}</p>
                  <div className={styles.features}>
                    {service.features.map(f => (
                      <div key={f} className={styles.feature}>
                        <CheckCircle2 size={18} className="text-gradient" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.techStack} section`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>تقنياتنا <span className="text-gradient">الحديثة</span></h2>
            <p>نستخدم أكثر التقنيات موثوقية وحداثة لبناء منتجاتك الرقمية.</p>
          </div>
          
          <div className={styles.techGrid}>
            <div className={styles.techItem}>React / Next.js</div>
            <div className={styles.techItem}>Node.js / Go</div>
            <div className={styles.techItem}>PostgreSQL</div>
            <div className={styles.techItem}>Flutter / React Native</div>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>هل لديك متطلبات خاصة؟</h2>
            <p>نحن نقدم خدمات استشارية وتطويرية مخصصة لاحتياجات الأعمال الفريدة.</p>
            <Link href="/contact">
              <Button size="lg">ابدأ الآن</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
