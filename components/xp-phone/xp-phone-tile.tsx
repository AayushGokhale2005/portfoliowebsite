"use client"

import type { ReactNode } from "react"

type TileSize = "square" | "wide" | "large"

type Props = {
  label: string
  subtitle?: string
  icon?: ReactNode
  size?: TileSize
  accent?: "blue" | "green" | "gold" | "silver" | "orange"
  onClick?: () => void
  href?: string
}

const accentClass: Record<NonNullable<Props["accent"]>, string> = {
  blue: "xp-phone-tile-blue",
  green: "xp-phone-tile-green",
  gold: "xp-phone-tile-gold",
  silver: "xp-phone-tile-silver",
  orange: "xp-phone-tile-orange",
}

const sizeClass: Record<TileSize, string> = {
  square: "col-span-1 aspect-square",
  wide: "col-span-2 aspect-[2/1]",
  large: "col-span-2 aspect-square",
}

export function XpPhoneTile({
  label,
  subtitle,
  icon,
  size = "square",
  accent = "blue",
  onClick,
  href,
}: Props) {
  const className = `xp-phone-tile ${accentClass[accent]} ${sizeClass[size]} flex flex-col justify-end p-3 text-left`

  const content = (
    <>
      {icon && <div className="mb-auto opacity-90">{icon}</div>}
      <div>
        <p className="font-tahoma text-[15px] font-bold leading-tight text-white drop-shadow-sm">
          {label}
        </p>
        {subtitle && (
          <p className="mt-0.5 font-tahoma text-[11px] leading-snug text-white/85">{subtitle}</p>
        )}
      </div>
    </>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  )
}
