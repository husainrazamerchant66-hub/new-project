import { Star, MapPin, Instagram } from "lucide-react";
import { useReveal } from "./use-reveal";

export default function Hero() {
  useReveal();
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/subida-93e3e4fc.jpg"
          alt=""
          className="qh-drift h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(12,24,18,0.85) 0%, rgba(12,24,18,0.35) 48%, rgba(12,24,18,0.12) 100%)",
          }}
        />
      </div>
      <div className="qh-frame relative grid w-full gap-10 pb-14 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pb-20">
        <div>
          <p className="flex flex-wrap items-center gap-2 text-sm font-medium text-white/90">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur">
              <Star size={14} fill="currentColor" /> 4.5 · loved by families
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur">
              <MapPin size={14} /> Panchgani, Maharashtra
            </span>
          </p>
          <h1
            className="font-display mt-5 max-w-xl font-medium text-white"
            style={{ fontSize: "clamp(2.75rem, 7vw, 5.25rem)", lineHeight: 1.02, letterSpacing: "-0.03em" }}
          >
            This is Quinte Hills.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
            Our own peach bungalow in Panchgani — curved balconies, flowering vines,
            a pool deck above the valley, and home-style food, minutes from Tableland.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="qh-btn-light">Check availability</a>
            <a
              href="https://www.instagram.com/quintehillsresidency/"
              target="_blank"
              rel="noreferrer"
              className="qh-outline text-white"
            >
              <Instagram size={18} /> See it on Instagram
            </a>
          </div>
        </div>
        <figure className="reveal overflow-hidden rounded-3xl bg-white/10 shadow-2xl backdrop-blur">
          <img
            src="/subida-528eb07a.jpg"
            alt="Swimming pool and paved courtyard of Quinte Hills Residency in the monsoon"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="px-5 py-4 text-sm font-medium text-white">
            The pool deck after the rains — swim facing the green hills.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
