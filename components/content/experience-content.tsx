import { workExperience } from "@/lib/portfolio-data"

export function ExperienceContent() {
  return (
    <div className="space-y-3 p-3">
      {workExperience.map((job, idx) => (
        <article
          key={idx}
          className="rounded-sm border border-[#919b9c] bg-white p-3 shadow-[inset_1px_1px_0_#fff]"
        >
          <div className="mb-2 flex flex-col gap-1">
            <h2 className="font-tahoma text-[15px] font-bold text-[#0033cc]">{job.title}</h2>
            <p className="font-tahoma text-[13px] text-[#333]">
              {job.company} · {job.location}
            </p>
            <span className="inline-block w-fit rounded-sm border border-[#aca899] bg-[#ece9d8] px-2 py-0.5 font-tahoma text-[11px] text-[#555]">
              {job.period}
            </span>
          </div>
          <ul className="list-none space-y-1.5 pl-1 font-tahoma text-[13px] text-[#333]">
            {job.bullets.map((bullet, bi) => (
              <li key={bi} className="flex gap-2 leading-relaxed">
                <span className="shrink-0 text-[#0033cc]">▸</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
