import type { DeepServicePage } from '@/data/service-pages/types'

export const leakDetectionPage: DeepServicePage = {
  slug: 'leak-detection',
  eyebrow: 'Find it before the drywall comes down',
  h1: 'Leak Detection in North Kansas City',
  lede:
    'A high water bill, a warm spot on a Liberty floor, or a Gladstone slab that stays wet after rain can hide a supply leak for months. CertPro locates the source with a method that matches the pipe—not a demolition-first guess—and then we repair the shortest honest path.',
  heroImage: {
    src: '/images/sections/why-choose-plumber.jpg',
    alt: 'CertPro plumber locating a hidden leak during a North Kansas City service call',
  },
  sections: [
    {
      id: 'signs',
      heading: 'Hidden leak signs that are not a dripping faucet',
      kind: 'bullets',
      items: [
        'Water bill jumped with no change in household use.',
        'Meter moves when every fixture is off.',
        'Warm floor, peeling paint, or a musty closet with no roof stain.',
        'Soggy strip in the yard that is not a sprinkler head.',
        'Low pressure on one wing of the house while the other side is fine.',
      ],
    },
    {
      id: 'before-arrival',
      heading: 'What to check before we bring detection tools',
      kind: 'steps',
      items: [
        {
          title: 'Read the meter with everything off',
          body:
            'Shut all fixtures, ice maker included. If the leak indicator still turns, say so. That tells us we are hunting a supply leak, not a drain drip.',
        },
        {
          title: 'Do not keep “topping off” a wet ceiling',
          body:
            'If a ceiling is stained and growing, shut the house main and call [emergency plumbing](/services/emergency-plumbing). Detection is for leaks you cannot see yet—not active spraying.',
        },
        {
          title: 'Photograph the wet area over two days',
          body:
            'A North Kansas City basement that is wet only after laundry is a different hunt than a Gladstone garage that is wet every morning.',
        },
      ],
    },
    {
      id: 'how-we-find',
      heading: 'How we pinpoint without opening every wall',
      kind: 'prose',
      paragraphs: [
        'We start with isolation: which valve kills the symptom. Then we use listening, moisture readings, and, when needed, line tracing. The goal is a mark on the wall or slab you can see, plus a plan for the opening.',
        'Slab leaks and copper in crawl spaces are common in mid-century Northland ranches. We will not promise a “no-cut” repair if the pipe has to come out. We will promise we will not open three rooms to find one joint.',
        'If the leak is on a drain rather than a supply, the repair path may be [pipe repair](/services/pipe-repair-repiping) or a fixture reset rather than a full repipe. A water heater pan that has never been emptied can look like a slab leak from the hallway. We check the obvious mechanicals before we talk about jackhammering a garage.',
        'Once the source is marked, we give you a repair choice: open that bay now, or leave the mark and schedule the opening when you can have a floor dry. Detection without a next step is only half the visit. Detection that turns into three exploratory holes is the other failure we are trying to avoid.',
      ],
    },
    {
      id: 'neighborhoods',
      heading: 'Where Northland leaks hide',
      kind: 'places',
      places: [
        {
          name: 'North Kansas City',
          body:
            'Utility closets and tight basements hide failed shutoffs and heater connections. We often find the “mystery water” at a tank pan that was never drained, not under the slab.',
        },
        {
          name: 'Liberty',
          body:
            'Plaster and lath in older Liberty homes carry water sideways. A stain in the dining room can originate at a bath stack two rooms over. We map moisture before we cut decorative plaster.',
        },
        {
          name: 'Gladstone',
          body:
            'Gladstone slabs and garages see copper pinholes and failed hose bibb lines in exterior walls after freeze. Detection here is often “which wall bay” before we talk about a sectional repipe. A wet garage that only shows after a polar night is a freeze burst until proven otherwise—not a mystery under the driveway.',
        },
      ],
    },
    {
      id: 'find-vs-open',
      heading: 'Locate vs repair in the same visit',
      kind: 'compare',
      columns: ['Detection visit', 'Repair the same day'],
      rows: [
        {
          factor: 'Access',
          left: 'We can hear or isolate without finish demolition.',
          right: 'The marked section is reachable and dry enough to work.',
        },
        {
          factor: 'Finish work',
          left: 'We mark and photograph. You decide who patches walls.',
          right: 'We open only the marked bay and repair the failed section.',
        },
        {
          factor: 'Whole-house copper',
          left: 'One pinhole found; rest of the run still unknown.',
          right: 'We discuss sectional repair vs a planned [repipe](/services/pipe-repair-repiping).',
        },
      ],
    },
    {
      id: 'cta',
      heading: 'Meter moving with everything off?',
      kind: 'cta',
      body: 'Call (816) 454-0247. Tell us whether the wet area grows after rain, after laundry, or all the time. That changes what we bring.',
    },
  ],
  faqs: [
    {
      question: 'Can you find slab leaks in North Kansas City?',
      answer:
        'Yes. We isolate the zone and locate before we recommend opening the slab or rerouting. A slab leak is a locate-then-repair job, not a random jackhammer.',
    },
    {
      question: 'Is a high water bill always a leak?',
      answer:
        'No. A running toilet can waste more than a pinhole. We check fixtures and the meter before we hunt walls.',
    },
    {
      question: 'Will you cut my floor on the first visit?',
      answer:
        'Only if we have a confirmed location and you authorize the opening. Detection can end with a mark and a price for the repair.',
    },
    {
      question: 'What if the leak is behind plaster in Liberty?',
      answer:
        'We map the wet path and open the smallest bay that reaches the joint. Plaster repair is usually a separate trade unless you ask us to close a small utility cut.',
    },
    {
      question: 'Do you use dye in drain leaks?',
      answer:
        'When it helps, yes—especially for a shower pan or a poorly sealed toilet. Supply leaks use meter and acoustic methods instead.',
    },
  ],
  related: [
    { href: '/services/pipe-repair-repiping', label: 'Pipe repair and repiping' },
    { href: '/services/emergency-plumbing', label: 'Emergency plumbing' },
    { href: '/services/water-heater-repair', label: 'Water heater repair' },
    { href: '/contact', label: 'Contact and hours' },
  ],
}
