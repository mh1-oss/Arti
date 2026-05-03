"use client";

import React from "react";
import styles from "./Legal.module.css";

const PrivacyPage = () => {
  return (
    <div className={styles.legalPage}>
      <section className={styles.hero}>
        <div className="container">
          <h1>سياسة <span className="text-gradient">الخصوصية</span></h1>
          <p>كيف نحمي بياناتك ونحافظ على خصوصيتك.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.textContent}>
            <h2>1. جمع المعلومات</h2>
            <p>نحن نقوم بجمع المعلومات اللازمة فقط لتقديم خدماتنا البرمجية وتحسين تجربة المستخدم في أنظمتنا.</p>
            
            <h2>2. حماية البيانات</h2>
            <p>نستخدم بروتوكولات تشفير متقدمة لحماية بيانات عملائنا وضمان عدم وصول أي طرف غير مصرح له إليها.</p>
            
            <h2>3. مشاركة المعلومات</h2>
            <p>نحن لا نقوم ببيع أو مشاركة بياناتك الشخصية مع أطراف ثالثة لأغراض تسويقية.</p>
            
            <h2>4. ملفات تعريف الارتباط</h2>
            <p>نستخدم ملفات تعريف الارتباط لتحسين أداء الموقع وفهم كيفية تفاعل المستخدمين معه.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
