"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, Variants, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  Package, 
  Users, 
  MapPin, 
  MessageCircle, 
  ExternalLink,
  Lock,
  Layers,
  Sparkles,
  Cpu,
  Server
} from "lucide-react";
import styles from "./Home.module.css";
import Button from "@/components/Button";

const Home = () => {
  const [activeTab, setActiveTab] = useState<"sales" | "inventory" | "hr">("sales");

  const services = [
    { 
      title: "آرتي ERP المتكامل", 
      desc: "إدارة شاملة للمبيعات، المخازن، الحسابات، والفواتير بنظام سحابي فائق السرعة والأمان.", 
      icon: <Database className="text-gradient" />,
      tag: "الأكثر طلباً",
      features: ["نقاط البيع والفواتير السريعة", "متابعة المخزون اللحظية", "تقارير الأرباح والميزانيات"],
      href: "/erp"
    },
    { 
      title: "تطوير مواقع الويب الحديثة", 
      desc: "مواقع وتطبيقات ويب سريعة بتصاميم عصرية وتقنيات Next.js ترفع مبيعاتك وتعزز علامتك.", 
      icon: <Globe className="text-gradient" />,
      tag: "توسع رقمي",
      features: ["سرعة تحميل استثنائية", "متوافقة 100% مع الجوال", "تحسين محركات البحث SEO"],
      href: "/services"
    },
    { 
      title: "تطبيقات الجوال الذكية", 
      desc: "تطبيقات أصلية وهجينة لنظامي iOS و Android لتصل إلى عملائك أينما كانوا بتجربة مستخدم لا تُنسى.", 
      icon: <Smartphone className="text-gradient" />,
      tag: "iOS & Android",
      features: ["تصميم UI/UX فاخر وسلس", "إشعارات تفاعلية فورية", "أداء سريع وخفيف على الهاتف"],
      href: "/services"
    },
    { 
      title: "الحلول السحابية والربط", 
      desc: "بنية تحتية سحابية آمنة، قواعد بيانات عالية الموثوقية، وربط APIs مخصص لأعمالك.", 
      icon: <Cloud className="text-gradient" />,
      tag: "بنية آمنة",
      features: ["نسخ احتياطي آلي وتشفير", "جاهزية 99.9% بدون انقطاع", "ربط الفروع والأنظمة ببعضها"],
      href: "/services"
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "جلسة تحليل المتطلبات",
      desc: "نستمع إليك باهتمام، ندرس تفاصيل عملك، ونحدد النظام والتقنيات الأنسب لتحقيق أهدافك.",
      icon: <Layers size={24} />
    },
    {
      number: "02",
      title: "تصميم تجربة المستخدم",
      desc: "نبني واجهات تفاعلية حديثة وسهلة الاستخدام تراها وتجربها بنفسك قبل كتابة الكود البرمجي.",
      icon: <Sparkles size={24} />
    },
    {
      number: "03",
      title: "البرمجة وبناء النظام",
      desc: "هندسة برمجية نظيفة وقواعد بيانات سريعة وآمنة مع اختبارات دقيقة لكل سيناريوهات العمل.",
      icon: <Cpu size={24} />
    },
    {
      number: "04",
      title: "الإطلاق والتدريب المستمر",
      desc: "تثبيت النظام، تدريب فريقك، ومتابعة فنية مباشرة لضمان تشغيل سلس ومستقر بدون أي توقف.",
      icon: <Server size={24} />
    }
  ];

  const techStack = [
    { name: "Next.js & React", role: "واجهات فائقة السرعة" },
    { name: "PostgreSQL", role: "أمان وموثوقية مالية" },
    { name: "Flutter & iOS/Android", role: "تطبيقات جوال رائدة" },
    { name: "Cloud & Docker", role: "استقرار 99.9%" },
    { name: "256-bit SSL", role: "تشفير وحماية البيانات" }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      } 
    },
  };
  const { scrollY } = useScroll();
  const shapeOpacity = useTransform(scrollY, [0, 400], [0.6, 0]);

  return (
    <div className={styles.home}>
      {/* Decorative Floating Elements */}
      <div className={styles.decorations}>
        <motion.div 
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className={styles.floatDot1}
        />
        <motion.div 
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className={styles.floatDot2}
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className={styles.floatDot3}
        />
        {/* Brand Inspired Shapes with Scroll Fade */}
        <motion.div 
          initial={{ scale: 0, y: 40, rotate: 0 }}
          animate={{ scale: 1, y: 0, rotate: 45 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{ opacity: shapeOpacity }}
          className={styles.brandShape1}
        />
        <motion.div 
          initial={{ scale: 0, y: 40, rotate: 0 }}
          animate={{ scale: 1, y: 0, rotate: 45 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          style={{ opacity: shapeOpacity }}
          className={styles.brandShape2}
        />
        <motion.div 
          initial={{ scale: 0, y: 40, rotate: 0 }}
          animate={{ scale: 1, y: 0, rotate: 45 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          style={{ opacity: shapeOpacity }}
          className={styles.brandShape3}
        />
        <motion.div 
          initial={{ scale: 0, y: 40, rotate: 0 }}
          animate={{ scale: 1, y: 0, rotate: 45 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          style={{ opacity: shapeOpacity }}
          className={styles.brandShape4}
        />
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.gridBackground} />
        <div className="container">
          <div className={styles.heroLayout}>
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className={styles.heroContent}
            >
              <motion.h1 variants={itemVariants} className={styles.headline}>
                نبني <span className="text-gradient typing-effect">الجيل القادم</span> من الأنظمة والتطبيقات البرمجية
              </motion.h1>

              <motion.p variants={itemVariants} className={styles.subheadline}>
                نساعد الشركات والمتاجر على أتمتة عملياتها ومضاعفة أرباحها من خلال نظام <strong>آرتي ERP</strong> وتطوير تطبيقات ومواقع متقدمة بمعايير عالمية.
              </motion.p>

              <motion.div variants={itemVariants} className={styles.heroCtas}>
                <Link href="/contact">
                  <Button size="lg" className={styles.primaryCtaBtn}>
                    ابدأ مشروعك الآن
                    <ArrowLeft size={16} className={styles.ctaIcon} />
                  </Button>
                </Link>
                <Link href="/erp">
                  <Button variant="glass" size="lg">اكتشف نظام ERP</Button>
                </Link>
              </motion.div>

              {/* Quick Trust Points */}
              <motion.div variants={itemVariants} className={styles.heroTrustBadges}>
                <div className={styles.trustItem}>
                  <CheckCircle2 size={16} className={styles.trustIcon} />
                  <span>استشارة وعرض تجريبي مجاناً</span>
                </div>
                <div className={styles.trustItem}>
                  <CheckCircle2 size={16} className={styles.trustIcon} />
                  <span>دعم مباشر من المطور</span>
                </div>
                <div className={styles.trustItem}>
                  <CheckCircle2 size={16} className={styles.trustIcon} />
                  <span>مقر ووكيل معتمد في شارع الصناعة</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Interactive Hero Visual: Live ERP Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heroVisual}
            >
              <div className={styles.dashboardCard}>
                {/* Window Top Bar */}
                <div className={styles.dashboardHeader}>
                  <div className={styles.windowControls}>
                    <span className={styles.dotClose} />
                    <span className={styles.dotMin} />
                    <span className={styles.dotMax} />
                  </div>
                  <div className={styles.windowTitle}>لوحة تحكم آرتي ERP • إصدار 2026</div>
                  <div className={styles.liveBadge}>
                    <span className={styles.liveDot} /> نشط لحظياً
                  </div>
                </div>

                {/* Dashboard Tabs */}
                <div className={styles.dashboardTabs}>
                  <button 
                    className={`${styles.dashTab} ${activeTab === "sales" ? styles.activeDashTab : ""}`}
                    onClick={() => setActiveTab("sales")}
                  >
                    <TrendingUp size={15} /> المبيعات والفواتير
                  </button>
                  <button 
                    className={`${styles.dashTab} ${activeTab === "inventory" ? styles.activeDashTab : ""}`}
                    onClick={() => setActiveTab("inventory")}
                  >
                    <Package size={15} /> المخازن والجرد
                  </button>
                  <button 
                    className={`${styles.dashTab} ${activeTab === "hr" ? styles.activeDashTab : ""}`}
                    onClick={() => setActiveTab("hr")}
                  >
                    <Users size={15} /> الكادر والصلاحيات
                  </button>
                </div>

                {/* Dashboard Metrics Content */}
                <div className={styles.dashboardBody}>
                  <AnimatePresence mode="wait">
                    {activeTab === "sales" && (
                      <motion.div
                        key="sales"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className={styles.tabContent}
                      >
                        <div className={styles.metricsGrid}>
                          <div className={styles.metricBox}>
                            <span className={styles.metricLabel}>إجمالي المبيعات اليوم</span>
                            <span className={styles.metricValue}>14,850,000 د.ع</span>
                            <span className={styles.metricTrend}>+18.4% نمو إيجابي ↗</span>
                          </div>
                          <div className={styles.metricBox}>
                            <span className={styles.metricLabel}>الفواتير المنجزة</span>
                            <span className={styles.metricValue}>128 فاتورة</span>
                            <span className={styles.metricSub}>زمن الإصدار: 1.2 ثانية</span>
                          </div>
                        </div>

                        {/* Recent Transactions Preview */}
                        <div className={styles.transactionsList}>
                          <div className={styles.transRow}>
                            <span className={styles.transName}>فاتورة جملة #4092</span>
                            <span className={styles.transAmount}>+ 1,450,000 د.ع</span>
                            <span className={styles.transStatus}>تم الاستلام ✓</span>
                          </div>
                          <div className={styles.transRow}>
                            <span className={styles.transName}>نقطة بيع فرع الكرادة</span>
                            <span className={styles.transAmount}>+ 680,000 د.ع</span>
                            <span className={styles.transStatus}>مكتمل ✓</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "inventory" && (
                      <motion.div
                        key="inventory"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className={styles.tabContent}
                      >
                        <div className={styles.metricsGrid}>
                          <div className={styles.metricBox}>
                            <span className={styles.metricLabel}>إجمالي الأصناف المتاحة</span>
                            <span className={styles.metricValue}>1,420 صنف</span>
                            <span className={styles.metricTrend}>تنبيه نفاد ذكي ⚡</span>
                          </div>
                          <div className={styles.metricBox}>
                            <span className={styles.metricLabel}>قيمة المخزون الإجمالية</span>
                            <span className={styles.metricValue}>85,200,000 د.ع</span>
                            <span className={styles.metricSub}>جرد فوري بالباركود</span>
                          </div>
                        </div>
                        <div className={styles.transactionsList}>
                          <div className={styles.transRow}>
                            <span className={styles.transName}>مخزن المركز الرئيسي</span>
                            <span className={styles.transAmount}>98% كفاية</span>
                            <span className={styles.transStatus}>مستقر ✓</span>
                          </div>
                          <div className={styles.transRow}>
                            <span className={styles.transName}>جرد فرع المنصور</span>
                            <span className={styles.transAmount}>تم التدقيق آلياً</span>
                            <span className={styles.transStatus}>متطابق ✓</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "hr" && (
                      <motion.div
                        key="hr"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className={styles.tabContent}
                      >
                        <div className={styles.metricsGrid}>
                          <div className={styles.metricBox}>
                            <span className={styles.metricLabel}>المستخدمين النشطين</span>
                            <span className={styles.metricValue}>16 موظف</span>
                            <span className={styles.metricTrend}>صلاحيات أمان مشددة 🔒</span>
                          </div>
                          <div className={styles.metricBox}>
                            <span className={styles.metricLabel}>حسابات الرواتب</span>
                            <span className={styles.metricValue}>مؤتمتة بالكامل</span>
                            <span className={styles.metricSub}>تقرير نهاية الشهر آلي</span>
                          </div>
                        </div>
                        <div className={styles.transactionsList}>
                          <div className={styles.transRow}>
                            <span className={styles.transName}>كاشير 1 (نقطة البيع)</span>
                            <span className={styles.transAmount}>تسجيل الدخول 09:00</span>
                            <span className={styles.transStatus}>نشط الآن 🟢</span>
                          </div>
                          <div className={styles.transRow}>
                            <span className={styles.transName}>إدارة الحسابات</span>
                            <span className={styles.transAmount}>تصدير ميزان المراجعة</span>
                            <span className={styles.transStatus}>تم بنجاح ✓</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Floating Highlights */}
                <div className={styles.floatingHighlight1}>
                  <Zap size={14} className={styles.highlightIcon} /> استجابة فورية 0.05 ثانية
                </div>
                <div className={styles.floatingHighlight2}>
                  <Lock size={14} className={styles.highlightIcon} /> تشفير سحابي آمن
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Standards Ribbon */}
      <section className={styles.techRibbon}>
        <div className="container">
          <div className={styles.ribbonHeader}>
            <span>التقنيات ومعايير الجودة العالمية التي نعتمدها في بناء أنظمتكم</span>
          </div>
          <div className={styles.techGrid}>
            {techStack.map((tech) => (
              <div key={tech.name} className={styles.techCard}>
                <span className={styles.techName}>{tech.name}</span>
                <span className={styles.techRole}>{tech.role}</span>
              </div>
            ))}
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
            <h2>حلولنا البرمجية <span className="text-gradient">المتكاملة</span></h2>
            <p>نصمم ونطور برمجيات مصممة خصيصاً لتناسب متطلبات السوق العراقي والعربي بأعلى سرعة وأعلى استقرار.</p>
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
                className={`card-glass ${styles.serviceCardWrapper}`}
              >
                <div className={styles.serviceCard}>
                  <div className={styles.cardTopRow}>
                    <div className={styles.serviceIcon}>{service.icon}</div>
                    <span className={styles.serviceTag}>{service.tag}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  
                  <ul className={styles.featureList}>
                    {service.features.map((feat) => (
                      <li key={feat}>
                        <CheckCircle2 size={15} className={styles.checkIcon} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.href} className={styles.serviceLink}>
                    اكتشف التفاصيل <ArrowLeft size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work: 4-Step Working Process */}
      <section className={`${styles.processSection} section`}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>منهجية العمل <span className="text-gradient">الواضحة</span></h2>
            <p>خطوات محددة وشفافة من الفكرة الأولى وحتى إطلاق النظام وتدريب كادرك بنجاح.</p>
          </motion.div>

          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.processCard}
              >
                <div className={styles.processNumber}>{step.number}</div>
                <div className={styles.processIconBox}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Physical Presence & Agent Spotlight */}


      {/* Final Call to Action */}
      <section className={styles.footerCta}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={styles.ctaBoxLarge}
          >
            <h2>جاهز لنقل أعمالك إلى <span className={styles.ctaHighlight}>المستوى التالي</span>؟</h2>
            <p>تحدث معنا اليوم للحصول على استشارة مجانية وعرض حي وشامل لنظام آرتي ERP أو لمشروعك البرمجي.</p>
            <div className={styles.ctaButtonsGroup}>
              <a href="https://wa.me/9647801814088" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className={styles.ctaWaButton}>
                  <MessageCircle size={20} /> استشارة سريعة عبر واتساب
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="glass" size="lg">حجز موعد عرض تجريبي</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
