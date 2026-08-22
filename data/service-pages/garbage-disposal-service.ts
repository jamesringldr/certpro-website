import type { DeepServicePage } from '@/data/service-pages/types'

export const garbageDisposalServicePage: DeepServicePage = {
  slug: 'garbage-disposal-service',
  eyebrow: 'Jam, leak, or dead — not another reset button',
  h1: 'Garbage Disposal Service in North Kansas City',
  lede:
    'A disposal that hums and does not spin is a jam. One that sits silent after a reset is often a failed motor. One that drips from the bottom is a cracked housing—replacement, not a wrench under the sink. CertPro frees jams, replaces units that have failed, and will tell you when the real backup is the kitchen branch, not the grind chamber. Grease-packed lines belong with [drain cleaning](/services/drain-cleaning).',
  heroImage: {
    src: '/images/articles/article-basement-drains.jpg',
    alt: 'Kitchen and drain area typical of Northland homes that share a disposal and sink branch',
  },
  sections: [
    {
      id: 'symptom',
      heading: 'Hum, silence, leak, or smell',
      kind: 'bullets',
      items: [
        'Hums, will not spin: jammed impeller. We free it from the bottom hex, not by reaching into the splash guard with a fork.',
        'Dead, reset already pressed: thermal overload or a failed unit. We check power at the switch before we sell a motor.',
        'Drip from the can body: the housing is done. Tighten the drain flange only if the leak is at the sink, not the side of the disposal.',
        'Dishwasher backup into the sink: knockout plug never removed, or the dishwasher tailpiece is clogged—not always a new disposal.',
        'Kitchen slow after “the disposal ate grease”: the machine did its job; the pipe is coated. That is a line clear, not a new grind ring.',
      ],
    },
    {
      id: 'before-arrival',
      heading: 'What to do under the sink before we arrive',
      kind: 'steps',
      items: [
        {
          title: 'Kill the switch and the breaker if you smell hot plastic',
          body:
            'A humming jam that has been switched on for ten minutes can cook the motor. Power off. Do not keep hitting reset.',
        },
        {
          title: 'Stop putting water down a leaking disposal',
          body:
            'A North Kansas City cabinet floor can swell in an afternoon. Bucket the drip, shut the sink, and keep the dishwasher off until we see the leak path.',
        },
        {
          title: 'Tell us what went in last',
          body:
            'Bones, potato peels, and a bottle cap are different recoveries. A Gladstone holiday kitchen that ran grease through the disposal needs the branch discussed, not only a new unit.',
        },
      ],
    },
    {
      id: 'repair-or-swap',
      heading: 'How we service the unit without guessing the pipe',
      kind: 'prose',
      paragraphs: [
        'We confirm power, free a jam when the grind ring is intact, and run water to watch the discharge. If the housing weeps, we replace. If the sink flange is the only leak, we reseat the flange and the plumber’s putty or gasket—cheaper than a whole unit.',
        'Same-visit replacement depends on horsepower, sink opening, and whether the dishwasher connection is present. We do not hang a heavier unit on a rusted flange without saying the sink opening may need attention.',
        'Liberty kitchens with an island sink sometimes have a long discharge that clogs after the disposal. Clearing the island loop is not the same SKU as a new Badger. We separate those on the invoice.',
      ],
    },
    {
      id: 'neighborhoods',
      heading: 'Kitchen branches in the Northland',
      kind: 'places',
      places: [
        {
          name: 'North Kansas City',
          body:
            'Tight cabinets and original galvanized traps make a leak look like a “disposal problem” when the slip joint is the failure. We check the trap before we unbolt a working motor.',
        },
        {
          name: 'Liberty',
          body:
            'Liberty remodels often add a dishwasher to a disposal that never had the knockout removed. The first-week “new dishwasher leak” is frequently that plug, still in the inlet.',
        },
        {
          name: 'Gladstone',
          body:
            'Gladstone ranches share a long kitchen branch with the disposal. A unit that “keeps clogging” after two resets is often grease in the pipe. We will not sell a third disposal for a line that needs to be cleaned.',
        },
      ],
    },
    {
      id: 'jam-vs-replace',
      heading: 'Free the jam vs replace the unit',
      kind: 'compare',
      columns: ['Service the existing disposal', 'Replace the disposal'],
      rows: [
        {
          factor: 'Jam, housing dry',
          left: 'Hex key, reset, test grind. You keep the unit.',
          right: 'Only if the impeller is broken or the motor will not start after a free spin.',
        },
        {
          factor: 'Leak from the can',
          left: 'Not repairable. Stop using it.',
          right: 'New unit, correct discharge, dishwasher inlet if you have one.',
        },
        {
          factor: 'Slow sink after grinding',
          left: 'The disposal may be fine.',
          right: 'A new motor will not open a greased branch. That is [drain cleaning](/services/drain-cleaning).',
        },
      ],
    },
    {
      id: 'cta',
      heading: 'Disposal humming, leaking, or dead?',
      kind: 'cta',
      body: 'Call (816) 454-0247. Tell us if it hums, if the cabinet is wet, or if the dishwasher backs into the sink. Those three calls are not the same part.',
    },
  ],
  faqs: [
    {
      question: 'Should I put a hex key in the bottom of the disposal myself?',
      answer:
        'If you are comfortable with the power off, the bottom hex can free a jam. If it will not turn, stop. Forcing it can break the impeller. We will finish that without reaching through the splash guard.',
    },
    {
      question: 'Why did my dishwasher fill the kitchen sink after a disposal swap?',
      answer:
        'The dishwasher inlet knockout was left in, or the tailpiece is blocked. We check that on every replacement so you do not discover it at dinner.',
    },
    {
      question: 'Can you replace a disposal the same day in North Kansas City?',
      answer:
        'Often, when the sink opening and electrical match a unit we can get. Odd flanges or a failed wiring whip can turn it into a scheduled return with the right part.',
    },
    {
      question: 'Is a smelly disposal a failed unit?',
      answer:
        'Usually food in the splash guard or a dry trap, not a new motor. We clean and test before we replace. Persistent odor with a slow drain is the kitchen line.',
    },
    {
      question: 'What should never go in a Gladstone kitchen disposal?',
      answer:
        'Grease, fibrous peels, and hard pits. The machine will take them; the pipe will not. If grease already went in, say so—we may need the branch, not just the grind chamber.',
    },
  ],
  related: [
    { href: '/services/drain-cleaning', label: 'Drain cleaning' },
    { href: '/services/fixture-installation', label: 'Fixture installation' },
    { href: '/services/emergency-plumbing', label: 'Emergency plumbing' },
    { href: '/contact', label: 'Contact and hours' },
  ],
}
