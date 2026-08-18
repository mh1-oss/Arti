"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Clock,
  Building2,
  User,
  HelpCircle
} from "lucide-react";
import styles from "./Contact.module.css";
import Button from "@/components/Button";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    service: "نظام آرتي ERP",
    details: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Create formatted WhatsApp message
    const message = `مرحباً آرتي للبرمجيات،%0A%0A*طلب جديد من الموقع:*%0A- *الاسم:* ${encodeURIComponent(formData.name)}%0A- *النشاط / الشركة:* ${encodeURIComponent(formData.business || "غير محدد")}%0A- *رقم الهاتف:* ${encodeURIComponent(formData.phone)}%0A- *الخدمة المطلوبة:* ${encodeURIComponent(formData.service)}%0A- *التفاصيل:* ${encodeURIComponent(formData.details || "أرغب بمزيد من المعلومات")}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/9647801814088?text=${message}`, "_blank");
    }, 400);
  };

  const agents = [
    {
      name: "مكتب الأسطورة (الوكيل المعتمد)",
      location: "شارع الصناعة - مجمع النعمان التجاري - بغداد",
      hours: "السبت - الخميس: 9:00 صباحاً - 6:00 مساءً",
      mapLink: "https://www.google.com/maps/search/?api=1&query=مكتب+الأسطورة+مجمع+النعمان+شارع+الصناعة+بغداد",
      phone: "+964 780 181 4088"
    }
  ];

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <h1>تحدث معنا وابدأ <span className="text-gradient">مشروعك اليوم</span></h1>
            <p>
              نحن هنا لمساعدتك والإجابة عن كافة استفساراتك. أرسل تفاصيل مشروعك أو تواصل معنا مباشرة عبر واتساب، أو تفضل بزيارة وكيلنا المعتمد في بغداد.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid: Interactive Form & Direct Contact */}
      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Interactive Lead / Inquiry Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`card-glass ${styles.formCard}`}
            >
              <div className={styles.formHeader}>
                <h3>أرسل متطلبات مشروعك</h3>
                <p>املأ البيانات أدناه للحصول على استشارة مجانية وعرض سعر مخصص:</p>
              </div>

              {submitted ? (
                <div className={styles.successBox}>
                  <CheckCircle2 size={48} className={styles.successIcon} />
                  <h4>تم تجهيز طلبك بنجاح!</h4>
                  <p>جاري تحويلك إلى محادثة واتساب المباشرة لمتابعة طلبك فوراً...</p>
                  <Button 
                    size="md" 
                    className={styles.reopenBtn}
                    onClick={() => setSubmitted(false)}
                  >
                    إرسال طلب آخر
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.inputGroup}>
                    <label>الاسم الكامل *</label>
                    <div className={styles.inputWithIcon}>
                      <User size={18} className={styles.fieldIcon} />
                      <input 
                        type="text" 
                        required 
                        placeholder="أدخل اسمك الكريم"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>اسم الشركة أو النشاط التجاري</label>
                    <div className={styles.inputWithIcon}>
                      <Building2 size={18} className={styles.fieldIcon} />
                      <input 
                        type="text" 
                        placeholder="مثال: شركة النور للتجارة، متجر الأزياء..."
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>رقم الهاتف / واتساب *</label>
                    <div className={styles.inputWithIcon}>
                      <Phone size={18} className={styles.fieldIcon} />
                      <input 
                        type="tel" 
                        required 
                        dir="ltr"
                        placeholder="+964 780 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>الخدمة المطلوبة</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={styles.selectInput}
                    >
                      <option value="نظام آرتي ERP">نظام آرتي ERP لإدارة الأعمال</option>
                      <option value="تطوير موقع ويب / متجر إلكتروني">تطوير موقع ويب / متجر إلكتروني</option>
                      <option value="تطوير تطبيق جوال (iOS & Android)">تطوير تطبيق جوال (iOS & Android)</option>
                      <option value="حلول سحابية وربط أنظمة">حلول سحابية وربط أنظمة</option>
                      <option value="استشارة برمجية عامة">استشارة برمجية عامة</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>تفاصيل المشروع أو الاستفسار</label>
                    <textarea 
                      rows={4}
                      placeholder="صف لنا احتياجك أو متطلبات نظامك باختصار..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    />
                  </div>

                  <Button size="lg" className={styles.submitBtn}>
                    <Send size={18} /> إرسال عبر واتساب فوراً
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Direct Contact Info & Physical Agent Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.infoCol}
            >
              {/* WhatsApp Live Box */}
              <div className={styles.whatsappBox}>
                <div className={styles.waTop}>
                  <MessageCircle size={36} />
                  <div>
                    <h3>محادثة واتساب مباشرة</h3>
                    <p>رد فوري ومتابعة مباشرة من فريق التطوير</p>
                  </div>
                </div>
                <a href="https://wa.me/9647801814088" target="_blank" rel="noopener noreferrer" className={styles.waDirectLink}>
                  <Button size="md" className={styles.waButton}>
                    فتح المحادثة (+964 780 181 4088)
                  </Button>
                </a>
              </div>

              {/* Physical Agent Card */}
              <div className={styles.agentCard}>
                <div className={styles.agentBadge}>
                  <MapPin size={16} /> المقر والوكيل المعتمد
                </div>
                <h3>{agents[0].name}</h3>
                <p className={styles.agentLocation}>{agents[0].location}</p>
                
                <div className={styles.agentMeta}>
                  <div className={styles.metaItem}>
                    <Clock size={16} className={styles.metaIcon} />
                    <span>{agents[0].hours}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Phone size={16} className={styles.metaIcon} />
                    <span dir="ltr">{agents[0].phone}</span>
                  </div>
                </div>

                <div className={styles.agentCardActions}>
                  <a 
                    href={agents[0].mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.mapBtn}
                  >
                    <ExternalLink size={16} /> فتح في خرائط غوغل
                  </a>
                </div>
              </div>

              {/* Support Note */}
              <div className={styles.supportNote}>
                <HelpCircle size={20} className={styles.noteIcon} />
                <div>
                  <h4>هل ترغب في تجربة نظام ERP على أجهزتك؟</h4>
                  <p>تواصل معنا وسيقوم فريقنا بتثبيت النسخة التجريبية وتدريبك عليها مجاناً بدون أي التزام مسبق.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
