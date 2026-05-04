"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Rocket, Target } from "lucide-react";
import styles from "./About.module.css";

const AboutPage = () => {
  const stats = [
    { label: "تواصل مباشر مع المطور", value: "مباشر" },
    { label: "حلول مخصصة لاحتياجك", value: "مخصص" },
    { label: "دعم كامل للغة العربية", value: "١٠٠٪" },
    { label: "دقة في أدق التفاصيل", value: "إتقان" },
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Decorative Floating Elements */}
      <div className={styles.decorations}>
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className={styles.floatDot1}
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 50, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className={styles.floatDot2}
        />
      </div>

      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={styles.heroContent}
          >
            <h1>نحن نصنع <span className="text-gradient">مستقبل البرمجيات</span></h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              آرتي للخدمات البرمجية هي شريكك الاستراتيجي في التحول الرقمي. نحن نجمع بين الإبداع الفني والتميز الهندسي لنبني حلولاً تغير وجه الأعمال.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ y: -10, boxShadow: "var(--shadow-premium)" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={styles.statItem}
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.missionVision}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`${styles.card} card-glass`}
            >
              <Target className={styles.cardIcon} size={40} />
              <h2>رسالتنا</h2>
              <p>تمكين الشركات من خلال توفير حلول برمجية ذكية وسهلة الاستخدام تساهم في تبسيط العمليات المعقدة وتحقيق نمو مستدام.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className={`${styles.card} card-glass`}
            >
              <Rocket className={styles.cardIcon} size={40} />
              <h2>رؤيتنا</h2>
              <p>أن نكون الشركة الرائدة عالمياً في تقديم الحلول البرمجية الأكثر ابتكاراً وتأثيراً، لنرسم ملامح المستقبل الرقمي للأعمال.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`${styles.values} section`}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>قيمنا <span className="text-gradient">الأساسية</span></h2>
            <p>المبادئ التي تقودنا في كل سطر برمجية نكتبه.</p>
          </motion.div>

          <div className={styles.valuesGrid}>
            {[
              { icon: Award, title: "التميز", desc: "لا نرضى بأقل من الكمال في كل ما نقدمه." },
              { icon: Users, title: "التركيز على العميل", desc: "نجاح عملائنا هو المقياس الوحيد لنجاحنا." },
              { icon: Rocket, title: "الابتكار", desc: "نتحدى المألوف دائماً لتقديم حلول خارج الصندوق." }
            ].map((v, i) => (
              <motion.div 
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={styles.valueItem}
              >
                <v.icon className="text-gradient" size={32} />
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
