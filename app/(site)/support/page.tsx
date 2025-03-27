"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<null | "success" | "error">(
    null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setFormStatus("success");
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    } catch {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 dark:bg-black md:px-8">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/blog/truck-2-arali.png')",
          backgroundAttachment: "scroll",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black opacity-60 dark:opacity-70"></div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mt-10 text-4xl font-bold text-white dark:text-white">
            {t("contact.title") || "Get in Touch"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200 dark:text-gray-400">
            {t("contact.subtitle") ||
              "We’d love to hear from you. Let’s start a conversation."}
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="w-full rounded-2xl bg-white p-8 shadow-md dark:bg-zinc-900 md:p-12 lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <input
                  type="text"
                  name="fullName"
                  placeholder={t("contact.fullName")}
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.email")}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <input
                  type="text"
                  name="subject"
                  placeholder={t("contact.subject")}
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder={t("contact.phone")}
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
              <textarea
                name="message"
                placeholder={t("contact.message")}
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                required
                className="input"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 md:w-fit"
              >
                {isSubmitting ? t("contact.sending") : t("contact.sendMessage")}
              </button>

              {formStatus === "success" && (
                <p className="mt-4 text-green-600">
                  {t("contact.successMessage")}
                </p>
              )}
              {formStatus === "error" && (
                <p className="mt-4 text-red-600">{t("contact.errorMessage")}</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="w-full space-y-8 lg:w-1/3"
          >
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-900">
              <FiMapPin className="mb-2 text-xl text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {t("contact.address")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("contact.addressDetails")}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-900">
              <FiMail className="mb-2 text-xl text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {t("contact.emailLabel")}
              </h3>
              <a
                href="mailto:info@araligroup.ge"
                className="text-blue-600 hover:underline"
              >
                info@araligroup.ge
              </a>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-900">
              <FiPhone className="mb-2 text-xl text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {t("contact.phoneLabel")}
              </h3>
              <a
                href="tel:+995595308220"
                className="text-blue-600 hover:underline"
              >
                +995595308220
              </a>
            </div>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative z-10 mt-20"
        >
          <h3 className="mb-4 text-center text-2xl font-semibold text-white dark:text-white">
            {t("contact.findUs") || "Find Us on the Map"}
          </h3>
          <div className="h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
            <iframe
              title="AraliGroup Location"
              src="https://maps.google.com/maps?q=41.71028,44.79611&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Custom input styles */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          background-color: transparent;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          color: #111;
          transition: all 0.3s ease;
        }
        .input:focus {
          border-color: #3b82f6;
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }
        .dark .input {
          border-color: #444;
          color: #fff;
        }
      `}</style>
    </section>
  );
};

export default Contact;
