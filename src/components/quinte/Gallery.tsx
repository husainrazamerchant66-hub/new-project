import { Camera } from "lucide-react";
import { useReveal } from "./use-reveal";
import droneOverhead from "@/assets/drone-overhead.jpg.asset.json";
import diningHall from "@/assets/dining-hall.png.asset.json";
import gamesRoom from "@/assets/games-room.jpg.asset.json";
import gamesRoomEvening from "@/assets/games-room-evening.jpg.asset.json";
import gardenLawn from "@/assets/garden-lawn.jpg.asset.json";
import restaurantInterior from "@/assets/restaurant-interior.jpg.asset.json";
import tableTennis from "@/assets/table-tennis.jpg.asset.json";
import bungalowFront from "@/assets/bungalow-front.jpg.asset.json";
import bedroomSuite from "@/assets/bedroom-suite.jpg.asset.json";
import bedroom from "@/assets/bedroom.jpg.asset.json";
import livingHall from "@/assets/living-hall.jpg.asset.json";
import lounge from "@/assets/lounge.jpg.asset.json";

const SHOTS = [
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
    src: gamesRoomEvening.url,
    alt: "The indoor games room at Quinte Hills with table tennis, foosball and tabletop games",
    caption: "More from the games room — gather around for a match.",
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
  {
    src: bedroomSuite.url,
    alt: "A guest bedroom at Quinte Hills with a comfortable double bed",
    caption: "A quiet, comfortable room for a hill-station stay.",
  },
  {
    src: bedroom.url,
    alt: "A second bedroom at Quinte Hills with blue walls and patterned bedding",
    caption: "A welcoming bedroom with its own character.",
  },
  {
    src: lounge.url,
    alt: "The lounge area at Quinte Hills with comfortable seating",
    caption: "A relaxed lounge to unwind between outings.",
  },
  {
    src: livingHall.url,
    alt: "The living and dining hall at Quinte Hills with sofas and a dining table",
    caption: "The shared living-dining hall for family time.",
    wide: true,
  },
  {
    src: bungalowFront.url,
    alt: "The peach bungalow exterior at Quinte Hills with balconies and garden",
    caption: "The peach bungalow, with its balconies and garden.",
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
            The bungalow, rooms, gardens, dining spaces and games room — all photographed here.
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
            src={droneOverhead.url}
            alt="Aerial drone view of Quinte Hills — bungalow, courtyard, swimming pool and jacuzzi"
            className="aspect-[16/10] w-full object-cover"
          />
          <figcaption className="px-1 py-2 text-sm font-medium opacity-70">
            A drone view across the bungalow, courtyard and grounds.
          </figcaption>
        </figure>
        {SHOTS.map((g) => (
          <figure
            key={g.src}
            className={`qh-zoom reveal overflow-hidden rounded-2xl${g.wide ? " sm:col-span-2" : ""}`}
          >
            <img
              src={g.src}
              alt={g.alt}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="px-1 py-2 text-sm font-medium opacity-70">{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
