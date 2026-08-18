"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  Box, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Download,
  Receipt,
  Layers,
  Sparkles,
  Laptop,
  Smartphone,
  Server,
  HelpCircle,
  MessageCircle,
  TrendingUp,
  XCircle,
  Printer,
  ChevronDown
} from "lucide-react";
import styles from "./ERP.module.css";
import Button from "@/components/Button";

const ERPPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const modules = [
    {
      title: "نقاط البيع والفواتير (POS)",
      icon: <Receipt size={28} />,
      desc: "إصدار فواتير بيع وشراء في ثانية واحدة مع دعم كافة طابعات الفواتير الحرارية وقارئات الباركود.",
      points: ["طباعة فورية لكافة مقاسات الفواتير", "دعم الدفع النقدي والآجل والبطاقات", "خصومات وعروض ترويجية مرنة"]
    },
    {
      title: "إدارة المخازن والجرد الذكي",
      icon: <Box size={28} />,
      desc: "تتبع حركة البضائع لحظة بلحظة بين الفروع والمخازن مع تنبيهات تلقائية قبل نفاد أي صنف.",
      points: ["جرد آلي ومطابقة بالباركود", "إدارة تواريخ الصلاحية ورقم الوجبة", "تحويلات سلسة بين الفروع والمستودعات"]
    },
    {
      title: "المحاسبة والتقارير المالية",
      icon: <BarChart3 size={28} />,
      desc: "حسابات الأرباح والخسائر، ميزان المراجعة، ومتابعة ديون العملاء والموردين بدقة متناهية.",
      points: ["تقارير أرباح يومية وشهرية وسنوية", "كشف حساب تفصيلي لأي عميل أو مورد", "تصدير فوري إلى Excel و PDF"]
    },
    {
      title: "إدارة الكادر والرواتب",
      icon: <Users size={28} />,
      desc: "تنظيم حضور الموظفين، السلف، المكافآت، وكشوف الرواتب الشهرية في مكان واحد.",
      points: ["أتمتة احتساب الرواتب والخصومات", "سجل كامل لحركات كل مستخدم", "توزيع المهام ومتابعة الإنتاجية"]
    },
    {
      title: "الأمان والصلاحيات الدقيقة",
      icon: <ShieldCheck size={28} />,
      desc: "حدد بدقة ما يمكن لكل موظف رؤيته أو تعديله مع تسجيل زمني لكل عملية داخل النظام.",
      points: ["صلاحيات مخصصة لكل كاشير ومحاسب", "سجل تتبع غير قابل للتعديل", "تشفير كامل لقواعد البيانات"]
    },
    {
      title: "طباعة وتقارير مخصصة",
      icon: <Printer size={28} />,
      desc: "صمم فواتيرك بهوية شركتك وشعارك مع دعم جميع أنواع الطابعات البنكية والحرارية.",
      points: ["شعار وتفاصيل شركتك على الفاتورة", "باركود وفواتير حرارية و A4/A5", "تخصيص كامل للشاشات والطباعة"]
    }
  ];

  const comparison = [
    { feature: "السرعة وزمن استجابة الفاتورة", arti: "0.05 ثانية (فورية)", traditional: "بطيئة وبها تعليق دائم" },
    { feature: "التثبيت والواجهات", arti: "عصرية وسهلة جداً (لا تحتاج خبير)", traditional: "معقدة وقديمة من عصر ويندوز XP" },
    { feature: "النسخ الاحتياطي والأمان", arti: "نسخ آلي وتشفير سحابي دائم", traditional: "يدوي ومعرض للفقدان والتلف" },
    { feature: "الدعم الفني والتدريب", arti: "مباشر من المبرمج + وكيل في بغداد", traditional: "شركات بعيدة أو وسطاء بدون استجابة" },
    { feature: "التحديثات المستمرة", arti: "تحديثات دورية مجانية وتطوير مستمر", traditional: "رسوم باهظة على كل تعديل وتحديث" },
  ];

  const faqs = [
    {
      q: "هل يعمل نظام آرتي ERP بدون إنترنت؟",
      a: "نعم، النظام يدعم العمل المحلي (Offline) بحيث تستمر عمليات البيع وإصدار الفواتير بدون أي توقف حتى في حال انقطاع الإنترنت، ثم تتم المزامنة تلقائياً."
    },
    {
      q: "هل يدعم النظام طابعات الفواتير وقارئات الباركود؟",
      a: "نعم، يدعم نظام آرتي ERP جميع أنواع طابعات الفواتير الحرارية (80mm و 58mm)، وطابعات A4/A5، وقارئات الباركود السلكية واللاسلكية وموازين الباركود الإلكترونية."
    },
    {
      q: "كيف يمكنني الحصول على نسخة تجريبية وتدريب؟",
      a: "يمكنك تحميل البرنامج مباشرة من الزر أعلاه لتجربته، أو التواصل معنا عبر واتساب لطلب جلسة تدريبية وشرح مجاني شامل لك ولفريق عملك."
    },
    {
      q: "هل يمكن تخصيص النظام ليناسب نشاطي التجاري؟",
      a: "بالتأكيد! بما أننا نقوم بتطوير النظام بشكل مباشر، يمكننا تخصيص وتعديل أي شاشة أو تقرير أو دورة مستندية بما يتناسب تماماً مع متطلبات تجارتك."
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
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.heroText}
            >
              <h1>نظام <span className="text-gradient">آرتي ERP</span> الذكي</h1>
              <p>
                الحل البرمجي الأقوى والأسرع لإدارة مبيعاتك، مخازنك، حساباتك، وموظفيك في شاشة واحدة متكاملة. مصمم خصيصاً ليمنحك السيطرة الكاملة على تجارتك.
              </p>

              <div className={styles.heroCtas}>
                <Button size="lg" className={styles.downloadBtn} onClick={handleDownload}>
                  <Download size={18} /> تحميل البرنامج مجاناً
                </Button>
                <a href="https://wa.me/9647801814088" target="_blank" rel="noopener noreferrer">
                  <Button variant="glass" size="lg">
                    <MessageCircle size={18} /> طلب جلسة تجريبية (ديمو)
                  </Button>
                </a>
              </div>

              {/* Compatibility Badges */}
              <div className={styles.compatPills}>
                <div className={styles.compatPill}><Laptop size={15} /> متوافق مع Windows 10 & 11</div>
                <div className={styles.compatPill}><Server size={15} /> قواعد بيانات PostgreSQL سريعة</div>
                <div className={styles.compatPill}><Zap size={15} /> يعمل بدون إنترنت (Offline)</div>
              </div>
            </motion.div>

            {/* Dashboard Visual Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.dashboardPreview}
            >
              <div className={styles.mockWindow}>
                <div className={styles.windowHeader}>
                  <div className={styles.dots}>
                    <span className={styles.dRed}></span>
                    <span className={styles.dYellow}></span>
                    <span className={styles.dGreen}></span>
                  </div>
                  <div className={styles.searchBar}>شاشة المبيعات والكاشير السريع • آرتي ERP</div>
                  <div className={styles.liveIndicator}>متصل 🟢</div>
                </div>

                <div className={styles.windowBody}>
                  <div className={styles.statsRow}>
                    <div className={styles.statBox}>
                      <div className={styles.statLabel}>إجمالي مبيعات الوردية</div>
                      <div className={styles.statValue}>3,450,000 د.ع</div>
                      <div className={styles.statTrend}>+14.2% نمو اليوم</div>
                    </div>
                    <div className={styles.statBox}>
                      <div className={styles.statLabel}>عدد الفواتير المصدرة</div>
                      <div className={styles.statValue}>84 فاتورة</div>
                      <div className={styles.statTrend}>متوسط الفاتورة: 41,000 د.ع</div>
                    </div>
                  </div>

                  <div className={styles.posDemoTable}>
                    <div className={styles.tableHeader}>
                      <span>الصنف</span>
                      <span>الكمية</span>
                      <span>السعر</span>
                      <span>الإجمالي</span>
                    </div>
                    <div className={styles.tableRow}>
                      <span>شاشة سامسونج 27 بوصة</span>
                      <span>2</span>
                      <span>220,000</span>
                      <span className={styles.rowPrice}>440,000 د.ع</span>
                    </div>
                    <div className={styles.tableRow}>
                      <span>لوحة مفاتيح لاسلكية Pro</span>
                      <span>1</span>
                      <span>45,000</span>
                      <span className={styles.rowPrice}>45,000 د.ع</span>
                    </div>
                    <div className={styles.tableRow}>
                      <span>كابل HDMI عالي السرعة 4K</span>
                      <span>3</span>
                      <span>12,000</span>
                      <span className={styles.rowPrice}>36,000 د.ع</span>
                    </div>
                  </div>

                  <div className={styles.posFooter}>
                    <span className={styles.totalLabel}>المجموع الإجمالي المطلوب:</span>
                    <span className={styles.totalValue}>521,000 د.ع</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>أقسام النظام <span className="text-gradient">الشاملة</span></h2>
            <p>تم بناء كل قسم بأعلى دقة هندسية ليمنحك سرعة غير مسبوقة في إنجاز أعمالك اليومية.</p>
          </div>

          <div className={styles.modulesGrid}>
            {modules.map((m, i) => (
              <motion.div 
                key={m.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`card-glass ${styles.moduleCard}`}
              >
                <div className={styles.moduleIconBox}>{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <ul className={styles.pointsList}>
                  {m.points.map((pt) => (
                    <li key={pt}>
                      <CheckCircle2 size={15} className={styles.checkIcon} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className={`${styles.compareSection} section`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>لماذا تختار <span className="text-gradient">آرتي ERP</span>؟</h2>
            <p>مقارنة عملية توضح الفرق بين نظام آرتي الحديث والأنظمة التقليدية القديمة.</p>
          </div>

          <div className={styles.compareTableWrapper}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th>المعيار</th>
                  <th className={styles.artiHeader}>نظام آرتي ERP 🚀</th>
                  <th className={styles.tradHeader}>الأنظمة التقليدية القديمة</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr key={idx}>
                    <td className={styles.featureCol}>{row.feature}</td>
                    <td className={styles.artiCol}>
                      <CheckCircle2 size={18} className={styles.checkIcon} /> {row.arti}
                    </td>
                    <td className={styles.tradCol}>
                      <XCircle size={18} className={styles.xIcon} /> {row.traditional}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>الأسئلة الشائعة حول <span className="text-gradient">نظام ERP</span></h2>
            <p>إجابات واضحة ومباشرة عن كافة استفسارات أصحاب الأعمال والمحاسبين.</p>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={styles.faqCard}>
                  <button 
                    className={styles.faqQuestion} 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`${styles.faqChevron} ${isOpen ? styles.chevronOpen : ""}`} size={20} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className={styles.faqAnswer}
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.bottomCta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2>احصل على نسختك الآن وابدأ <span className={styles.ctaHighlight}>تنظيم أعمالك</span></h2>
            <p>حمل البرنامج مجاناً أو تواصل معنا عبر واتساب للبدء في تشغيل النظام داخل متاجرك وفروعك.</p>
            <div className={styles.ctaButtons}>
              <Button size="lg" className={styles.ctaDownloadBtn} onClick={handleDownload}>
                <Download size={18} /> تحميل البرنامج الآن
              </Button>
              <a href="https://wa.me/9647801814088" target="_blank" rel="noopener noreferrer">
                <Button variant="glass" size="lg">
                  <MessageCircle size={18} /> طلب استشارة وديمو فوري
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPPage;
