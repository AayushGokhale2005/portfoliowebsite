"use client"

import { profile, workExperience } from "@/lib/portfolio-data"
import { BriefcaseIcon } from "@/components/xp-icons"
import { ExperienceContent } from "@/components/content/experience-content"
import { XpWindowShell } from "@/components/xp-window-shell"

type Props = {
  zIndex: number
  initialOffset: number
  active: boolean
  onFocus: () => void
  onClose: () => void
}

export function ExperienceWindow({ zIndex, initialOffset, active, onFocus, onClose }: Props) {
  const toolbar = (
    <div className="flex shrink-0 items-center gap-2 border-b border-[#aca899] bg-gradient-to-b from-[#f6f5ec] to-[#e0ddc8] px-2 py-1 font-tahoma text-[11px] text-[#444]">
      <span>📁 Back</span>
      <span className="opacity-50">Forward</span>
      <span className="opacity-50">Up</span>
      <span className="mx-1 h-4 w-px bg-[#aca899]" />
      <span>🔍 Search</span>
      <span>📂 Folders</span>
    </div>
  )

  const addressBar = (
    <div className="flex shrink-0 items-center gap-2 border-b border-[#aca899] bg-[#ece9d8] px-2 py-1">
      <span className="font-tahoma text-[11px] text-[#555]">Address</span>
      <div className="xp-inset flex flex-1 items-center px-2 py-0.5">
        <span className="font-tahoma text-[12px] text-black">
          My Documents \ Work Experience \ {profile.name}
        </span>
      </div>
    </div>
  )

  return (
    <XpWindowShell
      title="Work Experience - My Documents"
      icon={<BriefcaseIcon size={16} />}
      zIndex={zIndex}
      initialOffset={initialOffset}
      active={active}
      onFocus={onFocus}
      onClose={onClose}
      toolbar={
        <>
          {toolbar}
          {addressBar}
        </>
      }
      statusLeft={`${workExperience.length} object(s)`}
      statusRight="My Documents"
      defaultWidth="min(720px, 94vw)"
      defaultHeight="min(560px, 78vh)"
    >
      <div className="bg-[#ece9d8] p-3">
        <div className="mb-3 flex items-center gap-2 border-b border-[#aca899] pb-2 font-tahoma text-[12px] text-[#555]">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Favorites</span>
          <span>Tools</span>
          <span>Help</span>
        </div>
        <ExperienceContent />
      </div>
    </XpWindowShell>
  )
}
