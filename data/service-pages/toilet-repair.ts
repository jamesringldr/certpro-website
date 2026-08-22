import type { DeepServicePage } from '@/data/service-pages/types'

export const toiletRepairPage: DeepServicePage = {
  slug: 'toilet-repair',
  eyebrow: 'Running, rocking, or not flushing — not a plunger lecture',
  h1: 'Toilet Repair in North Kansas City',
  lede:
    'A toilet that never stops filling is a different job than a bowl that rocks on a rotten flange. CertPro repairs fill valves, flappers, supply stops, and wax seals, and we will tell you when the china itself is cracked or the flange is below the finished floor. A clog that also backs a tub is not this page—that is [drain cleaning](/services/drain-cleaning) or a [sewer](/services/sewer-line-repair) diagnosis.',
  heroImage: {
    src: '/images/sections/why-choose-plumber.jpg',
    alt: 'CertPro plumber diagnosing a residential toilet in the Northland',
  },
  sections: [
    {
      id: 'which-failure',
      heading: 'Which toilet failure you actually have',
      kind: 'bullets',
      intro: 'Listen and look before anyone pulls the tank.',
      items: [
        'Phantom run: water trickles into the bowl with the lid down. Usually flapper, refill tube, or a cracked overflow.',
        'Tank sweats or weeps at the supply: often a failed fill valve or a loose coupling nut—not a “new toilet.”',
        'Bowl rocks, or you smell sewer at the base: wax and flange, not a new flapper.',
        'Weak flush with a clear drain: partially closed stop, low tank level, or a worn flush valve seat.',
        'Water on the floor only when someone sits: bowl gasket or a hairline crack in the china—replacement, not a part.',
      ],
    },
    {
      id: 'before-arrival',
      heading: 'What to do before we pull the tank',
      kind: 'steps',
      items: [
        {
          title: 'Shut the stop and note whether it actually holds',
          body:
            'Turn the valve behind the bowl clockwise. If it still runs, or the handle crumbles, say so. Seized stops are common in Liberty baths that have never been serviced.',
        },
        {
          title: 'Do not keep flushing a slow toilet “to clear it”',
          body:
            'If the bowl rises toward the rim, stop. That is a drain or sewer symptom. Keep using other baths only if they are independent of that line.',
        },
        {
          title: 'Save the make and a photo of the base',
          body:
            'A North Kansas City two-piece from the 1990s takes different internals than a one-piece. A photo of staining at the floor tells us to bring a flange repair, not just a flapper.',
        },
      ],
    },
    {
      id: 'how-we-repair',
      heading: 'How we repair without a second trip for the same run',
      kind: 'prose',
      paragraphs: [
        'We test the fill valve, flapper, and chain before we sell a bowl. A running toilet can waste more water than a pinhole in the wall. If the internals are the whole problem, you keep the china.',
        'A rocking bowl gets pulled. We inspect the flange height relative to the finished floor. A flange buried under extra tile in a Gladstone remodel is why the wax keeps failing. Resetting the same wax on a low flange is how you get the same odor next month.',
        'If the closet flange is broken, we repair or replace it before a new wax. If the closet bend in the floor is the real failure, that is pipe work, and we will say so rather than set a new toilet on a leaking fitting.',
      ],
    },
    {
      id: 'neighborhoods',
      heading: 'Flanges, tile, and Northland baths',
      kind: 'places',
      places: [
        {
          name: 'North Kansas City',
          body:
            'Small baths often have the stop crammed against the tank. We replace that stop when it will not shut off, because you cannot service the toilet if the only isolation is the house main.',
        },
        {
          name: 'Liberty',
          body:
            'Older Liberty floors were built up with linoleum then tile. The flange ends up too low. We spacer or replace the flange so the new wax compresses correctly—otherwise the “new toilet” still seeps.',
        },
        {
          name: 'Gladstone',
          body:
            'Gladstone kids’ baths see a lot of wipes. A toilet that “clogs every week” after a cheap snake is often still a flange or a partial blockage in the closet bend. We distinguish a fixture clog from a [branch drain](/services/drain-cleaning) before we pull china.',
        },
      ],
    },
    {
      id: 'repair-vs-replace-bowl',
      heading: 'Rebuild the internals vs replace the toilet',
      kind: 'compare',
      columns: ['Repair on the existing bowl', 'Replace the toilet'],
      rows: [
        {
          factor: 'Running or weak flush',
          left: 'Fill valve, flapper, or flush valve seat. Same china if it is intact.',
          right: 'Cracked tank, obsolete parts, or a bowl that will not hold a seal.',
        },
        {
          factor: 'Leak at the floor',
          left: 'New wax and a sound, correctly heighted flange.',
          right: 'Broken flange we cannot restore, or a cracked bowl.',
        },
        {
          factor: 'You already bought a new toilet',
          left: 'We can still repair if the old one is fine and the box is a preference.',
          right: 'We set the new unit, haul the old one, and verify the flange first.',
        },
      ],
    },
    {
      id: 'cta',
      heading: 'Toilet running, rocking, or leaking at the base?',
      kind: 'cta',
      body: 'Call (816) 454-0247. Tell us if water is at the floor, in the bowl overnight, or backing up. Those three stories are three different trucks.',
    },
  ],
  faqs: [
    {
      question: 'Why does my toilet run for a few seconds every hour?',
      answer:
        'The flapper or the fill valve is leaking down. We replace the failed part rather than “jiggle the handle” as a repair. If the overflow is cracked, the tank may need replacement.',
    },
    {
      question: 'Can a rocking toilet wait until the weekend?',
      answer:
        'Not if you smell sewer or see water at the base. Each flush can push waste under the floor. Shut the stop and call. A stable, odor-free rock can usually wait for a scheduled reset.',
    },
    {
      question: 'Do you repair closet flanges or only the wax ring?',
      answer:
        'We repair or replace the flange when that is why the wax failed. A new ring on a broken or buried flange is a temporary smell, not a fix.',
    },
    {
      question: 'Will you haul away the old toilet if we replace it?',
      answer:
        'Yes, when replacement is the job. We do not leave a tank in the garage unless you ask to keep it.',
    },
    {
      question: 'Is a toilet that will not flush a toilet problem or a sewer problem in Gladstone?',
      answer:
        'If only that bowl is affected and other fixtures are fine, we start at the toilet and the closet bend. If a shower gurgles or a floor drain rises, stop flushing and treat it as a drain or sewer call.',
    },
  ],
  related: [
    { href: '/services/drain-cleaning', label: 'Drain cleaning' },
    { href: '/services/fixture-installation', label: 'Fixture installation' },
    { href: '/services/sewer-line-repair', label: 'Sewer line repair' },
    { href: '/contact', label: 'Contact and hours' },
  ],
}
