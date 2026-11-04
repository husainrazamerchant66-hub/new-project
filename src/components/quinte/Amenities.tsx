import { Waves, TreePine, Baby, UtensilsCrossed, Car, Wifi } from "lucide-react";
import { useReveal } from "./use-reveal";

const ITEMS = [
  {
    icon: Waves,
    title: "Swimming pool & jacuzzi",
    text: "The blue-tiled pool with its waterfall wall, plus a round jacuzzi tub — the deck you see in our photos, facing the hills.",
  },
  {
    icon: TreePine,
    title: "Lawns & sit-outs",
    text: "Paved courtyard with red garden tables, flowering vines on the walls, and quiet corners for morning chai.",
  },
  {
    icon: Baby,
    title: "Kids' play area",
    text: "Swings, slides and open lawn right in front of the bungalow — children stay busy while you unwind on the balcony.",
  },
  {
    icon: UtensilsCrossed,
    title: "Home-style kitchen",
    text: "Maharashtrian thalis, crowd-pleasing veg favourites, Jain options on request, and strawberry desserts in season.",
  },
  {
    icon: Car,
    title: "Easy parking & cabs",
    text: "Drive straight in and park on the property. We arrange cabs for Tableland, Sydney Point and Mahabaleshwar day trips.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi & bonfire nights",
    text: "Fibre internet for work-from-hills weekdays, and bonfire evenings with pakoras when the night turns crisp.",
  },
];

export default function Amenities() {
  useReveal();
  return (
    <section id="amenities" className="py-14 lg:py-24" style={{ backgroundColor: "var(--qh-cream-deep)" }}>
      <div className="qh-frame">
        <h2 className="reveal qh-h2 max-w-2xl" style={{ color: "var(--qh-pine)" }}>
          Everything the photos promise.
        </h2>
        <p className="reveal qh-lead mt-4 max-w-2xl opacity-75">
          Pool, gardens, play area, home food — the things guests mention most in reviews.
        </p>
        <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((a) => (
            <div key={a.title} className="reveal">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{ backgroundColor: "var(--qh-pine)", color: "#fff" }}
              >
                <a.icon size={20} />
              </span>
              <h3 className="mt-4 text-xl font-semibold">{a.title}</h3>
              <p className="mt-2 leading-relaxed opacity-75">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
