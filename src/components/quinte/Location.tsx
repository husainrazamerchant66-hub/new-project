import { MapPin, Car } from "lucide-react";
import { useReveal } from "./use-reveal";

const NEARBY = [
  { name: "Tableland", dist: "10 min", note: "Asia's second-largest mountain plateau — horse rides and sunset points." },
  { name: "Sydney Point", dist: "12 min", note: "The classic Krishna valley panorama, best just after sunrise." },
  { name: "Parsi Point", dist: "15 min", note: "Evening viewpoint facing the Dhom dam backwaters." },
  { name: "Mapro Garden", dist: "20 min", note: "Strawberry cream, chocolate factory tour and the weekend crowd." },
  { name: "Mahabaleshwar", dist: "35 min", note: "Venna Lake boating, Wilson Point and old strawberry farms." },
  { name: "Pune", dist: "~2.5 hrs", note: "100 km via Wai — the perfect weekend drive up the ghat." },
];

export default function Location() {
  useReveal();
  return (
    <section id="visit" className="qh-frame grid gap-10 py-14 lg:grid-cols-2 lg:py-24">
      <div className="reveal">
        <h2 className="qh-h2" style={{ color: "var(--qh-pine)" }}>In Panchgani, near everything.</h2>
        <p className="qh-lead mt-4 opacity-80">
          The bungalow sits in town with the hills all around — viewpoints an easy drive away,
          and we arrange cabs and picnic boxes.
        </p>
        <ul className="mt-6 space-y-4">
          {NEARBY.map((d) => (
            <li key={d.name} className="flex gap-3">
              <Car size={20} className="mt-1 shrink-0" style={{ color: "var(--qh-pine)" }} />
              <div>
                <p className="font-semibold">
                  {d.name} <span className="ml-1 text-xs font-bold opacity-60">{d.dist}</span>
                </p>
                <p className="text-sm opacity-70">{d.note}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="https://share.google/xoudzc0CYBdhMAta0" target="_blank" rel="noreferrer" className="qh-btn">
            Get directions
          </a>
        </div>
      </div>
      <div className="reveal overflow-hidden rounded-3xl" style={{ backgroundColor: "var(--qh-cream-deep)" }}>
        <img
          src="/subida-528eb07a.jpg"
          alt="Pool deck and green hills around Quinte Hills Residency"
          className="aspect-[16/10] w-full object-cover"
          loading="lazy"
        />
        <iframe
          title="Map showing Panchgani, Maharashtra"
          src="https://www.openstreetmap.org/export/embed.html?bbox=73.78%2C17.88%2C73.85%2C17.95&layer=mapnik&marker=17.9184%2C73.7987"
          className="h-72 w-full border-0"
          loading="lazy"
        />
        <div className="flex items-center justify-between gap-3 p-5">
          <p className="flex items-center gap-2 text-sm font-medium">
            <MapPin size={16} /> Panchgani, Satara, Maharashtra
          </p>
          <p className="hidden text-xs opacity-60 sm:block">Strawberry country · pleasant all year</p>
        </div>
      </div>
    </section>
  );
}
