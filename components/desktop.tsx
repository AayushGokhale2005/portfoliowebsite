"use client"

import { useState } from "react"
import { repos } from "@/lib/portfolio-data"
import { DesktopIcon } from "@/components/desktop-icon"
import {
  FolderIcon,
  NotepadIcon,
  BriefcaseIcon,
  RecycleBinIcon,
} from "@/components/xp-icons"
import { IeWindow } from "@/components/ie-window"
import { AboutWindow } from "@/components/about-window"
import { ExperienceWindow } from "@/components/experience-window"
import { Taskbar } from "@/components/taskbar"
import { StartMenu } from "@/components/start-menu"

type WindowType = "about" | "experience" | "repo"

type OpenWindow = {
  id: string
  type: WindowType
  repoName?: string
  z: number
  offset: number
}

const DESKTOP_ITEMS = [
  { id: "about", label: "About Me", type: "about" as const, icon: NotepadIcon },
  { id: "experience", label: "Work Experience", type: "experience" as const, icon: BriefcaseIcon },
]

export function Desktop() {
  const [selected, setSelected] = useState<string | null>(null)
  const [windows, setWindows] = useState<OpenWindow[]>([])
  const [topZ, setTopZ] = useState(10)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [startOpen, setStartOpen] = useState(false)
  const [openCount, setOpenCount] = useState(0)

  function openWindow(type: WindowType, repoName?: string) {
    const windowKey = type === "repo" ? repoName! : type
    const existing = windows.find((w) =>
      w.type === "repo" ? w.repoName === repoName : w.type === type,
    )
    if (existing) {
      focusWindow(existing.id)
      return
    }
    const id = `${windowKey}-${Date.now()}`
    const z = topZ + 1
    setTopZ(z)
    setWindows((w) => [
      ...w,
      { id, type, repoName, z, offset: (openCount % 6) * 26 },
    ])
    setOpenCount((c) => c + 1)
    setActiveId(id)
  }

  function focusWindow(id: string) {
    const z = topZ + 1
    setTopZ(z)
    setWindows((w) => w.map((win) => (win.id === id ? { ...win, z } : win)))
    setActiveId(id)
  }

  function closeWindow(id: string) {
    setWindows((w) => w.filter((win) => win.id !== id))
    if (activeId === id) setActiveId(null)
  }

  function getTaskTitle(win: OpenWindow) {
    if (win.type === "about") return "About Me"
    if (win.type === "experience") return "Work Experience"
    return win.repoName ?? "Project"
  }

  return (
    <main
      className="xp-desktop relative h-dvh w-full overflow-hidden select-none"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          setSelected(null)
          setStartOpen(false)
        }
      }}
    >
      {/* Desktop icons — single column like classic XP */}
      <div className="absolute left-3 top-3 flex flex-col gap-3">
        {DESKTOP_ITEMS.map((item) => (
          <DesktopIcon
            key={item.id}
            label={item.label}
            selected={selected === item.id}
            onSelect={() => setSelected(item.id)}
            onOpen={() => openWindow(item.type)}
            icon={<item.icon size={42} />}
          />
        ))}
        <div className="my-1 h-px w-16 bg-white/20" aria-hidden="true" />
        {repos.map((repo) => (
          <DesktopIcon
            key={repo.name}
            label={repo.name}
            selected={selected === repo.name}
            onSelect={() => setSelected(repo.name)}
            onOpen={() => openWindow("repo", repo.name)}
            icon={<FolderIcon size={42} />}
          />
        ))}
      </div>

      {/* Recycle Bin — bottom-right like XP */}
      <div className="absolute bottom-12 right-3">
        <DesktopIcon
          label="Recycle Bin"
          selected={selected === "recycle-bin"}
          onSelect={() => setSelected("recycle-bin")}
          onOpen={() => setSelected("recycle-bin")}
          icon={<RecycleBinIcon size={42} />}
        />
      </div>

      {/* Open windows */}
      {windows.map((win) => {
        if (win.type === "about") {
          return (
            <AboutWindow
              key={win.id}
              zIndex={win.z}
              initialOffset={win.offset}
              active={activeId === win.id}
              onFocus={() => focusWindow(win.id)}
              onClose={() => closeWindow(win.id)}
            />
          )
        }
        if (win.type === "experience") {
          return (
            <ExperienceWindow
              key={win.id}
              zIndex={win.z}
              initialOffset={win.offset}
              active={activeId === win.id}
              onFocus={() => focusWindow(win.id)}
              onClose={() => closeWindow(win.id)}
            />
          )
        }
        const repo = repos.find((r) => r.name === win.repoName)!
        return (
          <IeWindow
            key={win.id}
            repo={repo}
            zIndex={win.z}
            initialOffset={win.offset}
            active={activeId === win.id}
            onFocus={() => focusWindow(win.id)}
            onClose={() => closeWindow(win.id)}
          />
        )
      })}

      <StartMenu
        open={startOpen}
        onClose={() => setStartOpen(false)}
        onOpenAbout={() => openWindow("about")}
        onOpenExperience={() => openWindow("experience")}
      />

      <Taskbar
        tasks={windows.map((w) => ({ id: w.id, title: getTaskTitle(w), type: w.type }))}
        activeId={activeId}
        onTaskClick={focusWindow}
        startOpen={startOpen}
        onStartClick={() => setStartOpen((s) => !s)}
      />
    </main>
  )
}
