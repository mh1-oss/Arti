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
  HelpCircle,
  Mail,
  User
} from "lucide-react";
import styles from "./Contact.module.css";
import Button from "@/components/Button";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    phone: "",
    service: "نظام آرتي ERP",
    details: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError("");
    if (!formData.name || !formData.phone) return;

    // Simple phone validation: minimum 10 digits, optionally starting with +
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      setPhoneError("يرجى إدخال رقم هاتف صحيح");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة لاحقاً أو التواصل عبر واتساب.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة لاحقاً أو التواصل عبر واتساب.');
    } finally {
      setIsSubmitting(false);
    }
  };



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
                  <h4>تم استلام طلبك بنجاح!</h4>
                  <p>سيقوم فريق التطوير بمراجعة متطلباتك والتواصل معك في أقرب وقت ممكن.</p>
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
                    <label>البريد الإلكتروني (اختياري)</label>
                    <div className={styles.inputWithIcon}>
                      <Mail size={18} className={styles.fieldIcon} />
                      <input 
                        type="email" 
                        placeholder="أدخل بريدك الإلكتروني (للتواصل عبر الإيميل)"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        dir="ltr"
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
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          setPhoneError(""); // Clear error on change
                        }}
                        className={phoneError ? styles.inputError : ""}
                      />
                    </div>
                    {phoneError && <span style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "0.4rem", display: "block" }}>{phoneError}</span>}
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

                  <Button type="submit" size="lg" className={styles.submitBtn} disabled={isSubmitting}>
                    <Send size={18} /> {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
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
