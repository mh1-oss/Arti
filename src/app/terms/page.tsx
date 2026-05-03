"use client";

import React from "react";
import styles from "./Legal.module.css";

const TermsPage = () => {
  return (
    <div className={styles.legalPage}>
      <section className={styles.hero}>
        <div className="container">
          <h1>الشروط <span className="text-gradient">والأحكام</span></h1>
          <p>القواعد التنظيمية لاستخدام خدماتنا وأنظمتنا.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.textContent}>
            <h2>1. قبول الشروط</h2>
            <p>باستخدامك لخدمات آرتي للخدمات البرمجية، فإنك توافق على الالتزام بالشروط والأحكام المذكورة هنا.</p>
            
            <h2>2. حقوق الملكية الفكرية</h2>
            <p>جميع البرمجيات والتصاميم المقدمة من آرتي هي ملكية فكرية للشركة ما لم يتم الاتفاق على خلاف ذلك في عقد الخدمة.</p>
            
            <h2>3. حدود المسؤولية</h2>
            <p>آرتي غير مسؤولة عن أي خسائر ناتجة عن سوء استخدام الأنظمة أو فقدان البيانات بسبب إهمال في الصيانة من جانب العميل.</p>
            
            <h2>4. التعديلات</h2>
            <p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت، وسيتم إخطار العملاء بأي تغييرات جوهرية.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
