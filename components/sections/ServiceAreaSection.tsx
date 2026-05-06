import SectionShell from '@/components/sections/SectionShell'
import { SERVICE_AREAS } from '@/data/services'

export default function ServiceAreaSection() {
  return (
    <SectionShell
      eyebrow="Service Area"
      title="Serving North Kansas City metro communities"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-xl border border-brand-border bg-brand-surface p-5 md:p-6">
          <h3 className="text-lg font-bold text-white">Coverage Cities</h3>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-300 sm:grid-cols-2">
            {SERVICE_AREAS.map((city) => (
              <li key={city} className="rounded-md border border-brand-border bg-brand-bg px-3 py-2">
                {city}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-brand-border bg-brand-surface p-5 md:p-6">
          <h3 className="text-lg font-bold text-white">Local service map</h3>
          <div className="mt-3 flex min-h-52 items-center justify-center rounded-md border border-brand-border bg-brand-bg text-sm text-slate-400">
            Interactive map embed area
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
