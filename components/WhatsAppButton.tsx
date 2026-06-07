import { contact } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/35 transition hover:-translate-y-1 hover:scale-105"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
      >
        <path d="M16.04 3.2A12.74 12.74 0 0 0 5.02 22.32L3.2 28.8l6.64-1.74a12.73 12.73 0 0 0 6.2 1.58h.01A12.72 12.72 0 0 0 16.04 3.2Zm7.5 17.96c-.31.88-1.84 1.68-2.58 1.79-.66.1-1.5.14-2.42-.15-.56-.18-1.28-.42-2.2-.82-3.86-1.67-6.38-5.57-6.57-5.83-.19-.25-1.57-2.09-1.57-3.99 0-1.9.99-2.83 1.34-3.22.35-.39.77-.49 1.03-.49.25 0 .51 0 .73.01.23.01.55-.09.86.65.31.75 1.06 2.59 1.15 2.78.09.19.15.42.03.67-.12.25-.18.41-.36.64-.18.22-.38.5-.54.67-.18.18-.37.38-.16.75.21.38.93 1.54 2 2.49 1.37 1.22 2.52 1.6 2.9 1.79.37.19.59.16.81-.09.22-.25.93-1.08 1.18-1.45.25-.38.5-.31.84-.19.35.13 2.21 1.04 2.58 1.23.38.19.63.28.72.44.1.16.1.92-.21 1.8Z" />
      </svg>
    </a>
  );
}
