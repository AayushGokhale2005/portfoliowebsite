"use client"

import { workExperience, profile } from "@/lib/portfolio-data"
import { BriefcaseIcon } from "@/components/xp-icons"
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

        <div className="space-y-3">
          {workExperience.map((job, idx) => (
            <div
              key={idx}
              className="rounded-sm border border-[#919b9c] bg-white p-3 shadow-[inset_1px_1px_0_#fff]"
            >
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h2 className="font-tahoma text-[14px] font-bold text-[#0033cc]">{job.title}</h2>
                  <p className="font-tahoma text-[12px] text-[#333]">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="rounded-sm border border-[#aca899] bg-[#ece9d8] px-2 py-0.5 font-tahoma text-[11px] text-[#555]">
                  {job.period}
                </span>
              </div>
              <ul className="list-none space-y-1 pl-1 font-tahoma text-[12px] text-[#333]">
                {job.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-2 leading-relaxed">
                    <span className="shrink-0 text-[#0033cc]">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </XpWindowShell>
  )
}
