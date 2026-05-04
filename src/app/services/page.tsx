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
      {/* Decorative Floating Elements */}
      <div className={styles.decorations}>
        <motion.div 
          animate={{ y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className={styles.floatDot1}
        />
        <motion.div 
          animate={{ y: [0, 50, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className={styles.floatDot2}
        />
      </div>

      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              خدماتنا <span className="text-gradient">المتميزة</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              حلول برمجية شاملة لمساعدة عملك على الازدهار في العصر الرقمي.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.servicesList}>
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={styles.serviceItem}
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={styles.serviceIcon}
                >
                  {service.icon}
                </motion.div>
                <div className={styles.serviceText}>
                  <h2>{service.title}</h2>
                  <p>{service.desc}</p>
                  <div className={styles.features}>
                    {service.features.map((f, fi) => (
                      <motion.div 
                        key={f}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (fi * 0.05) }}
                        className={styles.feature}
                      >
                        <CheckCircle2 size={18} className="text-gradient" />
                        <span>{f}</span>
                      </motion.div>
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>تقنياتنا <span className="text-gradient">الحديثة</span></h2>
            <p>نستخدم أكثر التقنيات موثوقية وحداثة لبناء منتجاتك الرقمية.</p>
          </motion.div>
          
          <div className={styles.techGrid}>
            {["React / Next.js", "Node.js / Go", "PostgreSQL", "Flutter / React Native"].map((tech, i) => (
              <motion.div 
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)" }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={styles.techItem}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={styles.ctaBox}
          >
            <h2>هل لديك متطلبات خاصة؟</h2>
            <p>نحن نقدم خدمات استشارية وتطويرية مخصصة لاحتياجات الأعمال الفريدة.</p>
            <Link href="/contact">
              <Button size="lg">ابدأ الآن</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
