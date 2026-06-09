"use client"

import { StartFlag } from "@/components/xp-icons"

type Props = {
  showBack: boolean
  onBack: () => void
  onStart: () => void
}

export function XpPhoneNavBar({ showBack, onBack, onStart }: Props) {
  return (
    <div className="xp-phone-navbar flex shrink-0 items-center justify-between px-4 py-2">
      <button
        type="button"
        onClick={onBack}
        disabled={!showBack}
        className={`flex h-10 w-10 items-center justify-center rounded-sm font-tahoma text-[20px] text-white ${
          showBack ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-label="Back"
      >
        ←
      </button>

      <button
        type="button"
        onClick={onStart}
        className="xp-phone-start-btn flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#2a7a2a] shadow-md"
        aria-label="Start"
      >
        <StartFlag size={22} />
      </button>

      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-sm font-tahoma text-[18px] text-white opacity-80"
        aria-label="Search"
      >
        🔍
      </button>
    </div>
  )
}
