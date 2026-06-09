"use client"

import { aboutMe, profile } from "@/lib/portfolio-data"
import { NotepadIcon } from "@/components/xp-icons"
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
      <div className="p-4 font-tahoma text-[13px] leading-relaxed text-black">
        <h1 className="mb-3 text-[16px] font-bold">{profile.name}</h1>
        <p className="mb-3 text-[#333]">{aboutMe.summary}</p>
        {aboutMe.paragraphs.map((p, i) => (
          <p key={i} className="mb-3 text-[#333]">
            {p}
          </p>
        ))}

        <div className="mt-4 border-t border-[#d4d4d4] pt-3">
          <p className="mb-2 font-bold">Education</p>
          <p className="text-[#333]">
            {profile.education.degree}
            <br />
            {profile.education.school}, {profile.education.location}
            <br />
            Expected graduation: {profile.education.graduation}
          </p>
        </div>

        <div className="mt-4 border-t border-[#d4d4d4] pt-3">
          <p className="mb-2 font-bold">Contact</p>
          <p className="text-[#333]">
            <a href={`mailto:${profile.email}`} className="text-[#0033cc] underline">
              {profile.email}
            </a>
            {" · "}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0033cc] underline">
              LinkedIn
            </a>
            {" · "}
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-[#0033cc] underline">
              GitHub
            </a>
            {" · "}
            <a href={profile.url} target="_blank" rel="noopener noreferrer" className="text-[#0033cc] underline">
              Codeberg
            </a>
          </p>
        </div>

        <div className="mt-4 border-t border-[#d4d4d4] pt-3">
          <p className="mb-2 font-bold">Skills</p>
          <p className="mb-1 text-[#333]">
            <span className="font-semibold">Languages:</span> {profile.skills.languages.join(", ")}
          </p>
          <p className="mb-1 text-[#333]">
            <span className="font-semibold">ML & Data:</span> {profile.skills.mlData.join(", ")}
          </p>
          <p className="mb-1 text-[#333]">
            <span className="font-semibold">Backend & Cloud:</span> {profile.skills.backendCloud.join(", ")}
          </p>
          <p className="text-[#333]">
            <span className="font-semibold">Tools:</span> {profile.skills.tools.join(", ")}
          </p>
        </div>
      </div>
    </XpWindowShell>
  )
}
