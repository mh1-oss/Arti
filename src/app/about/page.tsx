"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Target, 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  MapPin, 
  Cpu, 
  CheckCircle2,
  MessageCircle,
  Code2
} from "lucide-react";
import styles from "./About.module.css";
import Button from "@/components/Button";

const AboutPage = () => {
  const pillars = [
    {
      icon: <Code2 size={32} className="text-gradient" />,
      title: "هندسة برمجية عصرية",
      desc: "نرفض الحلول والأنظمة القديمة المعقدة؛ نبني برمجيات سريعة وخفيفة بالاعتماد على أحدث لغات وأطر العمل العالمية."
    },
    {
      icon: <HeartHandshake size={32} className="text-gradient" />,
      title: "تواصل مباشر مع المطور",
      desc: "تتعامل مباشرة مع الفريق الهندسي المطور لنظامك دون وسطاء أو مندوبي مبيعات لا يفهمون تفاصيل احتياجك التقني."
    },
    {
      icon: <ShieldCheck size={32} className="text-gradient" />,
      title: "خصوصية وأمان البيانات",
      desc: "تشفير كامل لقواعد البيانات والنسخ الاحتياطية لضمان بقاء معلوماتك المالية والتجارية سرية ومحمية 100%."
    },
    {
      icon: <MapPin size={32} className="text-gradient" />,
      title: "وجود حقيقي ودعم محلي",
      desc: "مقر ووكيل معتمد في قلب بغداد يمنحك راحة البال وإمكانية الزيارة والتدريب المباشر على أرض الواقع."
    }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <h1>نحن نعيد تعريف <span className="text-gradient">صناعة البرمجيات</span> في العراق</h1>
            <p>
              انطلقت آرتي بهدف واضح: تحويل إدارة الأعمال والتجارة من الطرق الورقية والأنظمة المعقدة القديمة إلى برمجيات سحابية ذكية وفائقة السرعة والجمال.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className={styles.storyCard}>
            <div className={styles.storyText}>
              <span className={styles.sectionTag}>قصة البداية</span>
              <h2>لماذا أسسنا <span className="text-gradient">آرتي</span>؟</h2>
              <p>
                لاحظنا في السوق العراقي أن أغلب أصحاب الأعمال والمتاجر يعانون من خيارين كلاهما صعب: إما استخدام أنظمة برمجية قديمة جداً وثقيلة لا تواكب العصر وكثيرة الأعطال، أو شراء أنظمة أجنبية باهظة الثمن لا تفهم طبيعة السوق العراقي وتفتقر للدعم المحلي السريع.
              </p>
              <p>
                لذلك، بدأنا في <strong>آرتي</strong> ببناء حلول برمجية وطنية بمعايير هندسية عالمية، تجمع بين السرعة الفائقة، التصميم العصري البسيط، والدعم الفني المباشر من المبرمج نفسه مع وجود وكيل رسمي في بغداد.
              </p>
            </div>
            <div className={styles.storyStats}>
              <div className={styles.statBox}>
                <h3>100%</h3>
                <p>دعم كامل للغة العربية والدينار العراقي</p>
              </div>
              <div className={styles.statBox}>
                <h3>0.05 ثانية</h3>
                <p>سرعة الاستجابة وإصدار الفواتير</p>
              </div>
              <div className={styles.statBox}>
                <h3>مباشر</h3>
                <p>تواصل ودعم فني مع المطور بدون وسطاء</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className={`${styles.pillarsSection} section`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>المبادئ التي <span className="text-gradient">نبني عليها</span></h2>
            <p>قيم هندسية ثابتة نلتزم بها في كل مشروع ونظام نقوم ببرمجته.</p>
          </div>

          <div className={styles.pillarsGrid}>
            {pillars.map((p, i) => (
              <motion.div 
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`card-glass ${styles.pillarCard}`}
              >
                <div className={styles.pillarIcon}>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className={styles.missionVisionGrid}>
            <div className={`card-glass ${styles.mvCard}`}>
              <Target className={styles.mvIcon} size={40} />
              <h2>رسالتنا</h2>
              <p>
                تمكين الشركات والمتاجر والرواد في العراق والمنطقة من خلال أنظمة ذكية تسهل الإدارة، تختصر ساعات العمل، وتمنع هدر الأموال والأصناف.
              </p>
            </div>
            <div className={`card-glass ${styles.mvCard}`}>
              <Rocket className={styles.mvIcon} size={40} />
              <h2>رؤيتنا</h2>
              <p>
                أن تكون آرتي الاسم الأول والأكثر موثوقية في العراق لتقديم حلول الـ ERP وتطوير الويب وتطبيقات الهواتف الذكية المتقدمة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.bottomCta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>انضم إلى مستقبل البرمجيات مع آرتي</h2>
            <p>تحدث معنا اليوم لنناقش كيف يمكن لبرمجياتنا تطوير نشاطك التجاري.</p>
            <div className={styles.ctaButtons}>
              <a href="https://wa.me/9647801814088" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className={styles.ctaWaBtn}>
                  <MessageCircle size={20} /> محادثة مباشرة عبر واتساب
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

export default AboutPage;
