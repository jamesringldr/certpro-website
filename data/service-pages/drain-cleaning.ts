import type { DeepServicePage } from '@/data/service-pages/types'

export const drainCleaningPage: DeepServicePage = {
  slug: 'drain-cleaning',
  eyebrow: 'Sinks, showers, and branch lines — not a guessing snake',
  h1: 'Drain Cleaning in North Kansas City',
  lede:
    'A slow kitchen sink in Gladstone and a basement floor drain in Liberty are not the same job. CertPro clears branch lines and fixtures with the tool that matches the stoppage, and we will tell you when the problem is actually the [building sewer](/services/sewer-line-repair) instead of selling another cable on a broken lateral.',
  heroImage: {
    src: '/images/articles/article-basement-drains.jpg',
    alt: 'Basement drain area in a Northland home where backups often start',
  },
  sections: [
    {
      id: 'which-drain',
      heading: 'Which drain is actually blocked',
      kind: 'bullets',
      intro: 'Start with what is slow. That tells us whether we are in a fixture, a branch, or the main.',
      items: [
        'One sink or tub only — usually hair, grease, or a trap/branch issue on that fixture.',
        'Kitchen plus dishwasher — often the kitchen branch or disposal knockout, not the city main.',
        'Toilet that gurgles when a shower runs — the two fixtures share a line; we check that branch before we talk sewer.',
        'Several fixtures plus a floor drain — stop using water and treat it as a possible [sewer line](/services/sewer-line-repair) problem.',
      ],
    },
    {
      id: 'before-arrival',
      heading: 'What to do before we snake or jet',
      kind: 'steps',
      items: [
        {
          title: 'Stop pouring products down the line',
          body:
            'Chemical openers sit in the trap and make the first cut more dangerous. If you already used them, say so on the call.',
        },
        {
          title: 'Do not keep running water “to push it through”',
          body:
            'That is how a kitchen clog becomes a cabinet leak. If water is standing, shut the fixture off and bail what you can into a bucket.',
        },
        {
          title: 'Note what went in the drain',
          body:
            'Kids’ wipes, grease from a holiday meal, and a dropped toy are different recoveries. North Kansas City kitchen lines packed with cooled grease need a different approach than a Gladstone tub full of hair.',
        },
      ],
    },
    {
      id: 'how-we-clear',
      heading: 'How we clear it without wrecking the pipe',
      kind: 'prose',
      paragraphs: [
        'We pick the cable, cutter, or jet for the pipe we can see—not a default “main-line special.” A galvanized kitchen branch in an older Liberty house will not take the same aggression as a newer PVC run.',
        'If the stoppage returns in the same spot, we look for a belly, a broken fitting, or roots migrating from a clay joint. That is when drain cleaning stops being the repair and [sewer diagnostics](/services/sewer-line-repair) start. We would rather say that on visit one than take a second fee for the same clog.',
      ],
    },
    {
      id: 'neighborhoods',
      heading: 'Grease, hair, and Northland housing stock',
      kind: 'places',
      places: [
        {
          name: 'North Kansas City',
          body:
            'Small commercial kitchens and bungalow kitchen branches collect grease fast. We clear the line and talk about a strainer and a real grease practice—not a lecture, a way to keep you off the emergency list.',
        },
        {
          name: 'Liberty',
          body:
            'Older Liberty baths often have drum traps or tight turns that eat hair. We access from the fixture that actually opens the run instead of punching a cleanout that does not exist.',
        },
        {
          name: 'Gladstone',
          body:
            'Gladstone ranches send a lot of laundry and tub water through the same long branch. A “slow shower” that also backs a floor drain is a different call than a single tub. We sort that before we put a machine on the line.',
        },
      ],
    },
    {
      id: 'clean-vs-repair',
      heading: 'Clear the clog vs open the pipe',
      kind: 'compare',
      columns: ['Drain cleaning', 'Repair or sewer work'],
      rows: [
        {
          factor: 'First backup, one fixture',
          left: 'Clear and confirm flow. Show you what came out.',
          right: 'Not needed unless the pipe is already leaking at a joint.',
        },
        {
          factor: 'Same clog twice',
          left: 'Second clear only if we believe the pipe is intact.',
          right: 'Camera or access if the stoppage sits in the same place.',
        },
        {
          factor: 'Sewage at a floor drain',
          left: 'Not a plunger job. Stop water use.',
          right: 'Treat as [sewer](/services/sewer-line-repair) until proven otherwise.',
        },
      ],
    },
    {
      id: 'cta',
      heading: 'Slow drain that will not stay clear?',
      kind: 'cta',
      body: 'Call (816) 454-0247. Tell us which fixtures are involved. We will say if this looks like a branch clear or a main-line diagnosis.',
    },
  ],
  faqs: [
    {
      question: 'Can you clean a main sewer line or only sinks?',
      answer:
        'We clear branch lines and, when the pipe is intact, main-line stoppages. If the camera or symptoms show a broken lateral, we switch to sewer repair instead of repeating a snake.',
    },
    {
      question: 'Do chemical drain cleaners help?',
      answer:
        'They rarely finish a real blockage and they can damage older metal pipe. Skip them if you are going to call a plumber the same day.',
    },
    {
      question: 'Why did my kitchen clog come back after a week?',
      answer:
        'Grease coats the pipe. A cheap clear punches a hole through it. We remove the mass when we can, and we tell you if the line itself is belled or collapsing.',
    },
    {
      question: 'Should I use the other bathrooms while one drain is slow?',
      answer:
        'If only one fixture is affected, yes. If toilets gurgle or a floor drain rises, stop using water in the house and call.',
    },
    {
      question: 'Do you need a cleanout to clear a drain in Gladstone?',
      answer:
        'A cleanout helps. Many Gladstone ranches do not have a convenient one. We can often work from a fixture or an accessible trap without cutting the slab on visit one.',
    },
  ],
  related: [
    { href: '/services/sewer-line-repair', label: 'Sewer line repair' },
    { href: '/services/garbage-disposal-service', label: 'Garbage disposal service' },
    { href: '/services/emergency-plumbing', label: 'Emergency plumbing' },
    { href: '/contact', label: 'Contact and hours' },
  ],
}
