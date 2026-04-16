'use client'

import Link from 'next/link'
import { PawPrint, Instagram, Facebook, Mail } from 'lucide-react'
import { clearConsent } from '@/lib/cookie-consent'
import { usePolicies } from '@/hooks/use-policies'

const footerLinks = {
  shop: [
    { label: 'All Products', href: '/products' },
    { label: 'New Arrivals', href: '/products?sort=newest' },
    { label: 'Collections', href: '/collections' },
  ],
  help: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  const { policies } = usePolicies()

  const companyLinks = [
    { label: 'About Us', href: '/about' },
  ]

  if (policies?.privacy_policy) {
    companyLinks.push({ label: 'Privacy Policy', href: '/privacy' })
  }
  if (policies?.terms_of_service) {
    companyLinks.push({ label: 'Terms of Service', href: '/terms' })
  }
  if (policies?.refund_policy) {
    companyLinks.push({ label: 'Refund Policy', href: '/refund-policy' })
  }
  if (policies?.cookie_policy) {
    companyLinks.push({ label: 'Cookie Policy', href: '/cookie-policy' })
  }

  return (
    <footer className="border-t bg-[hsl(210,15%,10%)] text-white">
      <div className="container-custom py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <PawPrint className="h-6 w-6 text-[hsl(171,45%,55%)]" strokeWidth={2} />
              <span className="font-heading text-xl font-bold text-white">PawCo</span>
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Premium accessories for your beloved pets. Crafted with care, designed for joy.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-white/20 hover:border-[hsl(171,45%,55%)] hover:text-[hsl(171,45%,55%)] transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-white/20 hover:border-[hsl(171,45%,55%)] hover:text-[hsl(171,45%,55%)] transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="/contact" aria-label="Email" className="p-2 rounded-full border border-white/20 hover:border-[hsl(171,45%,55%)] hover:text-[hsl(171,45%,55%)] transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/40">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/40">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/40">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} PawCo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                clearConsent()
                window.dispatchEvent(new Event('manage-cookies'))
              }}
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              Manage Cookies
            </button>
            <span className="text-xs text-white/30">Powered by Amboras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
