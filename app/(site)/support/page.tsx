"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiAlertCircle,
} from "react-icons/fi";
import {
  FaHardHat,
  FaRoad,
  FaBuilding,
  FaTruck,
  FaIndustry,
  FaTools,
} from "react-icons/fa";
import Image from "next/image";

const serviceCategories = [
  { id: "road", icon: FaRoad, label: "" },
  { id: "building", icon: FaBuilding, label: "Civil Construction" },
  { id: "industrial", icon: FaIndustry, label: "Industrial Projects" },
  { id: "maintenance", icon: FaTools, label: "Maintenance" },
  { id: "transport", icon: FaTruck, label: "Equipment Transport" },
  { id: "other", icon: FaHardHat, label: "Other Services" },
];

const Contact = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectLocation: "",
    projectTimeline: "",
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
      // TODO: Implement actual form submission
      await new Promise((res) => setTimeout(res, 1000));
      setFormStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        projectLocation: "",
        projectTimeline: "",
        message: "",
      });
      setSelectedService("");
    } catch {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <Image
          src="/images/hero/arali_musha.png"
          alt="Arali Group Construction Professional"
          fill
          className="object-cover object-[center_15%] brightness-75"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/30 via-black/50 to-black/70">
          <motion.div
            className="container mx-auto px-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t("contact.title")}
            </motion.h1>
            <motion.p
              className="mx-auto mb-8 max-w-3xl text-base text-gray-100 sm:text-lg md:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            ></motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hero Description Text Under Image */}
      <motion.section
        className="bg-gray-100 px-4 py-8 text-center dark:bg-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm text-gray-700 dark:text-gray-300 sm:text-base md:text-lg">
            {t("contact.description")}
          </p>
        </div>
      </motion.section>

      {/* Emergency Contact Banner */}
      <div className="bg-red-600 py-3">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-center gap-2 text-white">
            <FiAlertCircle className="text-xl" />
            <span className="font-medium">{t("contact.emergency")}:</span>
            <a href="tel:+995595308220" className="underline">
              +995 598 70 79 29
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="space-y-8 lg:col-span-1">
              {/* Office Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800"
              >
                <FiMapPin className="mb-4 text-2xl text-blue-600" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {t("contact.address")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t("contact.addressDetails")}
                </p>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800"
              >
                <div className="mb-6">
                  <FiPhone className="mb-2 text-2xl text-blue-600" />
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    {t("contact.phoneLabel")}
                  </h3>
                  <a
                    href="tel:+995595308220"
                    className="text-blue-600 hover:underline"
                  >
                    +995 598 70 79 29
                  </a>
                </div>
                <div>
                  <FiMail className="mb-2 text-2xl text-blue-600" />
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    {t("contact.emailLabel")}
                  </h3>
                  <a
                    href="mailto:info@araligroup.ge"
                    className="text-blue-600 hover:underline"
                  >
                    info@araligroup.ge
                  </a>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800"
              >
                <FiClock className="mb-4 text-2xl text-blue-600" />
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {t("contact.businessHours")}
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p>{t("contact.weekdays")}: 09:00 - 18:00</p>
                  <p>{t("contact.saturday")}: 10:00 - 15:00</p>
                  <p>
                    {t("contact.sunday")}: {t("contact.closed")}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("contact.requestService")}
                </h2>

                {/* Service Categories */}
                <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                  {serviceCategories.map(({ id, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => setSelectedService(id)}
                      className={`flex flex-col items-center rounded-lg border p-4 transition-all hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 ${
                        selectedService === id
                          ? "border-blue-600 bg-blue-50 dark:border-blue-500 dark:bg-gray-700"
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <Icon className="text-3xl text-blue-600" />
                    </button>
                  ))}
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
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

                  <div className="grid gap-6 md:grid-cols-2">
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t("contact.phone")}
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="input"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder={t("contact.company")}
                      value={formData.company}
                      onChange={handleInputChange}
                      className="input"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <input
                      type="text"
                      name="projectLocation"
                      placeholder={t("contact.projectLocation")}
                      value={formData.projectLocation}
                      onChange={handleInputChange}
                      className="input"
                    />
                    <input
                      type="text"
                      name="projectTimeline"
                      placeholder={t("contact.projectTimeline")}
                      value={formData.projectTimeline}
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
                    className="w-full rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70"
                  >
                    {isSubmitting
                      ? t("contact.sending")
                      : t("contact.sendMessage")}
                  </button>

                  {formStatus === "success" && (
                    <p className="mt-4 text-green-600 dark:text-green-400">
                      {t("contact.successMessage")}
                    </p>
                  )}
                  {formStatus === "error" && (
                    <p className="mt-4 text-red-600 dark:text-red-400">
                      {t("contact.errorMessage")}
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mt-16"
          >
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              {t("contact.findus")}
            </h2>
            <div className="h-[400px] overflow-hidden rounded-2xl shadow-lg">
              <iframe
                title="AraliGroup Location"
                src="https://maps.google.com/maps?q=41.6566958,43.0251297&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom input styles */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          color: #111827;
          transition: all 0.3s ease;
        }
        .input:focus {
          border-color: #2563eb;
          outline: none;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        .dark .input {
          background-color: #1f2937;
          border-color: #374151;
          color: white;
        }
        .dark .input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </>
  );
};

export default Contact;
