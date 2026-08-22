import type { DeepServicePage } from '@/data/service-pages/types'

export const fixtureInstallationPage: DeepServicePage = {
  slug: 'fixture-installation',
  eyebrow: 'Faucets, sinks, and showers that sit true',
  h1: 'Fixture Installation in North Kansas City',
  lede:
    'A boxed faucet is not an install. CertPro sets sinks, faucets, tub/shower valves, and supply stops so they do not weep behind the wall six weeks later. Toilets have their own failure modes—use [toilet repair](/services/toilet-repair) for a rocking bowl or a running fill valve. Customer-supplied trim is welcome when the rough-in matches the box.',
  heroImage: {
    src: '/images/sections/why-choose-plumber.jpg',
    alt: 'CertPro plumber finishing a fixture install in a North Kansas City home',
  },
  sections: [
    {
      id: 'what-we-set',
      heading: 'What this page covers (and what it does not)',
      kind: 'bullets',
      items: [
        'Kitchen and bath faucets, including widespread and single-hole swaps on existing sinks.',
        'Drop-in and undermount sinks when the counter can take the cut and the clips.',
        'Shower and tub valves, trims, and heads—only after we confirm the valve body behind the tile.',
        'Laundry faucets and utility sinks that have been leaking at the old stops.',
        'Not a whole-bath remodel, and not a toilet reset (that is a dedicated [toilet](/services/toilet-repair) visit).',
      ],
    },
    {
      id: 'before-arrival',
      heading: 'What to have ready before we unbox your faucet',
      kind: 'steps',
      items: [
        {
          title: 'Keep the spec sheet and the old faucet',
          body:
            'Hole count, spread, and supply size decide whether your Liberty vanity will take the new trim without a new deck. Bring the old faucet out from under the sink if you already pulled it.',
        },
        {
          title: 'Clear under the cabinet',
          body:
            'We need the shutoffs, the trap, and room for a bucket. A Gladstone kitchen packed to the P-trap is an extra half hour of moving, not a better install.',
        },
        {
          title: 'Do not open the tile for a shower valve unless we asked',
          body:
            'If the cartridge is seized, we may need a wall opening. Cutting decorative tile yourself usually costs more to match than waiting for us to mark the smallest bay.',
        },
      ],
    },
    {
      id: 'how-we-install',
      heading: 'How we install without a callback leak',
      kind: 'prose',
      paragraphs: [
        'We shut the stops—or the house main if the stops are seized—and we replace those stops when they will not hold. A new faucet on a 1990s angle stop that weeps is not a finished job.',
        'Supply lines get new, correctly sized connectors. We do not reuse braided lines that have already kinked. After the set, we run hot and cold, check the drain, and wipe the cabinet dry so you can see it is still dry before we leave.',
        'Shower valves in North Kansas City brick ranches often sit deeper than the new trim expects. We will tell you if an extension kit is required before we leave a handle that does not seat. That is a parts decision, not a surprise invoice after the tile is open.',
      ],
    },
    {
      id: 'neighborhoods',
      heading: 'Vanities, tile, and Northland rough-ins',
      kind: 'places',
      places: [
        {
          name: 'North Kansas City',
          body:
            'Older NKC vanities were drilled for 8-inch widespread. A single-hole pull-down needs a deck plate or a new top. We measure before we promise the boxed faucet will cover the old holes.',
        },
        {
          name: 'Liberty',
          body:
            'Liberty baths from the plaster era have shutoffs that have never been turned. We budget time to replace them rather than force a seized valve and flood the cabinet.',
        },
        {
          name: 'Gladstone',
          body:
            'Gladstone showers from the 1970s hide two-handle valves behind one-piece surrounds. If the surround cannot come off cleanly, we talk about a trim-only service versus opening the wall. We will not pretend a cartridge is reachable when it is not.',
        },
      ],
    },
    {
      id: 'swap-vs-rough',
      heading: 'Trim swap vs opening the wall',
      kind: 'compare',
      columns: ['Same-hole fixture swap', 'Rough-in or valve body work'],
      rows: [
        {
          factor: 'Faucet on an existing sink',
          left: 'Usually a scheduled visit with the new trim on site.',
          right: 'Needed if the deck is rotten, the holes do not match, or the sink itself is cracked.',
        },
        {
          factor: 'Shower handle only',
          left: 'Works when the valve brand matches and the cartridge comes out.',
          right: 'A different brand or a failed plaster-in body means tile work we will scope first.',
        },
        {
          factor: 'Customer-supplied fixture',
          left: 'We install it if the rough-in matches the instructions.',
          right: 'We stop and show you the mismatch rather than force a leaky set.',
        },
      ],
    },
    {
      id: 'cta',
      heading: 'Fixture on the counter, waiting to go in?',
      kind: 'cta',
      body: 'Call (816) 454-0247 with the brand and a photo of the holes or the valve. We will tell you if this is a trim swap or a rough-in visit.',
    },
  ],
  faqs: [
    {
      question: 'Will you install a faucet I bought at a box store?',
      answer:
        'Yes, when the hole count and valve type match. If they do not, we show you the mismatch before we open the box and waste a return window.',
    },
    {
      question: 'Do you replace the shutoff valves under the sink?',
      answer:
        'When they leak, seize, or will not hold after we work. A new faucet on a failing stop is a callback waiting to happen.',
    },
    {
      question: 'Can you set an undermount sink in an existing granite top?',
      answer:
        'If the cut and clips are already correct, yes. A new cut in a finished top is a different trade. We will not grind stone on a guess.',
    },
    {
      question: 'Why will the new shower trim not sit flush in my Gladstone bath?',
      answer:
        'The valve is often set too deep or too proud for the new escutcheon. We correct depth with the right kit, or we tell you the wall has to open.',
    },
    {
      question: 'Is a leaking kitchen sprayer a fixture job or a pipe job?',
      answer:
        'Usually the sprayer hose or the faucet body. If the leak is in the wall behind the sink, that becomes [pipe repair](/services/pipe-repair-repiping) or [leak detection](/services/leak-detection).',
    },
  ],
  related: [
    { href: '/services/toilet-repair', label: 'Toilet repair' },
    { href: '/services/pipe-repair-repiping', label: 'Pipe repair and repiping' },
    { href: '/services/leak-detection', label: 'Leak detection' },
    { href: '/contact', label: 'Contact and hours' },
  ],
}
