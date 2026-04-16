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
} from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { trackMetaEvent } from '@/lib/meta-pixel'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=1200&q=80'
const LIFESTYLE_IMAGE = 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=1200&q=80'
const LIFESTYLE_IMAGE_2 = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80'

const categories = [
  { label: 'Collars & Leashes', icon: <PawPrint className="h-5 w-5" strokeWidth={1.5} />, href: '/products' },
  { label: 'Beds & Comfort', icon: <Heart className="h-5 w-5" strokeWidth={1.5} />, href: '/products' },
  { label: 'Toys & Play', icon: <Star className="h-5 w-5" strokeWidth={1.5} />, href: '/products' },
  { label: 'Feeding & Bowls', icon: <Package className="h-5 w-5" strokeWidth={1.5} />, href: '/products' },
]

const socialProof = [
  { value: '10,000+', label: 'Happy Pets' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '50+', label: 'Premium Products' },
]

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    trackMetaEvent('Lead', {
      content_name: 'newsletter_signup',
      status: 'submitted',
    })
    setNewsletterSubmitted(true)
    setNewsletterEmail('')
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[hsl(36,30%,95%)] overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 gap-8 items-center py-16 lg:py-28">
          {/* Text */}
          <div className="space-y-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(171,45%,38%)]/10 text-[hsl(171,45%,38%)] text-xs font-semibold uppercase tracking-wider">
              <PawPrint className="h-3.5 w-3.5" />
              Premium Pet Accessories
            </div>
            <h1 className="text-5xl lg:text-display font-heading font-bold text-balance leading-tight text-foreground">
              Everything Your Pet
              <span className="block text-[hsl(171,45%,38%)]">Deserves</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Thoughtfully designed accessories that keep your furry family members comfortable, stylish, and happy — every single day.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wide bg-[hsl(171,45%,38%)] text-white hover:bg-[hsl(171,45%,30%)] transition-colors"
              >
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-foreground/30 px-8 py-3.5 text-sm font-bold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
              >
                Our Story
              </Link>
            </div>
            {/* Mini social proof */}
            <div className="flex items-center gap-2 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-[hsl(171,45%,38%)]/20 border-2 border-background flex items-center justify-center">
                    <PawPrint className="h-3.5 w-3.5 text-[hsl(171,45%,38%)]" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">10,000+ pet owners</span> trust PawCo
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] bg-muted rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
              <Image
                src={HERO_IMAGE}
                alt="Happy dog with premium PawCo accessories"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Bestseller</p>
                    <p className="font-heading font-bold text-sm text-foreground mt-0.5">Premium Comfort Collar</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-0.5 justify-end">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">4.9 rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-[hsl(171,45%,38%)] text-white py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {socialProof.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-heading font-bold">{stat.value}</p>
                <p className="text-sm text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Quick Links ── */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[hsl(171,45%,38%)] font-semibold mb-2">Browse by Category</p>
            <h2 className="text-h2 font-heading font-bold">Find the Perfect Gear</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-border hover:border-[hsl(171,45%,38%)] hover:bg-[hsl(171,45%,38%)]/5 transition-all duration-200"
              >
                <div className="h-12 w-12 rounded-full bg-[hsl(36,30%,92%)] flex items-center justify-center group-hover:bg-[hsl(171,45%,38%)]/15 transition-colors">
                  <span className="text-[hsl(171,45%,38%)]">{cat.icon}</span>
                </div>
                <span className="text-sm font-semibold text-center leading-tight">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collections ── */}
      {isLoading ? (
        <section className="py-16">
          <div className="container-custom">
            <div className="animate-pulse space-y-4 text-center">
              <div className="h-3 w-20 bg-muted rounded mx-auto" />
              <div className="h-8 w-64 bg-muted rounded mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-muted rounded-2xl animate-pulse" />
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

      {/* ── Shop All CTA ── */}
      <section className="py-20 bg-background">
        <div className="container-custom text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[hsl(171,45%,38%)] font-semibold mb-3">Everything for your pet</p>
          <h2 className="text-h2 font-heading font-bold mb-4">Explore Our Full Collection</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            From cozy beds to playful toys — we have everything your pet needs to live their best life.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold uppercase tracking-wide bg-[hsl(171,45%,38%)] text-white hover:bg-[hsl(171,45%,30%)] transition-colors rounded-sm"
          >
            Shop All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── Brand Philosophy ── */}
      <section className="py-20 bg-[hsl(36,30%,95%)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden relative shadow-xl">
              <Image
                src={LIFESTYLE_IMAGE}
                alt="PawCo lifestyle — happy pets, happy owners"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-6 lg:max-w-md">
              <p className="text-xs uppercase tracking-[0.2em] text-[hsl(171,45%,38%)] font-semibold">Our Philosophy</p>
              <h2 className="text-h2 font-heading font-bold">
                Made for Pets, Loved by Owners
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At PawCo, we believe your pet deserves the very best. Every product we carry is rigorously tested for safety, comfort, and durability — because your furry family member is worth it.
              </p>
              <ul className="space-y-3">
                {[
                  'Non-toxic, pet-safe materials',
                  'Durable construction built to last',
                  'Vet-approved for safety & comfort',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="h-5 w-5 rounded-full bg-[hsl(171,45%,38%)]/15 flex items-center justify-center flex-shrink-0">
                      <PawPrint className="h-3 w-3 text-[hsl(171,45%,38%)]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[hsl(171,45%,38%)] hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Second Lifestyle Section ── */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-6 lg:max-w-md">
              <p className="text-xs uppercase tracking-[0.2em] text-[hsl(171,45%,38%)] font-semibold">Built for Adventure</p>
              <h2 className="text-h2 font-heading font-bold">
                Gear Up for Every Moment
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether it is a walk in the park, a road trip, or a lazy afternoon at home — our accessories are designed to keep up with your pet's life and yours.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wide bg-foreground text-background hover:opacity-90 transition-opacity"
              >
                Browse Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] bg-muted rounded-2xl overflow-hidden relative shadow-xl">
              <Image
                src={LIFESTYLE_IMAGE_2}
                alt="Dogs on an adventure"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-12 border-y bg-[hsl(36,30%,95%)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            <div className="flex items-center gap-4 justify-center text-center md:text-left md:justify-start">
              <div className="h-10 w-10 rounded-full bg-[hsl(171,45%,38%)]/10 flex items-center justify-center flex-shrink-0">
                <Truck className="h-5 w-5 text-[hsl(171,45%,38%)]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-bold">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders over R750</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="h-10 w-10 rounded-full bg-[hsl(171,45%,38%)]/10 flex items-center justify-center flex-shrink-0">
                <RotateCcw className="h-5 w-5 text-[hsl(171,45%,38%)]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-bold">Easy Returns</p>
                <p className="text-xs text-muted-foreground">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end text-center md:text-right">
              <div className="h-10 w-10 rounded-full bg-[hsl(171,45%,38%)]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-[hsl(171,45%,38%)]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-bold">Secure Checkout</p>
                <p className="text-xs text-muted-foreground">256-bit SSL encryption</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-20 bg-[hsl(210,15%,10%)] text-white">
        <div className="container-custom max-w-xl text-center">
          <PawPrint className="h-8 w-8 text-[hsl(171,45%,55%)] mx-auto mb-4" />
          <h2 className="text-h2 font-heading font-bold text-white">Join the PawCo Family</h2>
          <p className="mt-3 text-white/60">
            Get exclusive offers, new arrival alerts, and pet care tips delivered to your inbox.
          </p>
          {newsletterSubmitted ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-[hsl(171,45%,55%)] font-semibold">
              <PawPrint className="h-5 w-5" />
              <span>Welcome to the family!</span>
            </div>
          ) : (
            <form className="mt-8 flex gap-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[hsl(171,45%,55%)] focus:outline-none transition-colors rounded-sm"
              />
              <button
                type="submit"
                className="bg-[hsl(171,45%,38%)] text-white px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[hsl(171,45%,30%)] transition-colors whitespace-nowrap rounded-sm"
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
