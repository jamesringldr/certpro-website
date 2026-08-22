import { backflowTestingPage } from '@/data/service-pages/backflow-testing'
import { commercialPlumbingPage } from '@/data/service-pages/commercial-plumbing'
import { drainCleaningPage } from '@/data/service-pages/drain-cleaning'
import { emergencyPlumbingPage } from '@/data/service-pages/emergency-plumbing'
import { fixtureInstallationPage } from '@/data/service-pages/fixture-installation'
import { garbageDisposalServicePage } from '@/data/service-pages/garbage-disposal-service'
import { leakDetectionPage } from '@/data/service-pages/leak-detection'
import { pipeRepairRepipingPage } from '@/data/service-pages/pipe-repair-repiping'
import { sewerLineRepairPage } from '@/data/service-pages/sewer-line-repair'
import { toiletRepairPage } from '@/data/service-pages/toilet-repair'
import { waterHeaterInstallationPage } from '@/data/service-pages/water-heater-installation'
import { waterHeaterRepairPage } from '@/data/service-pages/water-heater-repair'
import type { DeepServicePage } from '@/data/service-pages/types'

const DEEP_SERVICE_PAGES: Record<string, DeepServicePage> = {
  [backflowTestingPage.slug]: backflowTestingPage,
  [commercialPlumbingPage.slug]: commercialPlumbingPage,
  [drainCleaningPage.slug]: drainCleaningPage,
  [emergencyPlumbingPage.slug]: emergencyPlumbingPage,
  [fixtureInstallationPage.slug]: fixtureInstallationPage,
  [garbageDisposalServicePage.slug]: garbageDisposalServicePage,
  [leakDetectionPage.slug]: leakDetectionPage,
  [pipeRepairRepipingPage.slug]: pipeRepairRepipingPage,
  [sewerLineRepairPage.slug]: sewerLineRepairPage,
  [toiletRepairPage.slug]: toiletRepairPage,
  [waterHeaterInstallationPage.slug]: waterHeaterInstallationPage,
  [waterHeaterRepairPage.slug]: waterHeaterRepairPage,
}

export function getDeepServicePage(slug: string): DeepServicePage | undefined {
  return DEEP_SERVICE_PAGES[slug]
}
