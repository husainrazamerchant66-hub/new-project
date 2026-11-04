import { Camera } from "lucide-react";
import { useReveal } from "./use-reveal";
import poolReflection from "@/assets/pool-reflection.jpg.asset.json";
import bungalowFront from "@/assets/bungalow-front.jpg.asset.json";
import poolDay from "@/assets/pool-day.jpg.asset.json";
import poolNight from "@/assets/pool-night.jpg.asset.json";

const SHOTS = [
  {
    src: poolReflection.url,
    alt: "The Quinte Hills bungalow mirrored in the still pool water in the morning",
    caption: "Morning stillness — the bungalow mirrors in the pool.",
  },
  {
    src: bungalowFront.url,
    alt: "Front of the peach Quinte Hills bungalow with curved balconies, flowering vine and garden drive",
    caption: "The peach face of the bungalow and the garden drive.",
  },
  {
    src: poolDay.url,
    alt: "Blue sky and clouds over the Quinte Hills pool deck",
    caption: "Blue skies over the pool deck.",
  },
  {
    src: poolNight.url,
    alt: "The Quinte Hills pool deck lit up after dark",
    caption: "The pool deck after dark — lamps on, hills quiet.",
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
          className="hidden items-center gap-1 text-sm font-semibold qh-navlink sm:inline-flex"
          style={{ color: "var(--qh-pine)" }}
        >
          <Camera size={16} /> @quintehillsresidency
        </a>
      </div>
      <div className="qh-frame mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <figure className="qh-zoom reveal overflow-hidden rounded-2xl sm:col-span-2">
          <img
            src="/subida-93e3e4fc.jpg"
            alt="Front of the Quinte Hills Residency bungalow with curved balconies, flowering vine and garden"
            className="aspect-[16/10] w-full object-cover"
          />
          <figcaption className="px-1 py-2 text-sm font-medium opacity-70">
            The bungalow — curved balconies, flowering vines, play lawn.
          </figcaption>
        </figure>
        <figure className="qh-zoom reveal overflow-hidden rounded-2xl">
          <img
            src="/subida-528eb07a.jpg"
            alt="Aerial view of the Quinte Hills pool deck, jacuzzi and paved courtyard"
            className="aspect-[16/10] h-full w-full object-cover sm:aspect-auto sm:h-[calc(100%-2rem)]"
          />
          <figcaption className="px-1 py-2 text-sm font-medium opacity-70">
            The pool deck from above.
          </figcaption>
        </figure>
        {SHOTS.map((g) => (
          <figure key={g.src} className="qh-zoom reveal overflow-hidden rounded-2xl">
            <img src={g.src} alt={g.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <figcaption className="px-1 py-2 text-sm font-medium opacity-70">{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
