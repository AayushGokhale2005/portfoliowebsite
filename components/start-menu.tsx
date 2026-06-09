"use client"

import { profile } from "@/lib/portfolio-data"
import { IeIcon, NotepadIcon, BriefcaseIcon } from "@/components/xp-icons"

type Props = {
  open: boolean
  onClose: () => void
  onOpenAbout: () => void
  onOpenExperience: () => void
}

export function StartMenu({ open, onClose, onOpenAbout, onOpenExperience }: Props) {
  if (!open) return null

  function handleOpen(fn: () => void) {
    fn()
    onClose()
  }

  return (
    <>
      <div className="fixed inset-0 z-[9998]" onClick={onClose} aria-hidden="true" />
      <div className="xp-start-menu absolute bottom-10 left-0 z-[9999] flex w-[380px] overflow-hidden border border-[#0831d9] shadow-2xl">
        {/* Left pane — pinned programs */}
        <div className="flex flex-1 flex-col bg-white">
          <div className="flex items-center gap-2 bg-gradient-to-b from-[#1f6dd6] to-[#1750bb] px-3 py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/40 bg-gradient-to-br from-[#ffd25e] to-[#e8a23d] font-tahoma text-[18px] font-bold text-white shadow-inner">
              A
            </div>
            <span
              className="font-tahoma text-[15px] font-bold text-white"
              style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}
            >
              {profile.name}
            </span>
          </div>

          <div className="flex flex-1">
            <div className="flex-1 px-1 py-2 font-tahoma text-[12px] text-black">
              <button
                type="button"
                onClick={() => handleOpen(onOpenAbout)}
                className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left hover:bg-[#2f71d6] hover:text-white"
              >
                <NotepadIcon size={24} />
                <span>
                  <span className="block font-bold">About Me</span>
                  <span className="block text-[10px] text-[#777] group-hover:text-white/80">
                    Notepad
                  </span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleOpen(onOpenExperience)}
                className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left hover:bg-[#2f71d6] hover:text-white"
              >
                <BriefcaseIcon size={24} />
                <span>
                  <span className="block font-bold">Work Experience</span>
                  <span className="block text-[10px] text-[#777]">My Documents</span>
                </span>
              </button>

              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-sm px-2 py-1.5 hover:bg-[#2f71d6] hover:text-white"
              >
                <IeIcon size={24} />
                <span>
                  <span className="block font-bold">Internet Explorer</span>
                  <span className="block text-[10px] text-[#777] [a:hover_&]:text-white/80">
                    Codeberg Profile
                  </span>
                </span>
              </a>

              <div className="my-1 border-t border-[#d4d4d4]" />

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 rounded-sm px-2 py-1.5 hover:bg-[#2f71d6] hover:text-white"
              >
                <span className="flex h-6 w-6 items-center justify-center text-[16px]">✉</span>
                <span className="font-bold">E-mail</span>
              </a>

              <p className="px-2 py-2 text-[11px] leading-relaxed text-[#555]">
                Double-click a folder to open a project in Internet Explorer.
              </p>
            </div>

            {/* Right pane — places & links */}
            <div className="xp-start-right w-[140px] bg-gradient-to-b from-[#3f8cf3] to-[#1941a5] px-2 py-3 font-tahoma text-[11px] text-white">
              <p className="mb-2 px-1 text-[12px] font-bold">My Documents</p>
              <button
                type="button"
                onClick={() => handleOpen(onOpenExperience)}
                className="block w-full rounded-sm px-1 py-1 text-left hover:bg-white/15"
              >
                Work Experience
              </button>
              <button
                type="button"
                onClick={() => handleOpen(onOpenAbout)}
                className="block w-full rounded-sm px-1 py-1 text-left hover:bg-white/15"
              >
                About Me
              </button>
              <div className="my-2 border-t border-white/25" />
              <p className="mb-2 px-1 text-[12px] font-bold">Connect</p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-sm px-1 py-1 hover:bg-white/15"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-sm px-1 py-1 hover:bg-white/15"
              >
                GitHub
              </a>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-sm px-1 py-1 hover:bg-white/15"
              >
                Codeberg
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-2 border-t border-[#d4d4d4] bg-gradient-to-b from-[#3f8cf3] to-[#1941a5] px-3 py-1.5">
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-1 font-tahoma text-[12px] text-white"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#d24f3f] text-[11px]">
                ⏻
              </span>
              Log Off
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
