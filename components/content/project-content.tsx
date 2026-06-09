"use client"

import useSWR from "swr"
import ReactMarkdown from "react-markdown"
import type { Repo } from "@/lib/portfolio-data"
import { IeIcon } from "@/components/xp-icons"

type RepoData = {
  name: string
  description: string
  stars: number
  forks: number
  language: string
  defaultBranch: string
  readme: string
}

const fetcher = (url: string) =>
  fetch(url).then((r) => {
    if (!r.ok) throw new Error("Failed")
    return r.json() as Promise<RepoData>
  })

export function ProjectContent({ repo }: { repo: Repo }) {
  const { data, error, isLoading } = useSWR(
    `/api/repo?name=${encodeURIComponent(repo.name)}`,
    fetcher,
  )

  if (isLoading) {
    return (
      <div className="flex h-48 flex-col items-center justify-center gap-2 font-tahoma text-[13px] text-[#555]">
        <IeIcon size={28} />
        <span>Loading {repo.name}...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 font-tahoma text-[13px] text-black">
        <p className="mb-2 font-bold">Could not load project</p>
        <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-[#0033cc] underline">
          Open on Codeberg
        </a>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="p-4 font-tahoma text-[13px] text-[#1a1a1a]">
      <h1 className="mb-1 text-[18px] font-bold text-[#0033cc]">{data.name.split("/").pop()}</h1>
      {(data.description || repo.description) && (
        <p className="mb-3 text-[#333]">{data.description || repo.description}</p>
      )}
      <div className="mb-4 flex flex-wrap gap-3 text-[12px] text-[#555]">
        {data.language && <span>● {data.language}</span>}
        <span>★ {data.stars}</span>
        <span>⑂ {data.forks}</span>
      </div>
      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 inline-block rounded-sm border border-[#1b6e1b] bg-gradient-to-b from-[#5bbd5b] to-[#3c993c] px-4 py-2 text-[12px] font-bold text-white"
      >
        Open on Codeberg
      </a>
      {data.readme ? (
        <article className="rounded-sm border border-[#d4d4d4] bg-white">
          <div className="border-b border-[#d4d4d4] bg-[#f4f4f4] px-3 py-1.5 text-[12px] font-bold">
            README.md
          </div>
          <div className="p-3">
            <ReactMarkdown
              components={{
                h1: (p) => <h1 className="mb-2 mt-2 text-[16px] font-bold" {...p} />,
                h2: (p) => <h2 className="mb-2 mt-2 text-[15px] font-bold" {...p} />,
                p: (p) => <p className="mb-2 leading-relaxed text-[#333]" {...p} />,
                a: (p) => (
                  <a className="text-[#0033cc] underline" target="_blank" rel="noopener noreferrer" {...p} />
                ),
                ul: (p) => <ul className="mb-2 list-disc pl-5" {...p} />,
                li: (p) => <li className="mb-0.5" {...p} />,
                code: (p) => (
                  <code className="rounded bg-[#f0f0f0] px-1 font-mono text-[12px]" {...p} />
                ),
              }}
            >
              {data.readme.slice(0, 4000)}
            </ReactMarkdown>
          </div>
        </article>
      ) : (
        <p className="text-[12px] text-[#777]">No README available.</p>
      )}
    </div>
  )
}
