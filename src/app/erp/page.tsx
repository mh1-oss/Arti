"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  Box, 
  ShieldCheck, 
  Zap, 
  CheckCircle,
  Download
} from "lucide-react";
import styles from "./ERP.module.css";
import Button from "@/components/Button";

const ERPPage = () => {
  const features = [
    {
      title: "إدارة مالية ذكية",
      icon: <BarChart3 size={32} />,
      desc: "تتبع كل دينار بدقة متناهية مع تقارير مالية فورية وميزانيات عمومية آلية."
    },
    {
      title: "إدارة الموارد البشرية",
      icon: <Users size={32} />,
      desc: "من التوظيف إلى كشوف المرتبات، قم بإدارة فريقك بكفاءة في منصة واحدة."
    },
    {
      title: "إدارة المخازن",
      icon: <Box size={32} />,
      desc: "تتبع المخزون لحظة بلحظة مع تنبيهات ذكية عند نقص الكميات."
    }
  ];

  const handleDownload = async () => {
    try {
      const response = await fetch("https://api.github.com/repos/mh1-oss/erp-updates/releases/latest");
      const data = await response.json();
      const zipAsset = data.assets.find((asset: any) => asset.name.endsWith(".zip"));
      if (zipAsset) {
        window.location.href = zipAsset.browser_download_url;
      } else {
        window.open("https://github.com/mh1-oss/erp-updates/releases/latest", "_blank");
      }
    } catch (error) {
      window.open("https://github.com/mh1-oss/erp-updates/releases/latest", "_blank");
    }
  };

  return (
    <div className={styles.erpPage}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>نظام <span className="text-gradient">آرتي ERP</span> الشامل</h1>
              <p>قم برقمنة أعمالك بالكامل مع أقوى نظام لإدارة الموارد في المنطقة. مصمم لتبسيط العمليات وزيادة الأرباح.</p>
              <div className={styles.heroCtas}>
                <Button size="lg" className={styles.downloadBtn} onClick={handleDownload}>
                  <Download size={18} /> تحميل البرنامج
                </Button>
                <Link href="/contact">
                  <Button variant="glass" size="lg">
                    طلب عرض تجريبي
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className={styles.dashboardPreview}
            >
              <div className={styles.mockWindow}>
                <div className={styles.windowHeader}>
                  <div className={styles.dots}>
                    <span></span><span></span><span></span>
                  </div>
                  <div className={styles.searchBar}></div>
                </div>
                <div className={styles.windowBody}>
                  <div className={styles.sidebar}>
                    <div className={styles.navItem} style={{ width: '100%' }}></div>
                    <div className={styles.navItem} style={{ width: '80%' }}></div>
                    <div className={styles.navItem} style={{ width: '90%' }}></div>
                    <div className={styles.navItem} style={{ width: '70%' }}></div>
                  </div>
                  <div className={styles.main}>
                    <div className={styles.statsRow}>
                      <div className={styles.statBox}>
                        <div className={styles.statLabel}>المبيعات اليومية</div>
                        <div className={styles.statValue}>1,250,000 د.ع</div>
                        <div className={styles.statGraph}></div>
                      </div>
                      <div className={styles.statBox}>
                        <div className={styles.statLabel}>الطلبات الجديدة</div>
                        <div className={styles.statValue}>42</div>
                        <div className={styles.statGraph}></div>
                      </div>
                    </div>
                    <div className={styles.largeGraph}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>مميزات <span className="text-gradient">تغير قواعد اللعبة</span></h2>
            <p>لماذا يعتبر نظام آرتي الخيار الأول للشركات الرائدة؟</p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <motion.div 
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`${styles.featureCard} card-glass`}
              >
                <div className={styles.iconWrapper}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.detailGrid}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.detailText}
            >
              <ShieldCheck className={styles.detailIcon} size={48} />
              <h3>أمان <span className="text-gradient">بمستوى عالمي</span></h3>
              <p>بياناتك هي أصولك الأكثر قيمة. نحن نحميها بتشفير متطور وتدابير أمنية لا تضاهى.</p>
              <ul className={styles.detailList}>
                <li><CheckCircle size={20} className="text-gradient" /> تشفير كامل للبيانات</li>
                <li><CheckCircle size={20} className="text-gradient" /> نسخ احتياطي آلي كل ساعة</li>
                <li><CheckCircle size={20} className="text-gradient" /> صلاحيات وصول دقيقة للمستخدمين</li>
                <li><CheckCircle size={20} className="text-gradient" /> متوافق مع معايير الأمان العالمية</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={styles.detailVisual}
            >
              <div className={styles.securityShield}>
                <Zap size={100} className="text-gradient" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.bottomCta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2>هل أنت مستعد <span className="text-gradient">للتحول الرقمي؟</span></h2>
            <p>انضم إلى الشركات الذكية التي تدير أعمالها بكفاءة مع آرتي ERP.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact">
                <Button size="lg">ابدأ الآن</Button>
              </Link>
              <Link href="/contact">
                <Button variant="glass" size="lg">تحدث مع خبير</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPPage;
