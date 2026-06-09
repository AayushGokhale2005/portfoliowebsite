"use client"

import type React from "react"

type Props = {
  label: string
  selected: boolean
  onSelect: () => void
  onOpen: () => void
  icon: React.ReactNode
}

export function DesktopIcon({ label, selected, onSelect, onOpen, icon }: Props) {
  return (
    <button
      type="button"
      onClick={onSelect}
      onDoubleClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter") onOpen()
      }}
      className="group flex w-[88px] flex-col items-center gap-1 rounded px-1 py-1.5 text-center outline-none"
      aria-label={`${label} folder`}
    >
      <span
        className={`flex h-12 w-12 items-center justify-center ${
          selected ? "rounded-sm bg-[#0a246a]/40 ring-1 ring-[#3f8cf3]" : ""
        }`}
      >
        {icon}
      </span>
      <span
        className={`xp-icon-label max-w-full break-words font-tahoma text-[12px] leading-tight text-white ${
          selected ? "xp-selected-label rounded-[1px] px-0.5" : ""
        }`}
      >
        {label}
      </span>
    </button>
  )
}
