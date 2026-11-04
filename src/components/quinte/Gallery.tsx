import { Camera } from "lucide-react";
import { useReveal } from "./use-reveal";

const PLACEHOLDERS = [
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop",
    alt: "Sample deluxe room interior (placeholder)",
    caption: "Deluxe rooms · photo coming soon",
  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
    alt: "Sample family suite interior (placeholder)",
    caption: "Family suites · photo coming soon",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
    alt: "Sample garden corner (placeholder)",
    caption: "Garden corners · photo coming soon",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
    alt: "Sample misty valley morning (placeholder)",
    caption: "Valley mornings · photo coming soon",
  },
];

export default function Gallery() {
  useReveal();
  return (
    <section id="gallery" className="py-14 lg:py-20">
      <div className="qh-frame reveal flex items-end justify-between gap-4">
        <div>
          <h2 className="qh-h2" style={{ color: "var(--qh-pine)" }}>The real thing, in pictures.</h2>
          <p className="qh-lead mt-3 max-w-xl opacity-75">
            Shot at the property — the bungalow, the gardens and the pool deck.
          </p>
        </div>
        <a
          href="https://www.instagram.com/quintehillsresidency/"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-1 text-sm font-semibold sm:inline-flex"
          style={{ color: "var(--qh-pine)" }}
        >
          <Camera size={16} /> @quintehillsresidency
        </a>
      </div>
      <div className="qh-frame mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <figure className="reveal overflow-hidden rounded-2xl sm:col-span-2">
          <img
            src="/subida-93e3e4fc.jpg"
            alt="Front of the Quinte Hills Residency bungalow with curved balconies, flowering vine and garden"
            className="aspect-[16/10] w-full object-cover"
          />
          <figcaption className="px-1 py-2 text-sm font-medium opacity-70">
            The bungalow — curved balconies, flowering vines, play lawn.
          </figcaption>
        </figure>
        <figure className="reveal overflow-hidden rounded-2xl">
          <img
            src="/subida-528eb07a.jpg"
            alt="Aerial view of the Quinte Hills pool deck, jacuzzi and paved courtyard"
            className="aspect-[16/10] h-full w-full object-cover sm:aspect-auto sm:h-[calc(100%-2rem)]"
          />
          <figcaption className="px-1 py-2 text-sm font-medium opacity-70">
            The pool deck from above.
          </figcaption>
        </figure>
        {PLACEHOLDERS.map((g) => (
          <figure key={g.src} className="reveal overflow-hidden rounded-2xl">
            <img src={g.src} alt={g.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <figcaption className="px-1 py-2 text-sm font-medium opacity-70">{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
