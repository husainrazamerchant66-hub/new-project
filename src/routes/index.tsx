import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Star,
  MapPin,
  Wifi,
  Coffee,
  Flame,
  Mountain,
  Car,
  Users,
  BedDouble,
  Phone,
  Instagram,
  ExternalLink,
  ChevronDown,
  Check,
  CalendarDays,
  UtensilsCrossed,
  TreePine,
  Camera,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const OTA_LINKS = [
  { label: "Booking.com", href: "https://www.booking.com/hotel/in/quinte-hills-residency.html" },
  { label: "MakeMyTrip", href: "https://www.makemytrip.com/hotels/quinte_hills_residency-details-mahabaleshwar.html" },
  { label: "Goibibo", href: "https://www.goibibo.com/hotels/quinte-hills-residency-hotel-in-mahabaleshwar-5037086730120794325/" },
  { label: "Agoda", href: "https://www.agoda.com/en-in/quinte-hills-residency-h25937528/hotel/panchgani-in.html" },
  { label: "Tripadvisor", href: "https://www.tripadvisor.in/Hotel_Review-g297653-d34105839-Reviews-Quinte_Hills_Residency-Panchgani_Satara_District_Maharashtra.html" },
];

const NAV = [
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Dining", href: "#dining" },
  { label: "Explore", href: "#explore" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

const ROOMS = [
  {
    name: "Deluxe Valley Room",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",
    desc: "Wake up to layered Sahyadri ridges from your own window. King bed, sit-out corner and a bathroom built for long showers.",
    points: ["Valley-facing windows", "King bed · sleeps 2–3", "High-speed Wi-Fi", "Tea / coffee kit"],
    price: "₹4,500",
  },
  {
    name: "Family Garden Suite",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
    desc: "Two connected spaces opening onto the lawn — room for kids to run while you finish your chai in peace.",
    points: ["Garden access", "Sleeps 4–5", "Two smart TVs", "Mini-fridge & kettle"],
    price: "₹6,800",
  },
  {
    name: "Quinte Bungalow",
    img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200&auto=format&fit=crop",
    desc: "The whole house for one group: living room, verandah, bonfire corner and space for 8–10 guests.",
    points: ["Private verandah", "Living + dining room", "Bonfire evenings", "Caretaker on call"],
    price: "₹14,000",
  },
];

const AMENITIES = [
  { icon: Mountain, title: "Valley-view decks", text: "Every evening the sun drops straight into the Krishna valley. The west deck is the best seat in the house." },
  { icon: Flame, title: "Bonfire nights", text: "Crisp Panchgani nights were made for this — order pakoras, pull up a chair, stay till the stars come out." },
  { icon: UtensilsCrossed, title: "Home-style kitchen", text: "Maharashtrian thalis, fresh strawberry desserts in season, and Jain / veg options cooked to order." },
  { icon: Wifi, title: "Work-from-hills Wi-Fi", text: "Fibre internet and power backup in rooms, so a weekday escape does not mean disappearing from work." },
  { icon: Car, title: "Free parking & drivers", text: "Secure on-site parking, driver accommodation help, and cabs arranged for Tableland and Mahabaleshwar." },
  { icon: TreePine, title: "Lawns & sit-outs", text: "Strawberry beds, tall rain trees and quiet corners for reading, yoga or doing absolutely nothing." },
];

const NEARBY = [
  { name: "Tableland", dist: "10 min", note: "Asia's second-largest mountain plateau — horse rides and sunset points." },
  { name: "Sydney Point", dist: "12 min", note: "The classic Krishna valley panorama, best just after sunrise." },
  { name: "Parsi Point", dist: "15 min", note: "Evening viewpoint facing the Dhom dam backwaters." },
  { name: "Mapro Garden", dist: "20 min", note: "Strawberry cream, chocolate factory tour and the weekend crowd." },
  { name: "Mahabaleshwar", dist: "35 min", note: "Venna Lake boating, Wilson Point and old strawberry farms." },
  { name: "Rajpuri Caves", dist: "25 min", note: "Ancient cave temples wrapped in monsoon greenery." },
];

const REVIEWS = [
  {
    quote: "Spotless rooms, hot food served with a smile, and a view we kept photographing every morning.",
    meta: "Family stay · via Google reviews",
  },
  {
    quote: "Quiet corner of Panchgani yet close to everything. Bonfire night was the highlight for our kids.",
    meta: "Weekend trip · via MakeMyTrip",
  },
  {
    quote: "Felt like a friend's bungalow, not a hotel. Staff arranged cabs, extra beds, even a birthday cake.",
    meta: "Group stay · via Booking.com",
  },
];

function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add("qh-js");
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

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
            <a key={n.href} href={n.href} className="text-sm font-medium opacity-80 transition-opacity hover:opacity-100">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#enquire" className="qh-btn hidden !px-5 !py-2.5 !text-sm sm:inline-flex">
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
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium"
              >
                {n.label}
              </a>
            ))}
            <a href="#enquire" onClick={() => setOpen(false)} className="qh-btn mt-2">
              Check availability
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function EnquiryWidget({ compact = false }: { compact?: boolean }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [sent, setSent] = useState(false);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const a = new Date(checkIn).getTime();
    const b = new Date(checkOut).getTime();
    const d = Math.round((b - a) / 86400000);
    return Number.isFinite(d) && d > 0 ? d : 0;
  }, [checkIn, checkOut]);

  const estimate = useMemo(() => {
    const g = parseInt(guests, 10) || 2;
    const base = g <= 2 ? 4500 : g <= 5 ? 6800 : 14000;
    return nights > 0 ? base * nights : 0;
  }, [guests, nights]);

  return (
    <div
      className="w-full rounded-3xl p-5 shadow-xl sm:p-6"
      style={{ backgroundColor: "#fff" }}
      data-ui
    >
      <p className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--qh-pine)" }}>
        <CalendarDays size={16} /> Plan your stay
      </p>
      <div className={`mt-4 grid gap-3 ${compact ? "grid-cols-2" : "grid-cols-2"}`}>
        <label className="block">
          <span className="text-xs font-medium opacity-70">Check-in</span>
          <input
            type="date"
            value={checkIn}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCheckIn(e.target.value)}
            className="mt-1 w-full rounded-xl border px-3 py-2.5 text-sm"
            style={{ borderColor: "rgba(0,0,0,0.15)" }}
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium opacity-70">Check-out</span>
          <input
            type="date"
            value={checkOut}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCheckOut(e.target.value)}
            className="mt-1 w-full rounded-xl border px-3 py-2.5 text-sm"
            style={{ borderColor: "rgba(0,0,0,0.15)" }}
          />
        </label>
      </div>
      <label className="mt-3 block">
        <span className="text-xs font-medium opacity-70">Guests</span>
        <select
          value={guests}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setGuests(e.target.value)}
          className="mt-1 w-full rounded-xl border px-3 py-2.5 text-sm"
          style={{ borderColor: "rgba(0,0,0,0.15)" }}
        >
          <option value="2">2 guests</option>
          <option value="4">3 – 4 guests</option>
          <option value="6">5 – 6 guests</option>
          <option value="10">Group · 7+</option>
        </select>
      </label>
      {nights > 0 ? (
        <p className="mt-3 rounded-xl px-3 py-2.5 text-sm font-medium" style={{ backgroundColor: "var(--qh-cream-deep)" }}>
          {nights} {nights === 1 ? "night" : "nights"} · indicative from ₹{estimate.toLocaleString("en-IN")}
        </p>
      ) : (
        <p className="mt-3 text-xs opacity-60">Pick dates to see nights and an indicative price.</p>
      )}
      {!sent ? (
        <button
          type="button"
          className="qh-btn mt-4 w-full"
          onClick={() => setSent(true)}
        >
          <Check size={18} /> Request callback
        </button>
      ) : (
        <p className="mt-4 rounded-xl px-3 py-3 text-center text-sm font-medium" style={{ backgroundColor: "var(--qh-pine)", color: "#fff" }}>
          Noted! We will confirm availability for {guests} guests shortly.
        </p>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {OTA_LINKS.slice(0, 3).map((o) => (
          <a
            key={o.label}
            href={o.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold"
            style={{ backgroundColor: "var(--qh-cream)", color: "var(--qh-pine)" }}
          >
            Book on {o.label} <ExternalLink size={12} />
          </a>
        ))}
      </div>
    </div>
  );
}

function Index() {
  useReveal();

  return (
    <div id="top" className="qh-ground min-h-screen" style={{ overflowX: "clip" }}>
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2000&auto=format&fit=crop"
            alt="Quinte Hills Residency bungalow exterior with garden — replace with real photo"
            className="qh-drift h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,24,18,0.82) 0%, rgba(12,24,18,0.35) 45%, rgba(12,24,18,0.15) 100%)" }} />
        </div>
        <div className="qh-frame relative grid w-full gap-10 pb-14 pt-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:pb-20">
          <div>
            <p className="flex flex-wrap items-center gap-2 text-sm font-medium text-white/90">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur">
                <Star size={14} fill="currentColor" /> 4.5 · loved by families
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur">
                <MapPin size={14} /> Panchgani, Maharashtra
              </span>
            </p>
            <h1 className="font-display mt-5 max-w-xl font-medium text-white" style={{ fontSize: "clamp(2.75rem, 7vw, 5.25rem)", lineHeight: 1.02, letterSpacing: "-0.03em" }}>
              Wake up above the clouds.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
              Quinte Hills Residency is a quiet boutique bungalow stay in Panchgani — valley-view rooms,
              home-style food and bonfire evenings, minutes from Tableland.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#enquire" className="qh-btn-light">Check availability</a>
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
          <div className="reveal">
            <EnquiryWidget />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="qh-frame reveal grid grid-cols-2 gap-3 py-10 md:grid-cols-4">
        {[
          { k: "4.5 / 5", v: "Guest rating across platforms" },
          { k: "10 min", v: "To Tableland plateau" },
          { k: "100 km", v: "From Pune · weekend-ready" },
          { k: "8 – 10", v: "Guests in the full bungalow" },
        ].map((s) => (
          <div key={s.k} className="rounded-2xl px-5 py-5" style={{ backgroundColor: "var(--qh-cream-deep)" }}>
            <p className="font-display text-3xl font-semibold" style={{ color: "var(--qh-pine)" }}>{s.k}</p>
            <p className="mt-1 text-sm opacity-70">{s.v}</p>
          </div>
        ))}
      </section>

      {/* WELCOME */}
      <section className="qh-frame grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="reveal relative">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop"
            alt="Lawns and exterior of a hillside boutique stay in Panchgani"
            className="aspect-[4/5] w-full rounded-3xl object-cover sm:aspect-[5/5]"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop"
            alt="Home-style dinner served at the residency"
            className="absolute -bottom-8 -right-2 hidden w-56 rounded-2xl border-4 border-white object-cover shadow-xl sm:block"
            style={{ borderColor: "var(--qh-cream)" }}
            loading="lazy"
          />
        </div>
        <div className="reveal">
          <h2 className="qh-h2" style={{ color: "var(--qh-pine)" }}>Five hills, one quiet house.</h2>
          <p className="qh-lead mt-5 opacity-80">
            “Quinte” means five — for the five hills folded around Panchgani. Our residency sits on one
            of their gentlest slopes: mornings of mist and birdsong, afternoons of strawberries and
            valley light, nights around the fire.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Valley-facing rooms with sunrise views",
              "In-house vegetarian kitchen with Jain options",
              "Lawns, sit-outs and a stargazing deck",
              "Help with cabs, treks and local sightseeing",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-[1.05rem]">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "var(--qh-pine)", color: "#fff" }}>
                  <Check size={14} />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <a href="#rooms" className="qh-btn mt-8">See the rooms</a>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" className="py-14 lg:py-24" style={{ backgroundColor: "var(--qh-pine)", color: "#fff" }}>
        <div className="qh-frame">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="qh-h2">Rooms for every kind of trip.</h2>
              <p className="mt-3 max-w-xl text-lg opacity-80">Couples, families, full-house groups — pick your pace. Rates are indicative; live prices on the booking platforms.</p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ROOMS.map((r) => (
              <article key={r.name} className="reveal overflow-hidden rounded-3xl" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                <img src={r.img} alt={r.name} className="aspect-[4/3] w-full object-cover" loading="lazy" />
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
                  <a href="#enquire" className="qh-btn-light mt-6 w-full !py-3 text-sm">Enquire for {r.name}</a>
                </div>
              </article>
            ))}
          </div>
          <p className="reveal mt-6 text-xs opacity-60">Sample room names and rates for design — please confirm actual inventory and tariffs before launch.</p>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="qh-frame py-14 lg:py-24">
        <h2 className="reveal qh-h2 max-w-2xl" style={{ color: "var(--qh-pine)" }}>Everything is taken care of.</h2>
        <p className="reveal qh-lead mt-4 max-w-2xl opacity-75">The small things guests mention most in reviews — hot water that is actually hot, food that tastes like home, and staff who sort things before you ask twice.</p>
        <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((a) => (
            <div key={a.title} className="reveal">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl" style={{ backgroundColor: "var(--qh-pine)", color: "#fff" }}>
                <a.icon size={20} />
              </span>
              <h3 className="mt-4 text-xl font-semibold">{a.title}</h3>
              <p className="mt-2 leading-relaxed opacity-75">{a.text}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium opacity-70">
          <span className="inline-flex items-center gap-2"><Wifi size={16} /> Fibre Wi-Fi</span>
          <span className="inline-flex items-center gap-2"><Coffee size={16} /> Breakfast included</span>
          <span className="inline-flex items-center gap-2"><Car size={16} /> Free parking</span>
          <span className="inline-flex items-center gap-2"><Users size={16} /> Family friendly</span>
          <span className="inline-flex items-center gap-2"><Flame size={16} /> Bonfire on request</span>
        </div>
      </section>

      {/* DINING */}
      <section id="dining" className="py-14 lg:py-24" style={{ backgroundColor: "var(--qh-cream-deep)" }}>
        <div className="qh-frame grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal order-2 lg:order-1">
            <h2 className="qh-h2" style={{ color: "var(--qh-pine)" }}>Eat like you live here.</h2>
            <p className="qh-lead mt-4 opacity-80">
              Mornings start with poha, eggs to order and filter coffee on the verandah. Dinners are
              Maharashtrian thalis, dal-khichdi for tired travellers, and — December to March —
              fresh strawberry cream from the farms down the road.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { t: "7:30 – 10", s: "Breakfast" },
                { t: "1 – 3", s: "Lunch (order ahead)" },
                { t: "7:30 – 9:30", s: "Dinner & bonfire" },
              ].map((m) => (
                <div key={m.s} className="rounded-2xl bg-white px-2 py-4" data-ui>
                  <p className="font-display text-lg font-semibold" style={{ color: "var(--qh-pine)" }}>{m.t}</p>
                  <p className="mt-1 text-xs opacity-70">{m.s}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal order-1 grid grid-cols-2 gap-3 lg:order-2">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop" alt="Fresh restaurant-style thali served hot" className="aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop" alt="Evening light over the Sahyadri hills" className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* EXPLORE */}
      <section id="explore" className="qh-frame py-14 lg:py-24">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="qh-h2" style={{ color: "var(--qh-pine)" }}>Step out, then come home.</h2>
            <p className="qh-lead mt-3 max-w-xl opacity-75">Panchgani's viewpoints are all an easy drive; we arrange cabs and pack picnic boxes.</p>
          </div>
          <a href="https://share.google/xoudzc0CYBdhMAta0" target="_blank" rel="noreferrer" className="qh-outline text-sm" style={{ color: "var(--qh-pine)" }}>
            <MapPin size={16} /> Open in Google Maps
          </a>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {NEARBY.map((n) => (
            <div key={n.name} className="reveal rounded-2xl p-6" style={{ backgroundColor: "var(--qh-cream-deep)" }}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{n.name}</h3>
                <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ backgroundColor: "var(--qh-pine)", color: "#fff" }}>{n.dist}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed opacity-75">{n.note}</p>
            </div>
          ))}
        </div>
        <div className="reveal relative mt-8 overflow-hidden rounded-3xl">
          <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1800&auto=format&fit=crop" alt="Mist rolling over layered mountain ridges at dawn" className="aspect-[16/8] w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 flex items-end p-6 sm:p-10" style={{ background: "linear-gradient(to top, rgba(12,24,18,0.7), transparent 60%)" }}>
            <p className="font-display max-w-2xl text-2xl font-medium text-white sm:text-3xl">
              Sydney Point at sunrise, Tableland by evening — back in time for the bonfire.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-14 lg:py-20">
        <div className="qh-frame reveal flex items-end justify-between gap-4">
          <h2 className="qh-h2" style={{ color: "var(--qh-pine)" }}>Postcards from the hills.</h2>
          <a href="https://www.instagram.com/quintehillsresidency/" target="_blank" rel="noreferrer" className="hidden items-center gap-1 text-sm font-semibold sm:inline-flex" style={{ color: "var(--qh-pine)" }}>
            <Camera size={16} /> @quintehillsresidency
          </a>
        </div>
        <div className="qh-frame mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop", alt: "Resort pool surrounded by palms" },
            { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop", alt: "Poolside loungers in morning light" },
            { src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop", alt: "Boutique hotel exterior with garden" },
            { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop", alt: "Golden sunset over open fields" },
          ].map((g) => (
            <img key={g.src} src={g.src} alt={g.alt} className="reveal aspect-square w-full rounded-2xl object-cover" loading="lazy" />
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-14 lg:py-24" style={{ backgroundColor: "var(--qh-pine)", color: "#fff" }}>
        <div className="qh-frame">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="qh-h2">Guests keep the best record.</h2>
              <p className="mt-3 flex items-center gap-2 text-lg opacity-80">
                <span className="flex" aria-label="4.5 out of 5 stars">
                  {[0, 1, 2, 3].map((i) => (<Star key={i} size={18} fill="currentColor" />))}
                  <Star size={18} fill="currentColor" opacity={0.4} />
                </span>
                4.5 across Google, Booking.com & MakeMyTrip
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.quote} className="reveal rounded-3xl p-7" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                <Star size={20} fill="currentColor" className="qh-brass-text" />
                <blockquote className="mt-4 font-display text-xl leading-snug">“{r.quote}”</blockquote>
                <figcaption className="mt-4 text-sm opacity-70">{r.meta}</figcaption>
              </figure>
            ))}
          </div>
          <p className="reveal mt-5 text-xs opacity-60">Representative guest sentiments compiled from public listings — swap with verbatim reviews before launch.</p>
          <div className="reveal mt-8 flex flex-wrap gap-2">
            {OTA_LINKS.map((o) => (
              <a key={o.label} href={o.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff" }}>
                Read reviews on {o.label} <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="qh-frame grid gap-10 py-14 lg:grid-cols-2 lg:py-24">
        <div className="reveal">
          <h2 className="qh-h2" style={{ color: "var(--qh-pine)" }}>Getting here is half the fun.</h2>
          <p className="qh-lead mt-4 opacity-80">The Wai–Panchgani road climbs through windmills and strawberry farms. Come up for the weekend, or make it a slow week.</p>
          <ul className="mt-6 space-y-4">
            {[
              { k: "Pune · 100 km · ~2.5 hrs", v: "Cab or ST bus to Panchgani stand, then a 5-min auto." },
              { k: "Mumbai · 250 km · ~5 hrs", v: "Via the Mumbai–Bengaluru highway through Wai." },
              { k: "Mahabaleshwar · 18 km", v: "A pretty 35-minute drive along the ridge road." },
            ].map((d) => (
              <li key={d.k} className="flex gap-3">
                <Car size={20} className="mt-1 shrink-0" style={{ color: "var(--qh-pine)" }} />
                <div><p className="font-semibold">{d.k}</p><p className="text-sm opacity-70">{d.v}</p></div>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://share.google/xoudzc0CYBdhMAta0" target="_blank" rel="noreferrer" className="qh-btn">Get directions</a>
            <a href="https://www.skyscanner.co.in/hotels/india/panchgani-hotels/quinte-hills-residency/ht-205139074" target="_blank" rel="noreferrer" className="qh-outline" style={{ color: "var(--qh-pine)" }}>Compare prices</a>
          </div>
        </div>
        <div className="reveal overflow-hidden rounded-3xl" style={{ backgroundColor: "var(--qh-cream-deep)" }}>
          <iframe
            title="Map showing Panchgani, Maharashtra"
            src="https://www.openstreetmap.org/export/embed.html?bbox=73.78%2C17.88%2C73.85%2C17.95&layer=mapnik&marker=17.9184%2C73.7987"
            className="h-72 w-full border-0 lg:h-96"
            loading="lazy"
          />
          <div className="flex items-center justify-between gap-3 p-5">
            <p className="flex items-center gap-2 text-sm font-medium"><MapPin size={16} /> Panchgani, Satara, Maharashtra</p>
            <p className="hidden text-xs opacity-60 sm:block">Strawberry country · pleasant all year</p>
          </div>
        </div>
      </section>

      {/* ENQUIRE */}
      <section id="enquire" className="pb-16 lg:pb-24">
        <div className="qh-frame reveal grid gap-8 overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:grid-cols-2" style={{ backgroundColor: "var(--qh-pine-deep)", color: "#fff" }}>
          <div>
            <h2 className="qh-h2">Your hill weekend starts here.</h2>
            <p className="mt-4 max-w-md text-lg opacity-80">
              Tell us your dates and we will call back with availability and the best direct rate.
              Online booking opens soon — meanwhile the platforms below have live rooms.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p className="flex items-center gap-2 opacity-90"><Phone size={16} /> Callback within a few hours, 9am – 9pm</p>
              <p className="flex items-center gap-2 opacity-90"><Instagram size={16} /> Fastest reply: Instagram DM</p>
            </div>
            <details className="mt-6 rounded-2xl p-5 text-sm" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
              <summary className="flex cursor-pointer items-center gap-2 font-semibold">
                <ChevronDown size={16} /> Good to know before you book
              </summary>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 opacity-85">
                <li>Check-in 12 noon · check-out 10:30 am (flexible off-season).</li>
                <li>Couples, families and groups welcome; valid ID at check-in.</li>
                <li>Bonfire and barbecue on request, weather permitting.</li>
                <li>Pets on request — tell us in advance.</li>
              </ul>
            </details>
          </div>
          <EnquiryWidget compact />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-4" style={{ backgroundColor: "var(--qh-pine-deep)", color: "#fff" }}>
        <div className="qh-frame pb-10">
          <p className="font-display text-center font-medium" style={{ fontSize: "clamp(3rem, 12vw, 9rem)", lineHeight: 1, letterSpacing: "-0.03em", opacity: 0.95 }}>
            Quinte Hills
          </p>
          <p className="mt-2 text-center text-sm opacity-70">A boutique hillside residency · Panchgani, Maharashtra</p>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t pt-6 sm:flex-row" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm opacity-80">
              {NAV.map((n) => (<a key={n.href} href={n.href} className="hover:opacity-100">{n.label}</a>))}
            </div>
            <div className="flex items-center gap-2">
              <a href="https://www.instagram.com/quintehillsresidency/" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <Instagram size={18} />
              </a>
              <a href="https://share.google/xoudzc0CYBdhMAta0" target="_blank" rel="noreferrer" aria-label="Directions on Google Maps" className="inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <MapPin size={18} />
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs opacity-50">Photos are illustrative of the Panchgani hillside experience. Room names, rates and review quotes are samples to confirm before launch.</p>
        </div>
      </footer>
    </div>
  );
}
