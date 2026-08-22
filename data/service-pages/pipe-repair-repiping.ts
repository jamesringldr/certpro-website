import type { DeepServicePage } from '@/data/service-pages/types'

export const pipeRepairRepipingPage: DeepServicePage = {
  slug: 'pipe-repair-repiping',
  eyebrow: 'One joint, one wing, or the whole house',
  h1: 'Pipe Repair and Repiping in North Kansas City',
  lede:
    'A pinhole in copper, a rusted galvanized nipple, and a cracked PVC fitting are three different jobs. CertPro repairs the failed section when the rest of the run is sound, and we plan a phased or whole-house repipe when the pipe itself is at end of life—not after the third wet ceiling. Hidden water you cannot see yet belongs on [leak detection](/services/leak-detection) first.',
  heroImage: {
    src: '/images/sections/why-choose-vehicle.jpg',
    alt: 'CertPro Plumbing vehicle used for pipe repair and repipe jobs in the Northland',
  },
  sections: [
    {
      id: 'what-failed',
      heading: 'What actually failed in the wall',
      kind: 'bullets',
      intro: 'We name the material and the failure before we talk about opening finishes.',
      items: [
        'Copper pinhole from hard water or stray current on a mid-century ranch.',
        'Galvanized that has narrowed from the inside—low pressure at the far bath, not a bad cartridge.',
        'Polybutylene or failed push-fit that we will not “patch forever.”',
        'A freeze burst on an exterior wall after a Clay County cold snap—stabilize first via [emergency plumbing](/services/emergency-plumbing), then replace the damaged length.',
        'A drain that weeps at a joint under a slab or in a crawl: different access than a supply leak.',
      ],
    },
    {
      id: 'before-arrival',
      heading: 'What to shut off and photograph',
      kind: 'steps',
      items: [
        {
          title: 'Kill the house main if water is still moving',
          body:
            'If a ceiling is dripping, do not wait for us to find a local valve. Shut the main, then photograph which rooms lost pressure. That map is the start of the scope.',
        },
        {
          title: 'Note which fixtures still work',
          body:
            'A Gladstone house that lost only the master bath is a branch repair. A Liberty house that lost every upstairs fixture is a different run. We bring fittings for the story you tell us.',
        },
        {
          title: 'Do not drywall over a “small stain”',
          body:
            'Paint hides the wet path. Leave the opening if you already cut one. We would rather see the pipe than guess from a patched square.',
        },
      ],
    },
    {
      id: 'repair-path',
      heading: 'How we decide a coupling vs a new run',
      kind: 'prose',
      paragraphs: [
        'A single failed joint on otherwise clean copper can be a sectional repair. Three pinholes on the same wing in two years is a repipe conversation, even if each repair was cheap. We will show you the pipe, not a sales sheet.',
        'Repiping is sequenced so you can live in the house: one bathroom, then the kitchen, then the rest—or a planned shutdown if you want it done in fewer days. We do not start a whole-house job without a material choice (PEX vs copper) and a finish plan for the openings.',
        'North Kansas City bungalows and Liberty two-stories do not share the same chase. We price access, not just footage. A crawl you can stand in is not the same as a finished basement ceiling we have to drop in strips.',
      ],
    },
    {
      id: 'neighborhoods',
      heading: 'Galvanized, copper, and Northland chases',
      kind: 'places',
      places: [
        {
          name: 'North Kansas City',
          body:
            'Bungalow walls are thin. We often repair from the basement ceiling or a closet rather than gutting a plaster room. If the galvanized is scaled through, we will say a sectional PEX overlay is cleaner than chasing rust one nipple at a time.',
        },
        {
          name: 'Liberty',
          body:
            'Two-story Liberty homes lose pressure upstairs first when galvanized is dying. We isolate the riser, not the whole house, so you can keep a downstairs bath while we replace the failed stack.',
        },
        {
          name: 'Gladstone',
          body:
            'Gladstone ranches hide copper in slabs and exterior walls. A garage hose bibb that weeps every spring is often the first warning. We repair that length and tell you if the rest of the slab loop is the next risk—not a scare, a sequence.',
        },
      ],
    },
    {
      id: 'section-vs-whole',
      heading: 'Sectional repair vs planned repipe',
      kind: 'compare',
      columns: ['Sectional repair', 'Phased or whole-house repipe'],
      rows: [
        {
          factor: 'One known failure',
          left: 'Open the marked bay, replace the failed length, restore water the same visit when access allows.',
          right: 'Overkill unless the rest of that material is already failing nearby.',
        },
        {
          factor: 'Repeat leaks on the same material',
          left: 'Another coupling buys time, not a system.',
          right: 'We map priority rooms and give you a sequence you can budget.',
        },
        {
          factor: 'Low pressure house-wide',
          left: 'A new cartridge will not fix scaled galvanized.',
          right: 'Repipe (or at least the worst run) is the actual repair.',
        },
      ],
    },
    {
      id: 'cta',
      heading: 'Another leak on the same pipe?',
      kind: 'cta',
      body: 'Call (816) 454-0247. Tell us the material if you know it, and which rooms went wet. We will say whether this is a coupling or a planned run.',
    },
  ],
  faqs: [
    {
      question: 'Can you replace only the pipes in one bathroom?',
      answer:
        'Yes. A bathroom-first phase is common when the rest of the house is still holding. We isolate that wing, restore water to the other baths, and leave you a written next-phase option.',
    },
    {
      question: 'PEX or copper for a North Kansas City repipe?',
      answer:
        'Both can be correct. We choose based on freeze risk, existing fittings, and how much finish we have to open. We will not default to the cheapest footage if the chase cannot take it.',
    },
    {
      question: 'Will a repipe require opening every wall?',
      answer:
        'No. We use basements, closets, and existing openings first. Finished rooms get the smallest honest cuts, photographed before we close the water up.',
    },
    {
      question: 'Is low upstairs pressure always a pipe problem in Liberty?',
      answer:
        'Often on galvanized stacks, but not always. We check the meter, the main, and fixtures before we recommend a riser replacement.',
    },
    {
      question: 'What if the leak is under a Gladstone slab?',
      answer:
        'We locate first. Then we either open at the mark or reroute overhead when that is the cleaner repair. We will not guess a trench from a wet carpet alone.',
    },
  ],
  related: [
    { href: '/services/leak-detection', label: 'Leak detection' },
    { href: '/services/emergency-plumbing', label: 'Emergency plumbing' },
    { href: '/services/water-heater-installation', label: 'Water heater installation' },
    { href: '/contact', label: 'Contact and hours' },
  ],
}
