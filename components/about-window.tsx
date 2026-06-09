"use client"

import { NotepadIcon } from "@/components/xp-icons"
import { AboutContent } from "@/components/content/about-content"
import { XpWindowShell } from "@/components/xp-window-shell"

type Props = {
  zIndex: number
  initialOffset: number
  active: boolean
  onFocus: () => void
  onClose: () => void
}

export function AboutWindow({ zIndex, initialOffset, active, onFocus, onClose }: Props) {
  const menuBar = (
    <div className="flex shrink-0 items-center gap-3 border-b border-[#aca899] bg-[#ece9d8] px-2 py-0.5 font-tahoma text-[11px] text-black">
      {["File", "Edit", "Format", "View", "Help"].map((m) => (
        <span key={m}>
          <span className="underline">{m.charAt(0)}</span>
          {m.slice(1)}
        </span>
      ))}
    </div>
  )

  return (
    <XpWindowShell
      title="About Me.txt - Notepad"
      icon={<NotepadIcon size={16} />}
      zIndex={zIndex}
      initialOffset={initialOffset}
      active={active}
      onFocus={onFocus}
      onClose={onClose}
      menuBar={menuBar}
      statusLeft={`Ln 1, Col 1`}
      statusRight="Windows (CRLF)"
      defaultWidth="min(640px, 90vw)"
      defaultHeight="min(480px, 72vh)"
    >
      <AboutContent />
    </XpWindowShell>
  )
}
