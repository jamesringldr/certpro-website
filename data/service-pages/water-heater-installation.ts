import type { DeepServicePage } from '@/data/service-pages/types'

export const waterHeaterInstallationPage: DeepServicePage = {
  slug: 'water-heater-installation',
  eyebrow: 'Sized for the house — set to code',
  h1: 'Water Heater Installation in North Kansas City',
  lede:
    'Replacement is not “the same tank, two inches to the left.” CertPro sizes the unit to how the house actually uses hot water, checks venting and a drain pan, hauls the old heater, and will not force a tankless upgrade that the gas line cannot support. If the tank is still repairable, start with [water heater repair](/services/water-heater-repair) instead.',
  heroImage: {
    src: '/images/sections/why-choose-vehicle.jpg',
    alt: 'CertPro service vehicle used for water heater replacement calls in the Northland',
  },
  sections: [
    {
      id: 'when-install',
      heading: 'When installation is the job, not a repair',
      kind: 'bullets',
      items: [
        'The steel tank is leaking or the tankless heat exchanger has failed.',
        'The unit is undersized: two showers and a dishwasher cannot run without a cold snap.',
        'You are converting fuel (electric to gas or the reverse) or moving the heater to a legal location.',
        'The old install skipped a pan, drain, expansion tank, or proper vent—and a new unit cannot inherit those shortcuts.',
      ],
    },
    {
      id: 'before-arrival',
      heading: 'What we need from you before we roll a tank',
      kind: 'steps',
      items: [
        {
          title: 'A photo of the rating plate and the closet',
          body:
            'Gallon size or GPM, fuel, and the height of the closet decide whether a same-day swap is even possible in a North Kansas City utility room.',
        },
        {
          title: 'Clear a path',
          body:
            'A 50-gallon tank does not float through a finished Liberty stair with a baby gate on it. We will tell you if we need a second tech or a different route.',
        },
        {
          title: 'Shut it down if it is leaking',
          body:
            'Cold inlet off, breaker or gas off, from a dry place. That is [emergency](/services/emergency-plumbing) containment until we install the replacement.',
        },
      ],
    },
    {
      id: 'how-we-set',
      heading: 'What a proper set includes',
      kind: 'prose',
      paragraphs: [
        'We drain and disconnect the old unit, set the new one level, fill, fire, and check for leaks at every connection. Haul-away is part of the job. We do not leave a wet tank on the curb unless a city rule requires a different disposal path.',
        'Kansas City-area hardness is rough on tankless. If you want tankless, we talk gas pipe size, vent, and a flush schedule before we order. If those cannot be met, we recommend a correctly sized tank instead of a lockout six months later.',
      ],
    },
    {
      id: 'neighborhoods',
      heading: 'Closets, garages, and basements',
      kind: 'places',
      places: [
        {
          name: 'North Kansas City',
          body:
            'Short closets and shared mechanical rooms are the constraint. We measure flue and door swing before we promise a taller replacement. A pan with nowhere to drain is not optional decoration here—it is how you avoid a finished-floor flood.',
        },
        {
          name: 'Liberty',
          body:
            'Basement sets give room to work but often inherit 1990s vents and galvanized nipples. We replace those when they are part of the failure, not as an unexplained add-on after the tank is in.',
        },
        {
          name: 'Gladstone',
          body:
            'Garage heaters need freeze protection on the T&P discharge and a level pad. We set so a future leak does not sheet under the garage door overnight—the callback we are trying to avoid.',
        },
      ],
    },
    {
      id: 'tank-vs-tankless-install',
      heading: 'Tank vs tankless at install time',
      kind: 'compare',
      columns: ['Like-for-like tank', 'Tankless conversion'],
      rows: [
        {
          factor: 'Same-day potential',
          left: 'High if stock matches and the location is ready.',
          right: 'Often a scheduled install after gas and vent are verified.',
        },
        {
          factor: 'Hard water',
          left: 'Anode and flush still matter; simpler annual care.',
          right: 'Needs a flush plan. We will not skip that conversation.',
        },
        {
          factor: 'Gas line',
          left: 'Usually already sized for the old tank.',
          right: 'May need a larger run. That is a real cost, not a surprise upsell.',
        },
      ],
    },
    {
      id: 'cta',
      heading: 'Ready to replace, not patch?',
      kind: 'cta',
      body: 'Call (816) 454-0247 with the rating-plate photo and the city. We will tell you if this is a same-visit swap or a scheduled set.',
    },
  ],
  faqs: [
    {
      question: 'Do you stock common tank sizes for North Kansas City swaps?',
      answer:
        'We work from what we can get the same day for a like-for-like tank. Odd venting, a taller closet constraint, or a tankless conversion is usually a scheduled set after we confirm the rating plate and the gas line.',
    },
    {
      question: 'Can you install a larger tank in the same closet?',
      answer:
        'Sometimes. We measure height, combustion air, and door clearance. A bigger tank that cannot be serviced or vented is not a better install.',
    },
    {
      question: 'Is tankless always more efficient for North Kansas City homes?',
      answer:
        'Not if the gas line, vent, or hardness care is wrong. Efficiency on paper does not survive a unit that lockouts every winter.',
    },
    {
      question: 'How long does a standard tank swap take?',
      answer:
        'A straightforward like-for-like set is often a few hours including haul-away. Closet, vent, or drain corrections add time we will estimate on site.',
    },
    {
      question: 'Do I need a permit for a water heater replacement?',
      answer:
        'Requirements vary by city. We confirm what North Kansas City, Liberty, or Gladstone expects for that swap before we start, and we include it in the scope.',
    },
  ],
  related: [
    { href: '/services/water-heater-repair', label: 'Water heater repair' },
    { href: '/services/emergency-plumbing', label: 'Emergency plumbing' },
    { href: '/services/pipe-repair-repiping', label: 'Pipe repair' },
    { href: '/contact', label: 'Contact and hours' },
  ],
}
