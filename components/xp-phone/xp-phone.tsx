"use client"

import { useState } from "react"
import { profile, repos } from "@/lib/portfolio-data"
import { NotepadIcon, BriefcaseIcon, FolderIcon, IeIcon } from "@/components/xp-icons"
import { XpPhoneStatusBar } from "./xp-phone-status-bar"
import { XpPhoneNavBar } from "./xp-phone-nav-bar"
import { XpPhoneTile } from "./xp-phone-tile"
import { AboutContent } from "@/components/content/about-content"
import { ExperienceContent } from "@/components/content/experience-content"
import { ProjectContent } from "@/components/content/project-content"

type Screen =
  | { type: "home" }
  | { type: "about" }
  | { type: "experience" }
  | { type: "projects" }
  | { type: "project"; name: string }

export function XpPhone() {
  const [stack, setStack] = useState<Screen[]>([{ type: "about" }])

  const screen = stack[stack.length - 1]
  const isHome = screen.type === "home"

  function navigate(next: Screen) {
    setStack((s) => [...s, next])
  }

  function goHome() {
    setStack([{ type: "home" }])
  }

  function goBack() {
    setStack((s) => (s.length > 1 ? s.slice(0, -1) : s))
  }

  function getTitle(): string {
    switch (screen.type) {
      case "home":
        return profile.name
      case "about":
        return "About Me"
      case "experience":
        return "Work Experience"
      case "projects":
        return "My Projects"
      case "project":
        return screen.name
    }
  }

  return (
    <div className="xp-phone flex h-dvh flex-col overflow-hidden">
      <XpPhoneStatusBar />

      {!isHome && (
        <div className="xp-phone-appbar shrink-0 px-4 py-3">
          <h1 className="font-tahoma text-[28px] font-bold leading-none text-white drop-shadow-sm">
            {getTitle()}
          </h1>
        </div>
      )}

      <div className="flex-1 overflow-auto xp-scrollbar">
        {screen.type === "home" && (
          <div className="xp-phone-start px-3 pb-4 pt-2">
            <div className="mb-4 px-1">
              <p className="font-tahoma text-[13px] text-white/80">Windows XP Mobile</p>
              <h1 className="font-tahoma text-[32px] font-bold leading-tight text-white drop-shadow-md">
                {profile.name}
              </h1>
              <p className="mt-1 font-tahoma text-[13px] text-white/75">
                Computer Science · Rutgers &apos;27
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <XpPhoneTile
                label="About Me"
                subtitle="Notepad"
                size="wide"
                accent="blue"
                icon={<NotepadIcon size={32} />}
                onClick={() => navigate({ type: "about" })}
              />
              <XpPhoneTile
                label="Work Experience"
                subtitle="4 roles"
                size="wide"
                accent="green"
                icon={<BriefcaseIcon size={32} />}
                onClick={() => navigate({ type: "experience" })}
              />
              <XpPhoneTile
                label="Projects"
                subtitle={`${repos.length} repos`}
                size="square"
                accent="gold"
                icon={<FolderIcon size={28} />}
                onClick={() => navigate({ type: "projects" })}
              />
              <XpPhoneTile
                label="Codeberg"
                subtitle="View profile"
                size="square"
                accent="silver"
                icon={<IeIcon size={28} />}
                href={profile.url}
              />
              <XpPhoneTile
                label="LinkedIn"
                size="square"
                accent="blue"
                href={profile.linkedin}
              />
              <XpPhoneTile
                label="GitHub"
                size="square"
                accent="silver"
                href={profile.github}
              />
              <XpPhoneTile
                label="Email"
                subtitle={profile.email.split("@")[0]}
                size="wide"
                accent="orange"
                href={`mailto:${profile.email}`}
              />
            </div>

            <p className="mt-4 px-1 font-tahoma text-[11px] text-white/60">
              Tap a tile to open. Swipe-style navigation with XP chrome.
            </p>
          </div>
        )}

        {screen.type === "about" && (
          <div className="xp-phone-app-body min-h-full bg-white">
            <AboutContent />
          </div>
        )}

        {screen.type === "experience" && (
          <div className="xp-phone-app-body min-h-full bg-[#ece9d8]">
            <ExperienceContent />
          </div>
        )}

        {screen.type === "projects" && (
          <div className="xp-phone-start p-3">
            <div className="grid grid-cols-2 gap-2.5">
              {repos.map((repo) => (
                <XpPhoneTile
                  key={repo.name}
                  label={repo.name}
                  subtitle={repo.description ? repo.description.slice(0, 40) + "..." : "Open project"}
                  size="square"
                  accent="gold"
                  icon={<FolderIcon size={24} />}
                  onClick={() => navigate({ type: "project", name: repo.name })}
                />
              ))}
            </div>
          </div>
        )}

        {screen.type === "project" && (
          <div className="xp-phone-app-body min-h-full bg-white">
            <ProjectContent repo={repos.find((r) => r.name === screen.name)!} />
          </div>
        )}
      </div>

      <XpPhoneNavBar showBack={!isHome} onBack={goBack} onStart={goHome} />
    </div>
  )
}
