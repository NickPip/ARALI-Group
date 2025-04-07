"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const { t } = useTranslation();

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => setHasMounted(true), []);
  if (!hasMounted) return null;

  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // setFormStatus("success");
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    } catch {
      // setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="support" className="bg-white px-4 py-20 dark:bg-black md:px-8">
      <div className="relative mx-auto max-w-7xl">
        {/* Decorative Shape */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <Image
            src="/images/abstract-background.svg"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            {t("contact.title") || "Get in Touch"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            {t("contact.subtitle") ||
              "Feel free to contact us with any inquiries or feedback. We’re here to help!"}
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Contact Form */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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

          {/* Contact Details */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
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
                href="tel:+995598707929"
                className="text-blue-600 hover:underline"
              >
                +995 598 70 79 29
              </a>
            </div>
          </motion.div>
        </div>
      </div>

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
