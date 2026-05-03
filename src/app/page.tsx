"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  ArrowLeft,
  ShieldCheck,
  Zap,
  MousePointer2,
  Sparkles,
  Layout
} from "lucide-react";
import styles from "./Home.module.css";
import Button from "@/components/Button";

const Home = () => {
  const services = [
    { 
      title: "آرتي ERP", 
      desc: "إدارة شاملة للأعمال من المحاسبة إلى الرواتب والمخازن.", 
      icon: <Database className="text-gradient" />,
      href: "/erp"
    },
    { 
      title: "تطوير المواقع", 
      desc: "تطبيقات ويب مذهلة وعالية الأداء مصممة للتوسع والنمو.", 
      icon: <Globe className="text-gradient" />,
      href: "/services"
    },
    { 
      title: "تطبيقات الجوال", 
      desc: "تجارب تطبيقات جوال أصلية ومبتكرة يعشقها المستخدمون.", 
      icon: <Smartphone className="text-gradient" />,
      href: "/services"
    },
    { 
      title: "الحلول السحابية", 
      desc: "بنية تحتية سحابية آمنة وموثوقة وقابلة للتوسع لأعمالك.", 
      icon: <Cloud className="text-gradient" />,
      href: "/services"
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1] // Custom cubic-bezier instead of string to avoid TS error
      } 
    },
  };

  return (
    <div className={styles.home}>
      {/* Decorative Floating Elements */}
      <div className={styles.decorations}>
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className={styles.floatDot1}
        />
        <motion.div 
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className={styles.floatDot2}
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          className={styles.floatDot3}
        />
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroLayout}>
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className={styles.heroContent}
            >
              <motion.span variants={itemVariants} className={styles.badge}>
                <Sparkles size={14} /> إعادة تعريف البرمجيات لعام 2026
              </motion.span>
              <motion.h1 variants={itemVariants} className={styles.headline}>
                نبني <span className="text-gradient">الجيل القادم</span> من الحلول البرمجية
              </motion.h1>
              <motion.p variants={itemVariants} className={styles.subheadline}>
                خدمات برمجية متميزة للعلامات التجارية الطموحة. نحن نصنع تجارب رقمية سريعة وجميلة ومبنية للنمو.
              </motion.p>
              <motion.div variants={itemVariants} className={styles.heroCtas}>
                <Link href="/contact">
                  <Button size="lg">ابدأ الآن</Button>
                </Link>
                <Link href="/erp">
                  <Button variant="glass" size="lg">اكتشف ERP</Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className={styles.heroVisual}
            >
              <div className={styles.heroCard}>
                <div className={styles.cardHeader}>
                  <MousePointer2 size={16} className={styles.cursor} />
                  <div className={styles.userBadge}>أنظمة آرتي الذكية</div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.graphPlaceholder}>
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: "60%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className={styles.bar}
                    />
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: "90%" }}
                      transition={{ duration: 2, delay: 0.7 }}
                      className={styles.bar}
                    />
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: "40%" }}
                      transition={{ duration: 2, delay: 0.9 }}
                      className={styles.bar}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>إمكانيات <span className="text-gradient">مخصصة</span></h2>
            <p>نحن نحقق التميز من خلال الهندسة المتخصصة والتصميم الفني المبتكر.</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.servicesGrid}
          >
            {services.map((service) => (
              <motion.div 
                key={service.title}
                variants={itemVariants}
                className="card-glass"
              >
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link href={service.href} className={styles.serviceLink}>
                    عرض التفاصيل <ArrowLeft size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`${styles.whyUs} section`}>
        <div className="container">
          <div className={styles.whyUsLayout}>
            <div className={styles.whyUsText}>
              <h2>لماذا تختار <span className="text-gradient">الشركات الحديثة</span> آرتي؟</h2>
              <p>الأداء والموثوقية والتصميم ليست خيارات إضافية لدينا، بل هي جوهر كل بكسل نقوم ببرمجته.</p>
              
              <div className={styles.featureGridSmall}>
                <div className={styles.featureMini}>
                  <Zap className="text-gradient" />
                  <h4>سرعة فائقة</h4>
                </div>
                <div className={styles.featureMini}>
                  <ShieldCheck className="text-gradient" />
                  <h4>أمان متقدم</h4>
                </div>
                <div className={styles.featureMini}>
                  <Layout className="text-gradient" />
                  <h4>تجربة مستخدم</h4>
                </div>
                <div className={styles.featureMini}>
                  <Database className="text-gradient" />
                  <h4>بيانات منظمة</h4>
                </div>
              </div>
            </div>

            <div className={styles.visualContainer}>
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className={styles.mainVisualCard}
              >
                <div className={styles.visualTitle}>مؤشر الأداء</div>
                <div className={styles.scoreValue}>99%</div>
                <div className={styles.visualProgress}>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "99%" }}
                    transition={{ duration: 1.5 }}
                    className={styles.progressFill}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className={styles.footerCta}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={styles.ctaBoxLarge}
          >
            <h2>دعنا نبني شيئاً <span className={styles.ctaHighlight}>استثنائياً</span></h2>
            <p>انضم إلى الجيل القادم من الشركات التي تتوسع مع حلول آرتي الذكية.</p>
            <Link href="/contact">
              <Button size="lg">ابدأ الآن</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
