"use client"

import { useEffect, useState } from "react"

export function XpPhoneStatusBar() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      )
    update()
    const t = setInterval(update, 1000 * 30)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="xp-phone-status flex shrink-0 items-center justify-between px-3 py-1.5 font-tahoma text-[11px] text-white">
      <span className="font-bold tracking-wide">XP Mobile</span>
      <div className="flex items-center gap-2">
        <span aria-hidden="true">📶</span>
        <span aria-hidden="true">🔋</span>
        <span>{time}</span>
      </div>
    </div>
  )
}
