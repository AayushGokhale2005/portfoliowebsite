"use client"

import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown"
import useSWR from "swr"
import type { Repo } from "@/lib/portfolio-data"
import { IeIcon } from "@/components/xp-icons"

type Props = {
  repo: Repo
  zIndex: number
  initialOffset: number
  active: boolean
  onFocus: () => void
  onClose: () => void
}

type RepoData = {
  name: string
  description: string
  stars: number
  forks: number
  language: string
  updated: string
  htmlUrl: string
  cloneUrl: string
  defaultBranch: string
  readme: string
}

const fetcher = (url: string) =>
  fetch(url).then((r) => {
    if (!r.ok) throw new Error("Failed")
    return r.json() as Promise<RepoData>
  })

export function IeWindow({ repo, zIndex, initialOffset, active, onFocus, onClose }: Props) {
  const [pos, setPos] = useState({ x: 90 + initialOffset, y: 60 + initialOffset })
  const [maximized, setMaximized] = useState(false)
  const dragRef = useRef<{ dx: number; dy: number } | null>(null)
  const addressUrl = repo.url

  const { data, error, isLoading } = useSWR(
    `/api/repo?name=${encodeURIComponent(repo.name)}`,
    fetcher,
  )

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!dragRef.current) return
      setPos({ x: e.clientX - dragRef.current.dx, y: Math.max(0, e.clientY - dragRef.current.dy) })
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
        width: "min(760px, 94vw)",
        height: "min(560px, 78vh)",
        zIndex,
      }

  return (
    <div
      className="xp-window absolute flex flex-col overflow-hidden"
      style={style}
      onMouseDown={onFocus}
      role="dialog"
      aria-label={`Internet Explorer - ${repo.name}`}
    >
      {/* Title bar */}
      <div
        className={`xp-titlebar ${active ? "" : "xp-titlebar-inactive"} flex h-[30px] shrink-0 items-center gap-2 px-2`}
        onMouseDown={(e) => {
          if (maximized) return
          dragRef.current = { dx: e.clientX - pos.x, dy: e.clientY - pos.y }
        }}
        onDoubleClick={() => setMaximized((m) => !m)}
      >
        <IeIcon size={16} />
        <span className="flex-1 truncate font-tahoma text-[12px] font-bold text-white">
          {repo.name} - Microsoft Internet Explorer
        </span>
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

      {/* Menu bar */}
      <div className="flex shrink-0 items-center gap-3 border-b border-[#aca899] bg-[#ece9d8] px-2 py-0.5 font-tahoma text-[11px] text-black">
        {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((m) => (
          <span key={m}>
            <span className="underline">{m.charAt(0)}</span>
            {m.slice(1)}
          </span>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex shrink-0 items-center gap-2 border-b border-[#aca899] bg-gradient-to-b from-[#f6f5ec] to-[#e0ddc8] px-2 py-1 font-tahoma text-[11px] text-[#444]">
        <span className="opacity-50">◀ Back</span>
        <span className="opacity-50">Forward ▶</span>
        <span className="opacity-50">✕ Stop</span>
        <span>↻ Refresh</span>
        <span>⌂ Home</span>
      </div>

      {/* Address bar */}
      <div className="flex shrink-0 items-center gap-2 border-b border-[#aca899] bg-[#ece9d8] px-2 py-1">
        <span className="font-tahoma text-[11px] text-[#555]">Address</span>
        <div className="xp-inset flex flex-1 items-center gap-1 px-1 py-0.5">
          <IeIcon size={14} />
          <input
            readOnly
            value={addressUrl}
            className="w-full bg-transparent font-tahoma text-[12px] text-black outline-none"
            aria-label="Address"
          />
        </div>
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="xp-btn px-3 py-0.5 font-tahoma text-[11px] font-bold text-black"
        >
          Go
        </a>
      </div>

      {/* Page content */}
      <div className="xp-scrollbar flex-1 overflow-auto bg-white">
        {isLoading && (
          <div className="flex h-full flex-col items-center justify-center gap-2 font-tahoma text-[12px] text-[#555]">
            <IeIcon size={28} />
            <span>Connecting to codeberg.org...</span>
          </div>
        )}
        {error && (
          <div className="p-6 font-tahoma text-[12px] text-black">
            <p className="mb-2 text-[14px] font-bold">The page cannot be displayed</p>
            <p className="mb-4 text-[#444]">
              Internet Explorer cannot load this repository preview. You can still visit it directly.
            </p>
            <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-[#0033cc] underline">
              {repo.url}
            </a>
          </div>
        )}
        {data && <RepoPage repo={repo} data={data} />}
      </div>

      {/* Status bar */}
      <div className="flex shrink-0 items-center justify-between border-t border-[#aca899] bg-[#ece9d8] px-2 py-0.5 font-tahoma text-[11px] text-[#555]">
        <span>Done</span>
        <span>🌐 Internet</span>
      </div>
    </div>
  )
}

function RepoPage({ repo, data }: { repo: Repo; data: RepoData }) {
  return (
    <div className="mx-auto max-w-3xl p-5 font-tahoma text-[13px] text-[#1a1a1a]">
      <div className="mb-4 flex items-center gap-2 border-b-2 border-[#2185d0] pb-2">
        <span className="text-[18px] font-bold text-[#2185d0]">⬡ Codeberg</span>
      </div>

      <h1 className="mb-1 text-[20px] font-bold text-[#0033cc]">
        <a href={repo.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
          AayushGokhale2005 / {data.name.split("/").pop()}
        </a>
      </h1>

      {data.description && <p className="mb-3 text-[#333]">{data.description}</p>}

      <div className="mb-4 flex flex-wrap gap-4 text-[12px] text-[#555]">
        {data.language && <span>● {data.language}</span>}
        <span>★ {data.stars} stars</span>
        <span>⑂ {data.forks} forks</span>
        <span>Branch: {data.defaultBranch}</span>
      </div>

      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-5 inline-block rounded-sm border border-[#1b6e1b] bg-gradient-to-b from-[#5bbd5b] to-[#3c993c] px-4 py-1.5 text-[12px] font-bold text-white"
      >
        Open on Codeberg →
      </a>

      {data.readme ? (
        <div className="rounded-sm border border-[#d4d4d4] bg-white">
          <div className="border-b border-[#d4d4d4] bg-[#f4f4f4] px-3 py-1.5 text-[12px] font-bold text-[#333]">
            README.md
          </div>
          <article className="markdown-body p-4">
            <ReactMarkdown
              components={{
                h1: (p) => <h1 className="mb-2 mt-3 border-b border-[#eee] pb-1 text-[18px] font-bold" {...p} />,
                h2: (p) => <h2 className="mb-2 mt-3 border-b border-[#eee] pb-1 text-[16px] font-bold" {...p} />,
                h3: (p) => <h3 className="mb-1 mt-2 text-[14px] font-bold" {...p} />,
                p: (p) => <p className="mb-2 leading-relaxed text-[#333]" {...p} />,
                a: (p) => <a className="text-[#0033cc] underline" target="_blank" rel="noopener noreferrer" {...p} />,
                ul: (p) => <ul className="mb-2 list-disc pl-6" {...p} />,
                ol: (p) => <ol className="mb-2 list-decimal pl-6" {...p} />,
                li: (p) => <li className="mb-0.5 leading-relaxed" {...p} />,
                code: (p) => (
                  <code className="rounded bg-[#f0f0f0] px-1 py-0.5 font-mono text-[12px] text-[#c7254e]" {...p} />
                ),
                pre: (p) => (
                  <pre className="mb-2 overflow-auto rounded bg-[#2d2d2d] p-3 font-mono text-[12px] text-[#f8f8f2]" {...p} />
                ),
                blockquote: (p) => <blockquote className="mb-2 border-l-4 border-[#ddd] pl-3 text-[#666]" {...p} />,
              }}
            >
              {data.readme}
            </ReactMarkdown>
          </article>
        </div>
      ) : (
        <div className="rounded-sm border border-[#d4d4d4] bg-[#fafafa] p-4 text-[12px] text-[#777]">
          No README available for this repository. Click &quot;Open on Codeberg&quot; to view the full project.
        </div>
      )}
    </div>
  )
}
