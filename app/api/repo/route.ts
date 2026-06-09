import { type NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("name")
  if (!name || !/^[\w.-]+$/.test(name)) {
    return NextResponse.json({ error: "Invalid repo name" }, { status: 400 })
  }

  const owner = "AayushGokhale2005"
  const base = `https://codeberg.org/api/v1/repos/${owner}/${name}`

  try {
    const [repoRes, readmeRes] = await Promise.all([
      fetch(base, { headers: { Accept: "application/json" }, next: { revalidate: 600 } }),
      fetch(`${base}/raw/README.md`, { next: { revalidate: 600 } }),
    ])

    if (!repoRes.ok) {
      return NextResponse.json({ error: "Repo not found" }, { status: repoRes.status })
    }

    const repo = await repoRes.json()
    let readme = ""
    if (readmeRes.ok) {
      readme = await readmeRes.text()
      if (readme.length > 6000) readme = readme.slice(0, 6000) + "\n\n..."
    }

    return NextResponse.json({
      name: repo.full_name,
      description: repo.description ?? "",
      stars: repo.stars_count ?? 0,
      forks: repo.forks_count ?? 0,
      language: repo.language ?? "",
      updated: repo.updated_at ?? "",
      htmlUrl: repo.html_url,
      cloneUrl: repo.clone_url,
      defaultBranch: repo.default_branch ?? "main",
      readme,
    })
  } catch {
    return NextResponse.json({ error: "Failed to fetch repo" }, { status: 502 })
  }
}
