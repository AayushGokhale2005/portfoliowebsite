import { Desktop } from "@/components/desktop"
import { XpPhone } from "@/components/xp-phone/xp-phone"

export function PortfolioShell() {
  return (
    <>
      <div className="hidden md:block h-dvh">
        <Desktop />
      </div>
      <div className="md:hidden h-dvh">
        <XpPhone />
      </div>
    </>
  )
}
