"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import styles from "./Contact.module.css";
import Button from "@/components/Button";

const ContactPage = () => {
  const agents = [
    {
      name: "مكتب الأسطورة",
      location: "شارع الصناعة - مجمع النعمان",
      mapLink: "https://www.google.com/maps/search/?api=1&query=مكتب+الأسطورة+مجمع+النعمان+شارع+الصناعة+بغداد"
    }
  ];

  return (
    <div className={styles.contactPage}>
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroContent}
          >
            <h1>تواصل <span className="text-gradient">معنا</span></h1>
            <p>نحن هنا لمساعدتك. تواصل معنا مباشرة عبر واتساب أو تفضل بزيارة أحد وكلائنا المعتمدين.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contactLayout}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.contactInfo}
            >
              {/*<div className={styles.infoCard}>
                <div className={styles.iconBox}><Mail /></div>
                <div>
                  <h3>البريد الإلكتروني</h3>
                  <p>hello@arti-software.com</p>
                </div>
              </div>*/}
              <div className={styles.infoCard}>
                <div className={styles.iconBox}><Phone /></div>
                <div>
                  <h3>رقم الهاتف</h3>
                  <p>+964 780 181 4088</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.iconBox}><MapPin /></div>
                <div>
                  <h3>المقر الرئيسي</h3>
                  <p>بغداد، العراق</p>
                </div>
              </div>

              <div className={styles.whatsappCard}>
                <MessageCircle size={32} />
                <div>
                  <h3>تواصل سريع عبر واتساب</h3>
                  <p>رد فوري على جميع استفساراتكم</p>
                </div>
                <a href="https://wa.me/9647801814088" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className={styles.waBtn}>مراسلة الآن</Button>
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className={styles.agentsContainer}
            >
              <h2 className={styles.sectionTitle}>وكلاؤنا <span className="text-gradient">المعتمدون</span></h2>
              <div className={styles.agentsGrid}>
                {agents.map((agent) => (
                  <div key={agent.name} className={styles.agentCard}>
                    <div className={styles.agentInfo}>
                      <MapPin className="text-gradient" />
                      <div>
                        <h4>{agent.name}</h4>
                        <p>{agent.location}</p>
                      </div>
                    </div>
                    <a href={agent.mapLink} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
                      <ExternalLink size={18} /> خرائط غوغل
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
