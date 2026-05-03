"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Legal.module.css";

const FAQPage = () => {
  const faqs = [
    {
      q: "ما هي الخدمات الأساسية التي تقدمها آرتي؟",
      a: "نحن متخصصون في أنظمة ERP المتكاملة، تطوير تطبيقات الويب والجوال المخصصة، وحلول البنية التحتية السحابية."
    },
    {
      q: "كيف يمكنني البدء في مشروع مع آرتي؟",
      a: "يمكنك التواصل معنا عبر الواتساب أو زيارة أحد وكلائنا المعتمدين في بغداد لمناقشة متطلبات مشروعك."
    },
    {
      q: "هل توفر آرتي دعماً فنياً بعد تسليم المشروع؟",
      a: "نعم، نحن نقدم باقات دعم وصيانة دورية لضمان عمل أنظمتكم بأفضل كفاءة ومواكبة التحديثات التقنية."
    },
    {
      q: "هل نظام آرتي ERP يدعم العملة الدينار و الدولار معاً؟",
      a: "نعم، النظام مصمم خصيصاً لدعم أكثر من عملة و التعاملات المالية والضريبية."
    }
  ];

  return (
    <div className={styles.legalPage}>
      <section className={styles.hero}>
        <div className="container">
          <h1>الأسئلة <span className="text-gradient">الشائعة</span></h1>
          <p>إجابات سريعة على تساؤلاتكم حول خدماتنا وأنظمتنا.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={styles.faqCard}
              >
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
