'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowRight,
  Truck,
  Shield,
  RotateCcw,
  Star,
  PawPrint,
  Heart,
  Package,
  Leaf,
} from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { trackMetaEvent } from '@/lib/meta-pixel'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=1200&q=80'
const LIFESTYLE_IMAGE = 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=1200&q=80'
const LIFESTYLE_IMAGE_2 = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80'

// ── Brand Palette ──────────────────────────────────────────────
// Cream:       #f7f2e8
// Warm brown:  #3b2f1e
// Earthy green:#4a6741
// Light green: #d4e6c3
// Sand:        #c8b89a
// Muted text:  #7a6652
// ──────────────────────────────────────────────────────────────

const categories = [
  { label: 'Collars & Leashes', icon: <PawPrint className="h-5 w-5" strokeWidth={1.5} />, href: '/products' },
  { label: 'Beds & Comfort',    icon: <Heart    className="h-5 w-5" strokeWidth={1.5} />, href: '/products' },
  { label: 'Toys & Play',       icon: <Star     className="h-5 w-5" strokeWidth={1.5} />, href: '/products' },
  { label: 'Feeding & Bowls',   icon: <Package  className="h-5 w-5" strokeWidth={1.5} />, href: '/products' },
]

const stats = [
  { value: '10,000+', label: 'Happy Pets' },
  { value: '4.9 / 5', label: 'Average Rating' },
  { value: '98%',     label: 'Satisfaction' },
  { value: '50+',     label: 'Natural Products' },
]

const promises = [
  'Non-toxic, pet-safe natural materials',
  'Sustainably sourced & eco-friendly',
  'Vet-approved for safety & comfort',
]

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail]       = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    trackMetaEvent('Lead', { content_name: 'newsletter_signup', status: 'submitted' })
    setNewsletterSubmitted(true)
    setNewsletterEmail('')
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#f7f2e8] overflow-hidden">
        {/* Soft blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#d4e6c3]/50 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-[#c8b89a]/30 blur-3xl" />

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-28">

          {/* ─ Copy ─ */}
          <div className="space-y-7 animate-fade-in-up">
            {/* Eco badge */}
            <span className="inline-flex items-center gap-2 bg-[#d4e6c3] text-[#3b5234] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              <Leaf className="h-3.5 w-3.5" />
              Eco-Friendly &amp; Pet-Safe
            </span>

            <h1 className="text-5xl lg:text-display font-heading font-bold leading-tight text-balance text-[#3b2f1e]">
              Natural Goods
              <span className="block text-[#4a6741]">for Your Whole Pack.</span>
            </h1>

            <p className="text-lg text-[#7a6652] max-w-md leading-relaxed">
              Wholesome accessories crafted from earth-friendly materials — because your furry family deserves comfort without compromise.
            </p>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-[#d4e6c3] border-2 border-[#f7f2e8] flex items-center justify-center"
                  >
                    <PawPrint className="h-3.5 w-3.5 text-[#4a6741]" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#7a6652]">
                <span className="font-bold text-[#3b2f1e]">10,000+ pet parents</span> love our products
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-1">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#4a6741] text-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide hover:bg-[#3b5234] transition-colors rounded-md shadow-md"
                prefetch={true}
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-[#4a6741] text-[#4a6741] px-8 py-3.5 text-sm font-bold uppercase tracking-wide hover:bg-[#4a6741] hover:text-white transition-colors rounded-md"
                prefetch={true}
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* ─ Image ─ */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-[#e8dfc8]">
              <Image
                src={HERO_IMAGE}
                alt="Happy dog with natural PawCo accessories"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Floating info card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-[#7a6652] uppercase tracking-wider font-semibold">🌿 Bestseller</p>
                    <p className="text-sm font-bold text-[#3b2f1e] mt-0.5">Natural Hemp Collar</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-0.5 justify-end">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-[#7a6652] mt-0.5">4.9 • 420 reviews</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative circle */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[#d4e6c3] -z-10" />
            <div className="absolute -top-6 -left-6 h-20 w-20 rounded-full bg-[#c8b89a]/50 -z-10" />
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────── */}
      <section className="bg-[#4a6741] text-white py-9">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/20">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4">
                <p className="text-2xl font-heading font-bold">{stat.value}</p>
                <p className="text-sm text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ──────────────────────────────────────── */}
      <section className="py-16 bg-[#f7f2e8]">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#4a6741] font-bold mb-2">Shop by Category</p>
            <h2 className="text-h2 font-heading font-bold text-[#3b2f1e]">Find the Perfect Gear</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-[#e2d5b0] bg-white hover:border-[#4a6741] hover:bg-[#d4e6c3]/20 transition-all duration-200"
              >
                <div className="h-12 w-12 rounded-full bg-[#d4e6c3] flex items-center justify-center group-hover:bg-[#4a6741]/20 transition-colors">
                  <span className="text-[#4a6741]">{cat.icon}</span>
                </div>
                <span className="text-sm font-bold text-[#3b2f1e] text-center leading-tight">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS ─────────────────────────────────────── */}
      {isLoading ? (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="animate-pulse space-y-4 text-center">
              <div className="h-3 w-20 bg-[#d4e6c3] rounded mx-auto" />
              <div className="h-8 w-64 bg-[#e8dfc8] rounded mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-[#e8dfc8] rounded-2xl animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      ) : collections && collections.length > 0 ? (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </>
      ) : null}

      {/* ── SHOP ALL CTA ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4a6741] font-bold mb-3">
            Everything for your pet
          </p>
          <h2 className="text-h2 font-heading font-bold text-[#3b2f1e] mb-4">
            Explore Our Full Collection
          </h2>
          <p className="text-[#7a6652] max-w-md mx-auto mb-8">
            From cozy beds to playful toys — all made with natural, earth-friendly materials your pet will love.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold uppercase tracking-wide bg-[#4a6741] text-white hover:bg-[#3b5234] transition-colors rounded-md shadow-md"
          >
            Shop All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── BRAND PHILOSOPHY ────────────────────────────────── */}
      <section className="py-20 bg-[#f7f2e8]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-xl">
              <Image
                src={LIFESTYLE_IMAGE}
                alt="Happy dog — wholesome pet life"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-6 lg:max-w-md">
              <p className="text-xs uppercase tracking-[0.2em] text-[#4a6741] font-bold">
                Our Philosophy
              </p>
              <h2 className="text-h2 font-heading font-bold text-[#3b2f1e]">
                Good for Your Pet.<br /> Good for the Earth.
              </h2>
              <p className="text-[#7a6652] leading-relaxed">
                We believe caring for your pet and caring for the planet go hand in hand. Every product is made from sustainable, non-toxic materials — gentle on your furry friend and kind to the world they play in.
              </p>
              <ul className="space-y-3">
                {promises.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#3b2f1e]">
                    <div className="h-6 w-6 rounded-full bg-[#d4e6c3] flex items-center justify-center flex-shrink-0">
                      <Leaf className="h-3 w-3 text-[#4a6741]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#4a6741] hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADVENTURE SECTION ───────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-6 lg:max-w-md">
              <p className="text-xs uppercase tracking-[0.2em] text-[#4a6741] font-bold">
                Built for Every Moment
              </p>
              <h2 className="text-h2 font-heading font-bold text-[#3b2f1e]">
                From Trail Walks to Couch Cuddles.
              </h2>
              <p className="text-[#7a6652] leading-relaxed">
                Whether it is a hike through the woods or a lazy Sunday at home — our gear is made to keep up with your pet's adventures, big and small.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wide bg-[#3b2f1e] text-white hover:opacity-90 transition-opacity rounded-md"
              >
                Browse Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] rounded-3xl overflow-hidden relative shadow-xl">
              <Image
                src={LIFESTYLE_IMAGE_2}
                alt="Dogs on an outdoor adventure"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────── */}
      <section className="py-12 border-y border-[#e2d5b0] bg-[#f7f2e8]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Truck className="h-5 w-5" strokeWidth={1.5} />, title: 'Free Shipping', sub: 'On orders over R750' },
              { icon: <RotateCcw className="h-5 w-5" strokeWidth={1.5} />, title: 'Easy Returns',  sub: '30-day return policy' },
              { icon: <Shield className="h-5 w-5" strokeWidth={1.5} />,   title: 'Secure Checkout', sub: '256-bit SSL encryption' },
            ].map(({ icon, title, sub }) => (
              <div key={title} className="flex items-center gap-4 justify-center">
                <div className="h-11 w-11 rounded-full bg-[#d4e6c3] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#4a6741]">{icon}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#3b2f1e]">{title}</p>
                  <p className="text-xs text-[#7a6652]">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ──────────────────────────────────────── */}
      <section className="py-20 bg-[#3b2f1e] text-white">
        <div className="container-custom max-w-xl text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#d4e6c3]/20 mb-5">
            <PawPrint className="h-7 w-7 text-[#d4e6c3]" />
          </div>
          <h2 className="text-h2 font-heading font-bold text-white">
            Join the Pack 🐾
          </h2>
          <p className="mt-3 text-white/60 leading-relaxed">
            Get exclusive offers, new arrival alerts, and wholesome pet care tips — straight to your inbox.
          </p>
          {newsletterSubmitted ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-[#d4e6c3] font-semibold">
              <Leaf className="h-5 w-5" />
              <span>Welcome to the pack! 🌿</span>
            </div>
          ) : (
            <form className="mt-8 flex gap-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#d4e6c3] focus:outline-none transition-colors rounded-md"
              />
              <button
                type="submit"
                className="bg-[#4a6741] text-white px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#3b5234] transition-colors whitespace-nowrap rounded-md"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
