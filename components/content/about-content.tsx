import { aboutMe, profile } from "@/lib/portfolio-data"

export function AboutContent() {
  return (
    <div className="p-4 font-tahoma text-[14px] leading-relaxed text-black">
      <h1 className="mb-3 text-[20px] font-bold">{profile.name}</h1>
      <p className="mb-3 text-[#333]">{aboutMe.summary}</p>
      {aboutMe.paragraphs.map((p, i) => (
        <p key={i} className="mb-3 text-[#333]">
          {p}
        </p>
      ))}

      <section className="mt-4 border-t border-[#d4d4d4] pt-3">
        <h2 className="mb-2 font-bold">Education</h2>
        <p className="text-[#333]">
          {profile.education.degree}
          <br />
          {profile.education.school}, {profile.education.location}
          <br />
          Expected graduation: {profile.education.graduation}
        </p>
      </section>

      <section className="mt-4 border-t border-[#d4d4d4] pt-3">
        <h2 className="mb-2 font-bold">Contact</h2>
        <div className="flex flex-col gap-2 text-[#333]">
          <a href={`mailto:${profile.email}`} className="text-[#0033cc] underline">
            {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0033cc] underline">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-[#0033cc] underline">
            GitHub
          </a>
          <a href={profile.url} target="_blank" rel="noopener noreferrer" className="text-[#0033cc] underline">
            Codeberg
          </a>
        </div>
      </section>

      <section className="mt-4 border-t border-[#d4d4d4] pt-3">
        <h2 className="mb-2 font-bold">Skills</h2>
        <p className="mb-2 text-[#333]">
          <span className="font-semibold">Languages:</span> {profile.skills.languages.join(", ")}
        </p>
        <p className="mb-2 text-[#333]">
          <span className="font-semibold">ML & Data:</span> {profile.skills.mlData.join(", ")}
        </p>
        <p className="mb-2 text-[#333]">
          <span className="font-semibold">Backend & Cloud:</span>{" "}
          {profile.skills.backendCloud.join(", ")}
        </p>
        <p className="text-[#333]">
          <span className="font-semibold">Tools:</span> {profile.skills.tools.join(", ")}
        </p>
      </section>
    </div>
  )
}
