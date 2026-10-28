import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { company, divisions, navLinks, projects, services, team, values } from "@/lib/site";

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold tracking-[0.25em] text-brand-light uppercase">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-steel">{intro}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        {/* Hero */}
        <section className="blueprint-grid relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,107,255,0.35),transparent_60%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-light/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-brand-light uppercase">
                <span className="h-2 w-2 rounded-full bg-safety" />
                Harare, Zimbabwe
              </p>
              <h1 className="mt-6 font-display text-5xl leading-[1.05] font-bold tracking-wide uppercase sm:text-6xl lg:text-7xl">
                <span className="steel-text">Engineering</span>
                <br />
                <span className="steel-text">Solutions</span>
              </h1>
              <p className="mt-5 font-display text-xl tracking-wide text-white uppercase sm:text-2xl">
                Built on quality. <span className="text-gradient">Powered with excellence.</span>
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
                We provide end-to-end engineering solutions with a focus on project delivery, quality workmanship and
                durable results, from the workshop floor to the finished plant.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-light"
                >
                  Get a Free Quote <Icon name="arrow" className="h-4 w-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-md border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  Our Services
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              <div className="animate-spin-slow absolute -inset-6 rounded-full border-2 border-dashed border-brand-light/25" />
              <div className="absolute inset-6 rounded-full bg-brand/30 blur-3xl" />
              <Image
                src="/images/logo.jpg"
                alt="Ecstatic Engineering logo"
                width={1280}
                height={1280}
                priority
                className="relative rounded-full shadow-2xl shadow-black/60"
              />
            </div>
          </div>
        </section>

        {/* Divisions strip */}
        <section className="border-y border-white/10 bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-6 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-display text-lg font-semibold tracking-widest uppercase sm:text-xl">
              {divisions.map((d, i) => (
                <li key={d} className="flex items-center gap-6">
                  {i > 0 && <span className="hidden text-brand-light sm:inline">|</span>}
                  {d}
                </li>
              ))}
            </ul>
            <p className="font-display text-lg tracking-wide text-white italic">
              One Company. <span className="text-sky">Endless Solutions.</span>
            </p>
          </div>
        </section>

        {/* About / why choose us */}
        <section id="about" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold tracking-[0.25em] text-brand-light uppercase">Why choose us</p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-wide uppercase sm:text-4xl">
                  We engineer <span className="text-gradient">your vision</span> into reality
                </h2>
                <p className="mt-5 leading-relaxed text-steel">
                  Ecstatic Engineering Incorporated is a multidisciplinary engineering company serving mining,
                  manufacturing, agro-processing and commercial clients. Our mechanical, fabrication, construction and
                  maintenance teams work under one roof, so you get a single accountable partner from design through
                  to handover.
                </p>
                <p className="mt-4 leading-relaxed text-steel">
                  Quality workmanship, effective and durable solutions, and a results-driven approach. That is the
                  standard on every job we take on.
                </p>
                <p className="mt-8 font-display text-xl tracking-wide uppercase">
                  Strong foundations. Smart engineering. <span className="text-safety">Lasting impact.</span>
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {values.map((v, i) => (
                  <li
                    key={v.title}
                    className={`rounded-xl border border-white/10 bg-navy-900/70 p-6 transition hover:border-brand-light/40 ${
                      i === values.length - 1 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/15 text-brand-light">
                      <Icon name={v.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-wide uppercase">{v.title}</h3>
                    <p className="mt-1 text-sm text-steel">{v.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="blueprint-grid border-y border-white/10 bg-navy-900 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Our <span className="text-gradient">Services</span>
                </>
              }
              intro="Five specialist divisions, one team. Whatever your plant or project needs, we have the people and equipment to deliver it."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="group overflow-hidden rounded-xl border border-white/10 bg-navy-950/80 transition hover:-translate-y-1 hover:border-brand-light/40 hover:shadow-xl hover:shadow-brand/10"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 font-display text-xl font-bold tracking-wide uppercase">
                      {s.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-steel">{s.summary}</p>
                    <ul className="mt-5 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Icon name="check" className="h-4 w-4 shrink-0 text-sky" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
              <div className="flex flex-col justify-center rounded-xl bg-gradient-to-br from-brand to-navy-700 p-8">
                <h3 className="font-display text-2xl font-bold tracking-wide uppercase">Have a project in mind?</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Talk to our engineers about scope, budget and timelines. We respond to every enquiry within one
                  working day.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy-900 transition hover:bg-steel"
                >
                  Request a Quote <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our work. Our pride."
              title={
                <>
                  Featured <span className="text-gradient">Projects</span>
                </>
              }
              intro="Serving industry, building nations and delivering lasting impact across the region."
            />
            <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-6">
              {projects.map((p, i) => (
                <li
                  key={p.title}
                  className={`group relative overflow-hidden rounded-xl border border-white/10 ${
                    i < 2 ? "aspect-[4/3] md:col-span-3" : "aspect-[4/3] md:col-span-2"
                  } ${i === projects.length - 1 ? "col-span-2 md:col-span-2" : ""}`}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-4 font-display text-base font-semibold tracking-wider uppercase sm:text-lg">
                    {p.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="border-y border-white/10 bg-navy-900 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Leadership"
              title={
                <>
                  Our <span className="text-gradient">Team</span>
                </>
              }
              intro="Skilled professionals dedicated to your success, led by people who have built their careers on the workshop floor and on site."
            />
            <div className="mt-14 flex flex-wrap justify-center gap-6">
              {team.map((m) => (
                <article
                  key={m.name}
                  className="w-full max-w-md rounded-2xl border border-white/10 bg-navy-950/80 p-8 text-center"
                >
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-brand to-navy-700 font-display text-4xl font-bold ring-4 ring-brand-light/30">
                    {m.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-wide uppercase">{m.name}</h3>
                  <p className="mt-1 text-sm font-semibold tracking-wider text-safety uppercase">{m.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-steel">{m.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Get in touch"
              title={
                <>
                  Let&apos;s build <span className="text-gradient">together</span>
                </>
              }
              intro="Call, email or visit our Graniteside workshop. Or send your project details and we'll come back with a quote."
            />
            <div className="mt-14 grid gap-8 lg:grid-cols-5">
              <div className="space-y-4 lg:col-span-2">
                <ContactCard icon="phone" title="Phone">
                  {company.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-white">
                      {p}
                    </a>
                  ))}
                </ContactCard>
                <ContactCard icon="mail" title="Email">
                  {company.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block break-all hover:text-white">
                      {e}
                    </a>
                  ))}
                </ContactCard>
                <ContactCard icon="pin" title="Address">
                  {company.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </ContactCard>
                <ContactCard icon="clock" title="Office hours">
                  {company.hours.map((h) => (
                    <span key={h.days} className="flex justify-between gap-4">
                      <span>{h.days}</span>
                      <span className="text-white">{h.time}</span>
                    </span>
                  ))}
                </ContactCard>
              </div>
              <div className="rounded-2xl border border-white/10 bg-navy-900/80 p-6 sm:p-8 lg:col-span-3">
                <h3 className="font-display text-2xl font-bold tracking-wide uppercase">Request a quote</h3>
                <p className="mt-1 mb-6 text-sm text-steel">Fields marked * are required.</p>
                <ContactForm />
              </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Map to Ecstatic Engineering, 14 Kelvin Road North, Graniteside, Harare"
                src="https://www.google.com/maps?q=14+Kelvin+Road+North,+Graniteside,+Harare&output=embed"
                className="h-80 w-full grayscale invert-[0.9] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-navy-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/logo.jpg" alt="" width={56} height={56} className="rounded-full" />
              <span className="font-display text-xl font-bold tracking-wide uppercase">
                Ecstatic
                <span className="block text-xs font-medium tracking-[0.3em] text-brand-light">Engineering</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-steel">
              Mechanical · Fabrication · Construction · Maintenance. One company, endless solutions.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold tracking-[0.2em] text-brand-light uppercase">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-steel">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold tracking-[0.2em] text-brand-light uppercase">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-steel">
              <li>{company.phones[0]}</li>
              <li className="break-all">{company.emails[0]}</li>
              <li>{company.address.slice(0, 2).join(", ")}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-steel/70">
          © {new Date().getFullYear()} {company.legalName}. All rights reserved.
        </div>
      </footer>
    </>
  );
}

function ContactCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-xl border border-white/10 bg-navy-900/70 p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand-light">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div className="min-w-0 text-sm text-steel">
        <h3 className="mb-1 font-display text-base font-semibold tracking-wide text-white uppercase">{title}</h3>
        {children}
      </div>
    </div>
  );
}
