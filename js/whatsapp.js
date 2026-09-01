/**
 * SERJAFAN - WhatsApp Integration Module
 * Official Number: +6283899905679
 */

import { CONFIG } from './data.js';

/**
 * Builds the official WhatsApp link with encoded message
 * @param {string} message 
 * @returns {string} wa.me URL
 */
export function buildWhatsAppUrl(message = "") {
  const base = `https://wa.me/${CONFIG.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

/**
 * Generates custom message based on service type
 * @param {string} serviceName 
 * @param {object} customData 
 * @returns {string} Formatted WhatsApp message
 */
export function generateWhatsAppMessage(serviceName = "", customData = {}) {
  const cleanName = (serviceName || "").toLowerCase();

  // Special Template for PowerPoint
  if (cleanName.includes("powerpoint") || cleanName.includes("ppt")) {
    const slideCount = customData.quantity || customData.slides || "[Isi jumlah slide]";
    const topic = customData.topic || "[Isi topik/tema materi]";
    const deadline = customData.deadline || "[Isi tanggal/jam deadline]";
    const details = customData.details || "[Jelaskan kebutuhan/animasi/format]";

    return `Halo SERJAFAN 👋

Saya ingin memesan Jasa PowerPoint.

Jumlah slide: ${slideCount}
Tema: ${topic}
Deadline: ${deadline}
Detail kebutuhan: ${details}

Mohon informasi estimasi harga dan pengerjaannya.

Terima kasih.`;
  }

  // Special Template for School / College Tasks
  if (cleanName.includes("tugas") || cleanName.includes("akademik") || cleanName.includes("sd") || cleanName.includes("smp") || cleanName.includes("sma") || cleanName.includes("kuliah")) {
    const grade = customData.grade || serviceName || "[SD / SMP / SMA / Kuliah]";
    const subject = customData.subject || "[Isi mata pelajaran / mata kuliah]";
    const quantity = customData.quantity || "[Isi jumlah soal / halaman]";
    const deadline = customData.deadline || "[Isi tanggal/jam deadline]";
    const details = customData.details || "[Jelaskan instruksi tugas & materi]";

    return `Halo SERJAFAN 👋

Saya ingin konsultasi Bantuan Tugas.

Jenjang: ${grade}
Mata pelajaran: ${subject}
Jumlah soal/halaman: ${quantity}
Deadline: ${deadline}
Detail kebutuhan: ${details}

Mohon informasi estimasi harga dan pengerjaannya.

Terima kasih.`;
  }

  // General Service Template
  const qty = customData.quantity || "[Isi jumlah halaman/file]";
  const dl = customData.deadline || "[Isi tanggal/jam deadline]";
  const notes = customData.details || "[Jelaskan instruksi & format pekerjaan]";
  const selectedService = serviceName || "Layanan Jasa";

  return `Halo SERJAFAN 👋

Saya ingin memesan layanan:
${selectedService}

Detail kebutuhan:
${notes}

Jumlah:
${qty}

Deadline:
${dl}

Mohon informasi estimasi harga dan pengerjaannya.

Terima kasih.`;
}

/**
 * Open WhatsApp directly with tailored message
 * @param {string} serviceName 
 * @param {object} customData 
 */
export function openWhatsApp(serviceName = "", customData = {}) {
  const message = generateWhatsAppMessage(serviceName, customData);
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Quick consultation link
 */
export function openGeneralConsultation() {
  const message = "Halo SERJAFAN, saya ingin konsultasi mengenai layanan jasa.";
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}
