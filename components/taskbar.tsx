"use client"

import { useEffect, useState } from "react"
import { StartFlag, IeIcon, NotepadIcon, BriefcaseIcon } from "@/components/xp-icons"

type TaskItem = { id: string; title: string; type: "about" | "experience" | "repo" }

type Props = {
  tasks: TaskItem[]
  activeId: string | null
  onTaskClick: (id: string) => void
  onStartClick: () => void
  startOpen: boolean
}

function TaskIcon({ type }: { type: TaskItem["type"] }) {
  if (type === "about") return <NotepadIcon size={15} />
  if (type === "experience") return <BriefcaseIcon size={15} />
  return <IeIcon size={15} />
}

export function Taskbar({ tasks, activeId, onTaskClick, onStartClick, startOpen }: Props) {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      )
    update()
    const t = setInterval(update, 1000 * 20)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="xp-taskbar absolute bottom-0 left-0 z-[9999] flex h-10 w-full items-stretch">
      <button
        type="button"
        onClick={onStartClick}
        className={`xp-start flex items-center gap-1.5 pl-2 pr-5 ${startOpen ? "brightness-110 shadow-inner" : ""}`}
        aria-label="Start"
      >
        <StartFlag size={20} />
        <span
          className="font-tahoma text-[15px] font-bold italic text-white"
          style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}
        >
          start
        </span>
      </button>

      <div className="flex flex-1 items-center gap-1 overflow-x-auto px-2">
        {tasks.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => onTaskClick(t.id)}
            className={`flex h-7 min-w-[120px] max-w-[180px] items-center gap-1.5 rounded-sm border px-2 font-tahoma text-[12px] text-white ${
              activeId === t.id
                ? "border-[#1941a5] bg-[#1c52c9] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.4)]"
                : "border-[#3f8cf3] bg-[#3877e0] hover:bg-[#4884ea]"
            }`}
          >
            <TaskIcon type={t.type} />
            <span className="truncate">{t.title}</span>
          </button>
        ))}
      </div>

      {/* System tray */}
      <div className="xp-tray flex items-center gap-2 border-l border-[#1b46b0] bg-gradient-to-b from-[#1290e9] to-[#0d6fc4] px-2">
        <span className="font-tahoma text-[11px] text-white" title="Volume">
          🔊
        </span>
        <span className="font-tahoma text-[11px] text-white" title="Network">
          📶
        </span>
        <span className="font-tahoma text-[12px] text-white">{time}</span>
      </div>
    </div>
  )
}
