export const CONTACT_EMAIL = "sandaminigamage12@gmail.com";

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function buildContactMailtoHref(data: ContactFormData) {
  const subject = `Portfolio contact: ${data.subject.trim()}`;
  const body = [
    `Name: ${data.name.trim()}`,
    `Email: ${data.email.trim()}`,
    `Subject: ${data.subject.trim()}`,
    "",
    data.message.trim(),
  ].join("\n");

  const params = [
    `subject=${encodeURIComponent(subject)}`,
    `body=${encodeURIComponent(body)}`,
  ].join("&");

  return `mailto:${CONTACT_EMAIL}?${params}`;
}