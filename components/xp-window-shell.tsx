"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type Props = {
  title: string
  icon: ReactNode
  zIndex: number
  initialOffset: number
  active: boolean
  onFocus: () => void
  onClose: () => void
  children: ReactNode
  statusLeft?: string
  statusRight?: string
  defaultWidth?: string
  defaultHeight?: string
  menuBar?: ReactNode
  toolbar?: ReactNode
}

export function XpWindowShell({
  title,
  icon,
  zIndex,
  initialOffset,
  active,
  onFocus,
  onClose,
  children,
  statusLeft = "Ready",
  statusRight,
  defaultWidth = "min(680px, 92vw)",
  defaultHeight = "min(520px, 75vh)",
  menuBar,
  toolbar,
}: Props) {
  const [pos, setPos] = useState({ x: 80 + initialOffset, y: 50 + initialOffset })
  const [maximized, setMaximized] = useState(false)
  const dragRef = useRef<{ dx: number; dy: number } | null>(null)

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!dragRef.current) return
      setPos({
        x: e.clientX - dragRef.current.dx,
        y: Math.max(0, e.clientY - dragRef.current.dy),
      })
    }
    function onUp() {
      dragRef.current = null
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }
  }, [])

  const style: React.CSSProperties = maximized
    ? { left: 0, top: 0, width: "100%", height: "calc(100% - 40px)", zIndex }
    : {
        left: pos.x,
        top: pos.y,
        width: defaultWidth,
        height: defaultHeight,
        zIndex,
      }

  return (
    <div
      className="xp-window absolute flex flex-col overflow-hidden"
      style={style}
      onMouseDown={onFocus}
      role="dialog"
      aria-label={title}
    >
      <div
        className={`xp-titlebar ${active ? "" : "xp-titlebar-inactive"} flex h-[30px] shrink-0 items-center gap-2 px-2`}
        onMouseDown={(e) => {
          if (maximized) return
          dragRef.current = { dx: e.clientX - pos.x, dy: e.clientY - pos.y }
        }}
        onDoubleClick={() => setMaximized((m) => !m)}
      >
        {icon}
        <span className="flex-1 truncate font-tahoma text-[12px] font-bold text-white">{title}</span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setMaximized(false)}
            className="xp-titlebtn flex h-[18px] w-[18px] items-center justify-center bg-[#2f6fd6] text-[11px] font-bold text-white"
            aria-label="Minimize"
          >
            _
          </button>
          <button
            type="button"
            onClick={() => setMaximized((m) => !m)}
            className="xp-titlebtn flex h-[18px] w-[18px] items-center justify-center bg-[#2f6fd6] text-[10px] font-bold text-white"
            aria-label="Maximize"
          >
            □
          </button>
          <button
            type="button"
            onClick={onClose}
            className="xp-titlebtn flex h-[18px] w-[18px] items-center justify-center bg-[#d24f3f] text-[12px] font-bold text-white"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>

      {menuBar}
      {toolbar}

      <div className="flex-1 overflow-auto xp-scrollbar bg-white">{children}</div>

      <div className="flex shrink-0 items-center justify-between border-t border-[#aca899] bg-[#ece9d8] px-2 py-0.5 font-tahoma text-[11px] text-[#555]">
        <span>{statusLeft}</span>
        {statusRight && <span>{statusRight}</span>}
      </div>
    </div>
  )
}
