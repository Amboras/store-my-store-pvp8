'use client'

import { useState } from 'react'
import { X, Truck } from 'lucide-react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-[hsl(171,45%,38%)] text-white">
      <div className="container-custom flex items-center justify-center gap-2 py-2.5 text-sm font-medium tracking-wide">
        <Truck className="h-3.5 w-3.5 flex-shrink-0" />
        <p>Free shipping on orders over R750 &mdash; Happy pets, happy you</p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
