import { useMemo, useState } from "react";
import { CalendarDays, ExternalLink, Instagram, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { useReveal } from "./use-reveal";

export const WHATSAPP_NUMBER = "919933998880";

function guestsLabel(g: string) {
  if (g === "2") return "2 guests";
  if (g === "4") return "3 – 4 guests";
  if (g === "6") return "5 – 6 guests";
  return "Group · 7+ guests";
}

const OTA_LINKS = [
  { label: "Booking.com", href: "https://www.booking.com/hotel/in/quinte-hills-residency.html" },
  { label: "MakeMyTrip", href: "https://www.makemytrip.com/hotels/quinte_hills_residency-details-mahabaleshwar.html" },
  { label: "Goibibo", href: "https://www.goibibo.com/hotels/quinte-hills-residency-hotel-in-mahabaleshwar-5037086730120794325/" },
  { label: "Agoda", href: "https://www.agoda.com/en-in/quinte-hills-residency-h25937528/hotel/panchgani-in.html" },
  { label: "Tripadvisor", href: "https://www.tripadvisor.in/Hotel_Review-g297653-d34105839-Reviews-Quinte_Hills_Residency-Panchgani_Satara_District_Maharashtra.html" },
];

export default function Contact() {
  useReveal();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [missing, setMissing] = useState(false);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const d = Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000);
    return Number.isFinite(d) && d > 0 ? d : 0;
  }, [checkIn, checkOut]);

  const waHref = useMemo(() => {
    const lines = [
      "Hi Quinte Hills! I'd like to enquire about a stay.",
      `Name: ${name.trim() || "-"}`,
      `Phone: ${phone.trim() || "-"}`,
      `Check-in: ${checkIn || "flexible"}`,
      `Check-out: ${checkOut || "flexible"}`,
      `Guests: ${guestsLabel(guests)}`,
    ];
    if (nights > 0) lines.push(`Nights: ${nights}`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [name, phone, checkIn, checkOut, guests, nights]);

  const handleEnquire = () => {
    if (!name.trim() || !phone.trim()) {
      setMissing(true);
      return;
    }
    setMissing(false);
    window.open(waHref, "_blank", "noopener");
    setSent(true);
  };

  return (
    <section id="contact" className="pb-16 lg:pb-24">
      <div
        className="qh-frame reveal grid gap-8 p-8 sm:p-12 lg:grid-cols-2"
        style={{ backgroundColor: "var(--qh-pine-deep)", color: "#fff", borderRadius: "2rem" }}
      >
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
          <div className="mt-6 flex flex-wrap gap-2">
            {OTA_LINKS.map((o) => (
              <a
                key={o.label}
                href={o.href}
                target="_blank"
                rel="noreferrer"
                className="qh-chip inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold"
                style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff" }}
              >
                Book on {o.label} <ExternalLink size={14} />
              </a>
            ))}
          </div>
          <details className="mt-6 rounded-2xl p-5 text-sm" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
            <summary className="flex cursor-pointer items-center gap-2 font-semibold">
              <ChevronDown size={16} /> Good to know before you book
            </summary>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 opacity-85">
              <li>Check-in 12 noon · check-out 10:30 am (flexible off-season).</li>
              <li>Couples, families and groups welcome; valid ID at check-in.</li>
              <li>Bonfire on request, weather permitting.</li>
              <li>Pets on request — tell us in advance.</li>
            </ul>
          </details>
        </div>
        <div className="w-full rounded-3xl p-5 shadow-xl sm:p-6" style={{ backgroundColor: "#fff", color: "var(--qh-ink)" }} data-ui>
          <p className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--qh-pine)" }}>
            <CalendarDays size={16} /> Plan your stay
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
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
          <div className="mt-3 grid grid-cols-2 gap-3">
            <label className="block">
              <span className="text-xs font-medium opacity-70">Your name</span>
              <input
                type="text"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                placeholder="e.g. Aarav"
                className="mt-1 w-full rounded-xl border px-3 py-2.5 text-sm"
                style={{ borderColor: "rgba(0,0,0,0.15)" }}
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium opacity-70">Phone number</span>
              <input
                type="tel"
                value={phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                placeholder="e.g. 98765 43210"
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
              {nights} {nights === 1 ? "night" : "nights"} selected — we will confirm the rate on callback.
            </p>
          ) : (
            <p className="mt-3 text-xs opacity-60">Pick dates to start your enquiry.</p>
          )}
          {!sent ? (
            <>
              <button type="button" className="qh-btn mt-4 w-full" onClick={handleEnquire}>
                <MessageCircle size={18} /> Enquire on WhatsApp
              </button>
              {missing && (
                <p className="mt-2 rounded-xl px-3 py-2 text-center text-xs font-medium" style={{ backgroundColor: "var(--qh-cream-deep)" }}>
                  Please add your name and phone number so we can call you back.
                </p>
              )}
            </>
          ) : (
            <p className="mt-4 rounded-xl px-3 py-3 text-center text-sm font-medium" style={{ backgroundColor: "var(--qh-pine)", color: "#fff" }}>
              Opening WhatsApp with your enquiry — if it didn't open, <a href={waHref} target="_blank" rel="noreferrer" className="underline">tap here</a>.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
