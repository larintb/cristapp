import Image from "next/image";
import { Reveal } from "./reveal";

const WHATSAPP = "528682112874";

type Product = {
  slug: string;
  name: string;
  subtitle: string;
  size: string;
  price: number;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    slug: "serum-retinoico",
    name: "Sérum Retinoico",
    subtitle: "Renovación celular",
    size: "30 ml",
    price: 580,
    description:
      "Tratamiento de noche con retinol que afina la textura, atenúa líneas finas y unifica el tono. Para una piel renovada y luminosa.",
    image: "/products/serum-retinoico.jpeg",
  },
  {
    slug: "gel-colageno-elastina",
    name: "Gel Colágeno y Elastina",
    subtitle: "Firmeza y elasticidad",
    size: "50 ml / 1.69 oz",
    price: 520,
    description:
      "Gel ligero de absorción rápida que aporta firmeza, hidratación profunda y suavidad. Ideal como base previa a tu crema o protector.",
    image: "/products/gel-colageno-elastina.jpeg",
  },
  {
    slug: "dermo-limpiador",
    name: "Dermolimpiador",
    subtitle: "Leche desmaquillante",
    size: "125 ml / 4.22 oz",
    price: 320,
    description:
      "Leche limpiadora suave que retira maquillaje, protector solar y residuos sin resecar. Deja la piel limpia, cómoda y equilibrada.",
    image: "/products/dermo-limpiador.jpeg",
  },
  {
    slug: "pantalla-solar",
    name: "Pantalla Solar Facial",
    subtitle: "FPS 50 · Uso diario",
    size: "100 ml / 3.38 oz",
    price: 450,
    description:
      "Protección amplia contra UVA/UVB con acabado sedoso, no graso. El paso indispensable para prevenir manchas y signos de la edad.",
    image: "/products/pantalla-solar.jpeg",
  },
  {
    slug: "espuma-madura",
    name: "Espuma Limpiadora",
    subtitle: "Pieles maduras",
    size: "160 ml / 5.41 oz",
    price: 360,
    description:
      "Espuma cremosa que limpia con delicadeza preservando la hidratación natural. Formulada para pieles maduras y sensibles.",
    image: "/products/espuma-madura.jpeg",
  },
  {
    slug: "espuma-acne",
    name: "Espuma Limpiadora",
    subtitle: "Piel con acné",
    size: "160 ml / 5.41 oz",
    price: 360,
    description:
      "Limpieza profunda en formato espuma para piel mixta a grasa. Ayuda a controlar imperfecciones sin resecar ni irritar.",
    image: "/products/espuma-acne.jpeg",
  },
];

function priceLabel(n: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);
}

function waLink(p: Product) {
  const msg = `Hola Cristina, me interesa el producto "${p.name} — ${p.subtitle}" (${priceLabel(
    p.price,
  )}). ¿Podrías darme más información?`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

export default function Home() {
  return (
    <div className="flex-1">
      <Header />
      <Hero />
      <Catalog />
      <About />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-beige/60 bg-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl font-semibold tracking-wide text-ink">
            Cristina
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.35em] text-gold sm:inline">
            Yo te cuido
          </span>
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#catalogo" className="hidden text-ink/70 hover:text-ink sm:inline">
            Catálogo
          </a>
          <a href="#nosotros" className="hidden text-ink/70 hover:text-ink sm:inline">
            Filosofía
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-4 py-2 text-xs font-medium uppercase tracking-wider text-cream-soft transition hover:bg-rose-deep"
          >
            Contactar
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(230,184,176,0.35)_0%,transparent_70%),radial-gradient(50%_50%_at_20%_80%,rgba(168,133,91,0.18)_0%,transparent_70%)]"
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-8 bg-gold/60" />
            크리스티나 · Skincare
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
            Rituales de piel,
            <br />
            <em className="font-serif italic text-rose-deep">hechos con cuidado.</em>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
            Una línea pensada para acompañar tu rutina diaria: limpieza
            consciente, hidratación esencial y protección sin compromisos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#catalogo"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium uppercase tracking-wider text-cream-soft transition hover:bg-rose-deep"
            >
              Ver catálogo
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium uppercase tracking-wider text-ink transition hover:border-ink hover:bg-ink/5"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-rose/20 blur-2xl" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-beige bg-cream-soft shadow-[0_30px_80px_-30px_rgba(58,42,31,0.35)]">
            <Image
              src="/products/gel-colageno-elastina.jpeg"
              alt="Línea Cristina — Yo te cuido"
              fill
              priority
              sizes="(min-width: 768px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rotate-[-4deg] rounded-2xl bg-cream-soft px-5 py-3 shadow-lg sm:block">
            <p className="font-serif text-xs uppercase tracking-[0.3em] text-gold">
              Edición 2026
            </p>
            <p className="font-serif text-lg text-ink">6 productos esenciales</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Catalog() {
  return (
    <section id="catalogo" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-14 flex items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-gold">
            — Catálogo
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            Nuestros esenciales
          </h2>
        </div>
        <p className="hidden max-w-xs text-sm leading-relaxed text-ink/60 md:block">
          Cada fórmula está pensada para integrarse en tu rutina de día y noche
          con suavidad y resultados visibles.
        </p>
      </div>
      <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex flex-col">
      <div className="relative mb-5 aspect-[3/4] overflow-hidden rounded-2xl bg-cream-soft">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-rose/10 via-transparent to-beige/40"
        />
        <Image
          src={p.image}
          alt={`${p.name} — ${p.subtitle}`}
          fill
          sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-cream-soft/90 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-ink/70 backdrop-blur">
          {p.size}
        </span>
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <h3 className="font-serif text-2xl leading-tight text-ink">{p.name}</h3>
          <p className="text-sm italic text-rose-deep">{p.subtitle}</p>
        </div>
        <p className="font-serif text-xl text-ink">{priceLabel(p.price)}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.description}</p>
      <a
        href={waLink(p)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center justify-between rounded-full border border-ink/15 px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ink transition hover:border-ink hover:bg-ink hover:text-cream-soft"
      >
        Comprar por WhatsApp
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-6-6m6 6-6 6" />
        </svg>
      </a>
    </article>
  );
}

function About() {
  return (
    <section id="nosotros" className="border-y border-beige/60 bg-cream-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            — Filosofía
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-ink">
            Cuidar tu piel también es cuidarte a vos.
          </h2>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-ink/75 md:col-span-2">
          <p>
            Cristina nace de la convicción de que un buen ritual de skincare no
            debería ser complicado. Cada producto cumple un rol específico —
            limpiar, hidratar, proteger, renovar — con fórmulas pensadas para
            distintos tipos de piel y momentos del día.
          </p>
          <p>
            Trabajamos con presentaciones íntimas, sin excesos: lo justo para que
            puedas armar tu rutina y sentir la diferencia. Si tenés dudas sobre
            qué producto te conviene, escribinos: te ayudamos a elegirlo.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-6 border-t border-beige/60 pt-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-2xl text-ink">Cristina</p>
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            Yo te cuido · 크리스티나
          </p>
        </div>
        <div className="text-sm text-ink/60">
          <p>
            Pedidos y consultas:{" "}
            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp +52 868 211 2874
            </a>
          </p>
          <p className="mt-1 text-xs text-ink/40">
            © {new Date().getFullYear()} Cristina · Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
