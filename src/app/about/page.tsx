"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Rocket, Target } from "lucide-react";
import styles from "./About.module.css";

const AboutPage = () => {
  const stats = [
    { label: "شريك نجاح", value: "20+" },
    { label: "حل برمجي متكامل", value: "15+" },
    { label: "خبير ومطور", value: "12+" },
    { label: "تركيز على الجودة", value: "100%" },
  ];

  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroContent}
          >
            <h1>نحن نصنع <span className="text-gradient">مستقبل البرمجيات</span></h1>
            <p>آرتي للخدمات البرمجية هي شريكك الاستراتيجي في التحول الرقمي. نحن نجمع بين الإبداع الفني والتميز الهندسي لنبني حلولاً تغير وجه الأعمال.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${styles.card} card-glass`}
            >
              <Target className={styles.cardIcon} size={40} />
              <h2>رسالتنا</h2>
              <p>تمكين الشركات من خلال توفير حلول برمجية ذكية وسهلة الاستخدام تساهم في تبسيط العمليات المعقدة وتحقيق نمو مستدام.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
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
          <div className={styles.sectionHeader}>
            <h2>قيمنا <span className="text-gradient">الأساسية</span></h2>
            <p>المبادئ التي تقودنا في كل سطر برمجية نكتبه.</p>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <Award className="text-gradient" size={32} />
              <h3>التميز</h3>
              <p>لا نرضى بأقل من الكمال في كل ما نقدمه.</p>
            </div>
            <div className={styles.valueItem}>
              <Users className="text-gradient" size={32} />
              <h3>التركيز على العميل</h3>
              <p>نجاح عملائنا هو المقياس الوحيد لنجاحنا.</p>
            </div>
            <div className={styles.valueItem}>
              <Rocket className="text-gradient" size={32} />
              <h3>الابتكار</h3>
              <p>نتحدى المألوف دائماً لتقديم حلول خارج الصندوق.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
