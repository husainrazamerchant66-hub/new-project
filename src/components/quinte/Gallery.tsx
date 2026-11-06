import { Camera } from "lucide-react";
import { useReveal } from "./use-reveal";
import aerialProperty from "@/assets/aerial-property.jpg.asset.json";
import nightCourtyard from "@/assets/night-courtyard.png.asset.json";
import diningHall from "@/assets/dining-hall.png.asset.json";
import gamesRoom from "@/assets/games-room.jpg.asset.json";
import gardenLawn from "@/assets/garden-lawn.jpg.asset.json";
import restaurantInterior from "@/assets/restaurant-interior.jpg.asset.json";
import tableTennis from "@/assets/table-tennis.jpg.asset.json";

const SHOTS = [
  {
    src: nightCourtyard.url,
    alt: "The Quinte Hills courtyard and pool deck lit up after dark",
    caption: "After dark — courtyard and pool deck glowing.",
    tall: true,
  },
  {
    src: diningHall.url,
    alt: "The dining hall at Quinte Hills with green booths and a table laid with food",
    caption: "The dining hall — home-style meals served here.",
  },
  {
    src: gamesRoom.url,
    alt: "The indoor games room at Quinte Hills with carrom, foosball and table tennis",
    caption: "Indoor games room — carrom, foosball, table tennis.",
  },
  {
    src: gardenLawn.url,
    alt: "The garden lawn at Quinte Hills with red round sit-out tables under a blue sky",
    caption: "The garden lawn and sit-outs under the hill sky.",
  },
  {
    src: restaurantInterior.url,
    alt: "The restaurant interior at Quinte Hills with green booth seating and warm lighting",
    caption: "The restaurant — your meals come from this kitchen.",
    wide: true,
  },
  {
    src: tableTennis.url,
    alt: "Close-up of the table-tennis table at Quinte Hills with paddles and balls",
    caption: "Table tennis — game on, any time of day.",
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
            Shot at the property — the bungalow, the gardens, the dining hall and the games room.
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
            src={aerialProperty.url}
            alt="Aerial drone view of the whole Quinte Hills property — bungalow, paved courtyard, swimming pool and jacuzzi"
            className="aspect-[16/10] w-full object-cover"
          />
          <figcaption className="px-1 py-2 text-sm font-medium opacity-70">
            The whole property from above — bungalow, courtyard, pool and jacuzzi.
          </figcaption>
        </figure>
        {SHOTS.map((g) => (
          <figure key={g.src} className="qh-zoom reveal overflow-hidden rounded-2xl">
            <img
              src={g.src}
              alt={g.alt}
              className={
                g.tall
                  ? "aspect-[4/3] h-full w-full object-cover sm:aspect-auto sm:h-[calc(100%-2rem)]"
                  : "aspect-[4/3] w-full object-cover"
              }
              loading="lazy"
            />
            <figcaption className="px-1 py-2 text-sm font-medium opacity-70">{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
