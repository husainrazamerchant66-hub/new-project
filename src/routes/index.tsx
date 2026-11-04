import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star, MapPin, Instagram, ExternalLink, BedDouble, Menu, X } from "lucide-react";
import Hero from "../components/quinte/Hero";
import Gallery from "../components/quinte/Gallery";
import Amenities from "../components/quinte/Amenities";
import Location from "../components/quinte/Location";
import Contact from "../components/quinte/Contact";
import { useReveal } from "../components/quinte/use-reveal";
import bedroom from "@/assets/bedroom.jpg.asset.json";
import lounge from "@/assets/lounge.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Gallery", href: "#gallery" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

const ROOMS = [
  {
    name: "Deluxe Valley Room",
    img: bedroom.url,
    desc: "Cosy rooms with garden or valley views off the curved balconies. King bed, sit-out corner, tea kit.",
    points: ["Sleeps 2–3", "Balcony sit-out", "High-speed Wi-Fi"],
    price: "₹4,500",
  },
  {
    name: "Family Garden Suite",
    img: lounge.url,
    desc: "Extra space opening onto the lawn — room for kids to run while you finish your chai in peace.",
    points: ["Sleeps 4–5", "Garden access", "Smart TV"],
    price: "₹6,800",
  },
  {
    name: "Whole Bungalow",
    img: "/subida-93e3e4fc.jpg",
    desc: "Take over the peach bungalow you see in the photos — verandahs, lawn and play area for one group.",
    points: ["Sleeps 8–10", "Private verandahs", "Caretaker on call"],
    price: "₹14,000",
  },
];

const REVIEWS = [
  {
    quote: "Spotless rooms, hot food served with a smile, and a view we kept photographing every morning.",
    meta: "Family stay · via Google reviews",
  },
  {
    quote: "Quiet corner of Panchgani yet close to everything. The pool and bonfire were the highlight for our kids.",
    meta: "Weekend trip · via MakeMyTrip",
  },
  {
    quote: "Felt like a friend's bungalow, not a hotel. Staff arranged cabs, extra beds, even a birthday cake.",
    meta: "Group stay · via Booking.com",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50" style={{ backgroundColor: "rgba(250,247,240,0.92)", backdropFilter: "blur(10px)" }}>
      <div className="qh-frame flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold tracking-tight" style={{ color: "var(--qh-pine)" }}>
            Quinte Hills
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-widest opacity-60 sm:inline">Panchgani</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="qh-navlink text-sm font-medium opacity-80">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="qh-btn hidden !px-5 !py-2.5 !text-sm sm:inline-flex">
            Check availability
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            style={{ border: "1.5px solid var(--qh-pine)", color: "var(--qh-pine)" }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t px-5 py-4 lg:hidden" style={{ backgroundColor: "var(--qh-cream)", borderColor: "rgba(0,0,0,0.08)" }} aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-base font-medium">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="qh-btn mt-2">
              Check availability
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Index() {
  useReveal();
  return (
    <div id="top" className="qh-ground min-h-screen" style={{ overflowX: "clip" }}>
      <Header />
      <Hero />

      {/* TRUST STRIP */}
      <section className="qh-frame reveal grid grid-cols-2 gap-3 py-10 md:grid-cols-4">
        {[
          { k: "4.5 / 5", v: "Guest rating across platforms" },
          { k: "10 min", v: "To Tableland plateau" },
          { k: "Pool", v: "With jacuzzi & hill view" },
          { k: "8 – 10", v: "Guests in the full bungalow" },
        ].map((s) => (
          <div key={s.k} className="qh-card reveal rounded-2xl px-5 py-5" style={{ backgroundColor: "var(--qh-cream-deep)" }}>
            <p className="font-display text-3xl font-semibold" style={{ color: "var(--qh-pine)" }}>{s.k}</p>
            <p className="mt-1 text-sm opacity-70">{s.v}</p>
          </div>
        ))}
      </section>

      <Gallery />

      {/* ROOMS */}
      <section id="rooms" className="py-14 lg:py-24" style={{ backgroundColor: "var(--qh-pine)", color: "#fff" }}>
        <div className="qh-frame">
          <div className="reveal">
            <h2 className="qh-h2">Rooms for every kind of trip.</h2>
            <p className="mt-3 max-w-xl text-lg opacity-80">
              Couples, families, full-house groups — pick your pace. Rates are indicative; live prices on the booking platforms.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ROOMS.map((r) => (
              <article key={r.name} className="qh-card reveal overflow-hidden rounded-3xl" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                <img src={r.img} alt={r.name} className="qh-card-img aspect-[4/3] w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl font-medium">{r.name}</h3>
                    <p className="whitespace-nowrap text-sm font-semibold qh-brass-text">from {r.price}</p>
                  </div>
                  <p className="mt-2 text-[0.95rem] leading-relaxed opacity-80">{r.desc}</p>
                  <ul className="mt-4 space-y-1.5 text-sm opacity-90">
                    {r.points.map((p) => (
                      <li key={p} className="flex items-center gap-2"><BedDouble size={15} className="shrink-0 opacity-70" /> {p}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="qh-btn-light mt-6 w-full !py-3 text-sm">Enquire for {r.name}</a>
                </div>
              </article>
            ))}
          </div>
          <p className="reveal mt-6 text-xs opacity-60">Rates are indicative — confirm live tariffs on the booking platforms or over WhatsApp.</p>
        </div>
      </section>

      <Amenities />

      {/* REVIEWS */}
      <section id="reviews" className="py-14 lg:py-24" style={{ backgroundColor: "var(--qh-pine)", color: "#fff" }}>
        <div className="qh-frame">
          <div className="reveal">
            <h2 className="qh-h2">Guests keep the best record.</h2>
            <p className="mt-3 flex items-center gap-2 text-lg opacity-80">
              <span className="flex" aria-label="4.5 out of 5 stars">
                {[0, 1, 2, 3].map((i) => (<Star key={i} size={18} fill="currentColor" />))}
                <Star size={18} fill="currentColor" opacity={0.4} />
              </span>
              4.5 across Google, Booking.com & MakeMyTrip
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.quote} className="qh-card reveal rounded-3xl p-7" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                <Star size={20} fill="currentColor" className="qh-brass-text" />
                <blockquote className="mt-4 font-display text-xl leading-snug">“{r.quote}”</blockquote>
                <figcaption className="mt-4 text-sm opacity-70">{r.meta}</figcaption>
              </figure>
            ))}
          </div>
          <p className="reveal mt-5 text-xs opacity-60">Representative guest sentiments from public listings — swap with verbatim reviews before launch.</p>
          <div className="reveal mt-6">
            <a
              href="https://www.tripadvisor.in/Hotel_Review-g297653-d34105839-Reviews-Quinte_Hills_Residency-Panchgani_Satara_District_Maharashtra.html"
              target="_blank"
              rel="noreferrer"
              className="qh-chip inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff" }}
            >
              Read reviews on Tripadvisor <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      <Location />
      <Contact />

      {/* FOOTER */}
      <footer className="pt-4" style={{ backgroundColor: "var(--qh-pine-deep)", color: "#fff" }}>
        <div className="qh-frame pb-10">
          <p className="font-display text-center font-medium" style={{ fontSize: "clamp(3rem, 12vw, 9rem)", lineHeight: 1, letterSpacing: "-0.03em", opacity: 0.95 }}>
            Quinte Hills
          </p>
          <p className="mt-2 text-center text-sm opacity-70">A boutique hillside residency · Panchgani, Maharashtra</p>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t pt-6 sm:flex-row" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm opacity-80">
              {NAV.map((n) => (<a key={n.href} href={n.href} className="qh-navlink">{n.label}</a>))}
            </div>
            <div className="flex items-center gap-2">
              <a href="https://www.instagram.com/quintehillsresidency/" target="_blank" rel="noreferrer" aria-label="Instagram" className="qh-icon-btn inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <Instagram size={18} />
              </a>
              <a href="https://share.google/xoudzc0CYBdhMAta0" target="_blank" rel="noreferrer" aria-label="Directions on Google Maps" className="qh-icon-btn inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <MapPin size={18} />
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs opacity-50">
            All photos are of the property itself — the bungalow, pool deck, lounge and rooms.
          </p>
        </div>
      </footer>
    </div>
  );
}
