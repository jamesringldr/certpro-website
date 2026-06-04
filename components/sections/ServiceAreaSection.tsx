import SectionShell from '@/components/sections/SectionShell'
import { SERVICE_COUNTIES_KANSAS, SERVICE_COUNTIES_MISSOURI } from '@/data/services'

type CountyColumnProps = {
  state: string
  counties: readonly string[]
}

function CountyColumn({ state, counties }: CountyColumnProps) {
  return (
    <div>
      <h3 className="text-lg font-bold text-white">{state}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {counties.map((county) => (
          <li key={county} className="rounded-md border border-brand-border bg-brand-bg px-3 py-2">
            {county}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ServiceAreaSection() {
  return (
    <SectionShell eyebrow="Service Area" title="Serving Kansas City Metro & Surrounding Counties">
      <div className="rounded-xl border border-brand-border bg-brand-surface p-5 md:p-6">
        <h3 className="text-lg font-bold text-white">Counties Covered</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
          Licensed service across Missouri and Kansas counties within approximately 50 miles of Jackson County.
        </p>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <CountyColumn state="Missouri" counties={SERVICE_COUNTIES_MISSOURI} />
          <CountyColumn state="Kansas" counties={SERVICE_COUNTIES_KANSAS} />
        </div>
      </div>
    </SectionShell>
  )
}
